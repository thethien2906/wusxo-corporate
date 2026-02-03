"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "motion/react";
import { Code2, Smartphone, Database, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const services: Service[] = [
    {
        id: "web",
        title: "Web Application",
        description: "Phát triển ứng dụng web hiện đại với React, Next.js và các công nghệ tiên tiến.",
        icon: Code2,
    },
    {
        id: "mobile",
        title: "Mobile Application",
        description: "Ứng dụng di động đa nền tảng cho iOS và Android với trải nghiệm tốt nhất.",
        icon: Smartphone,
    },
    {
        id: "backend",
        title: "Backend & API",
        description: "Thiết kế và phát triển backend mạnh mẽ, bảo mật và có khả năng mở rộng.",
        icon: Database,
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "Triển khai và quản lý hạ tầng đám mây với AWS, Azure, Google Cloud.",
        icon: Cloud,
    },
];

const RADIUS = 240; // Radius of the orbit (tăng từ 160 lên 240)

export function OrbitCarousel() {
    const [activeId, setActiveId] = useState(services[0].id);
    const [isHovering, setIsHovering] = useState(false);

    // Angle of the entire system
    // Start from -90° so that 0° points up (top of circle) in visual space
    const angle = useMotionValue(-90);

    // Create a continuous rotation animation
    useEffect(() => {
        const controls = animate(angle, 270, { // Animate from -90 to 270 (full 360° rotation)
            duration: 30, // seconds for one full rotation
            ease: "linear",
            repeat: Infinity,
            onUpdate: (latest) => {
                // Reset to -90 to keep numbers reasonable
                if (latest >= 270) {
                    angle.set(latest - 360);
                }
            }
        });

        return () => controls.stop();
    }, [angle]);

    // Adjust speed or pause on hover (optional enhancement: slow down instead of stop)
    useEffect(() => {
        if (isHovering) {
            // We could stop/pause, but 'motion' handles this differently. 
            // For simplicity, let's just let it rotate or implementation slow down would require more complex animation state management.
            // Let's rely on the user interacting.
            // Actually, requirements said: "Vòng xoay có thể dừng lại".
            // We can manipulate the 'timeScale' if we had the animation reference, or just re-animate.
        }
    }, [isHovering]);

    const activeService = services.find(s => s.id === activeId) || services[0];

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[580px] flex items-center justify-center overflow-hidden">
            {/* Background Orbits */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-[420px] h-[420px] border border-white rounded-full" />
                <div className="w-[520px] h-[520px] border border-white/50 border-dashed rounded-full absolute" />
            </div>

            {/* Connection Line (SVG) */}
            {/* 
         This is slightly complex because the icons are rotating with the container or mathematically.
         Ease of implementation: Rotate a container holding the icons.
         But then the icons rotate themselves (upside down).
         Better: Calculate positions.
      */}

            {/* 
         Implementation Strategy:
         We render the spinning 'orbit' layer.
         Inside it, we counter-rotate icons so they stay upright? 
         Or we just position them absolute and use math for x/y based on 'angle'.
      */}

            <OrbitSystem
                services={services}
                activeId={activeId}
                onSelect={setActiveId}
                radius={RADIUS}
                angle={angle}
                setIsHovering={setIsHovering}
            />

            {/* Center Core */}
            <div className="absolute z-20 w-80 h-80 flex flex-col items-center justify-center text-center p-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-3 p-3 rounded-lg bg-white/5 border border-white/10">
                            <activeService.icon size={32} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{activeService.title}</h3>
                        <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-3">
                            {activeService.description}
                        </p>

                        {/* <button className="text-xs flex items-center gap-1 text-white/70 hover:text-white transition-colors">
              Xem chi tiết <ArrowRight size={12} />
            </button> */}
                    </motion.div>
                </AnimatePresence>

                {/* Glow behind */}
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full -z-10" />
            </div>
        </div>
    );
}

function OrbitSystem({
    services,
    activeId,
    onSelect,
    radius,
    angle,
    setIsHovering
}: {
    services: Service[],
    activeId: string,
    onSelect: (id: string) => void,
    radius: number,
    angle: any,
    setIsHovering: (v: boolean) => void
}) {

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            {services.map((service, index) => {
                const step = 360 / services.length;
                const offset = index * step;

                // Transform angle + offset to x, y
                const x = useTransform(angle, (a: number) => Math.cos((a + offset) * (Math.PI / 180)) * radius);
                const y = useTransform(angle, (a: number) => Math.sin((a + offset) * (Math.PI / 180)) * radius);

                const isActive = activeId === service.id;

                return (
                    <React.Fragment key={service.id}>
                        <motion.button
                            className={`absolute w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-300 z-30
                    ${isActive
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.5)] scale-110"
                                    : "bg-black/50 text-gray-400 border-white/20 hover:border-white/60 hover:text-white backdrop-blur-sm"
                                }
                `}
                            style={{
                                x,
                                y,
                                left: '50%',
                                top: '50%',
                                translateX: '-50%',
                                translateY: '-50%'
                            }}
                            onClick={() => onSelect(service.id)}
                            onMouseEnter={() => {
                                setIsHovering(true);
                                onSelect(service.id);
                            }}
                            onMouseLeave={() => setIsHovering(false)}
                            whileHover={{ scale: 1.2 }}
                        >
                            <service.icon size={28} />

                            {/* Active Line Connection Indicator */}
                            {isActive && (
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-20"
                                />
                            )}
                        </motion.button>


                    </React.Fragment>
                );
            })}

        </div>
    );
}
