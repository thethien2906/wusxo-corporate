"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Target, Eye, Heart, Lightbulb, Shield, Users2, Flame, Globe, Rocket, ArrowRight } from "lucide-react";

import { TextReveal } from "@/components/ui/text-reveal";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export default function AboutPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const values = [
        {
            icon: Heart,
            title: "Trung thực",
            description:
                "Cam kết minh bạch trong mọi giao dịch và đặt lợi ích khách hàng lên hàng đầu",
            background: <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-50" />,
            className: "md:col-span-1",
        },
        {
            icon: Lightbulb,
            title: "Sáng tạo",
            description:
                "Không ngừng đổi mới và tìm kiếm những giải pháp công nghệ tiên tiến",
            background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-50" />,
            className: "md:col-span-2",
        },
        {
            icon: Shield,
            title: "Trách nhiệm",
            description:
                "Chịu trách nhiệm hoàn toàn về chất lượng sản phẩm và dịch vụ",
            background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50" />,
            className: "md:col-span-2",
        },
        {
            icon: Users2,
            title: "Hợp tác",
            description:
                "Xây dựng mối quan hệ đối tác bền vững dựa trên sự tin tưởng",
            background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-50" />,
            className: "md:col-span-1",
        },
    ];

    const timeline = [
        {
            year: "2024",
            title: "Khởi đầu",
            description:
                "WuSxo được thành lập bởi nhóm các kỹ sư đam mê công nghệ.",
        },
        {
            year: "2025",
            title: "Mở rộng",
            description:
                "Phát triển đội ngũ và ra mắt sản phẩm đầu tiên SmartFlow.",
        },
        {
            year: "2026",
            title: "Hiện tại",
            description:
                "Tiếp tục đổi mới và đồng hành cùng hơn 30 đối tác.",
        },
    ];

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="py-32 md:py-30 flex justify-center">
                <div className="max-w-[1600px] w-full px-6 flex flex-col items-center text-center">
                    <motion.div {...fadeInUp} className="max-w-4xl flex flex-col items-center">
                        <div className="w-full max-w-lg md:max-w-2xl aspect-[3/1] relative mb-10">
                            <Image
                                src="/logos/wusxo_letter_logo.png"
                                alt="WuSxo Logo"
                                fill
                                className="object-contain scale-[4.0]"
                                priority
                            />
                        </div>
                        <div className="mb-12">
                            <TextReveal
                                className="text-xl md:text-2xl text-gray-400 leading-relaxed text-center"
                                delay={0.3}
                            >
                                Chúng tôi là đội ngũ các kỹ sư công nghệ đam mê, cam kết xây dựng các giải pháp phần mềm hiện đại và đáng tin cậy.
                            </TextReveal>
                        </div>

                        {/* Badges */}
                        {/* Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-4 relative"
                        >
                            {/* Define Gradient for Icon */}
                            <svg width="0" height="0" className="absolute">
                                <linearGradient id="lime-iris-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#92C948" />
                                    <stop offset="100%" stopColor="#644AD1" />
                                </linearGradient>
                            </svg>

                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                            >
                                <Flame size={16} color="#92C948" />
                                <span className="text-sm font-medium">Nhiệt huyết</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                            >
                                <Globe size={16} style={{ stroke: "url(#lime-iris-gradient)" }} />
                                <span className="text-sm font-medium">Đam mê</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                            >
                                <Heart size={16} color="#644AD1" />
                                <span className="text-sm font-medium">Vươn xa</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision & Prospects */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column: Sứ mệnh (Mission) - Large Card */}
                        <motion.div
                            {...fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative overflow-hidden rounded-3xl bg-[#644AD1] p-8 md:p-12 flex flex-col justify-between min-h-[500px] group cursor-default"
                        >
                            <motion.div
                                className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            >
                                <Target size={300} strokeWidth={0.5} />
                            </motion.div>

                            <div className="relative z-10 flex flex-col items-center justify-center flex-1 my-10">
                                {/* <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 ring-1 ring-white/20 shadow-2xl"
                                >
                                    <Target size={48} className="text-white" />
                                </motion.div> */}
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold text-white mb-4">Sứ mệnh</h2>
                                <p className="text-lg text-[#E0DCF2] leading-relaxed mb-6">
                                    Tạo ra những sản phẩm công nghệ vượt trội và cung cấp dịch vụ gia công phần mềm chất lượng cao, giúp doanh nghiệp chuyển đổi số thành công.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Tầm nhìn & Triển vọng */}
                        <div className="flex flex-col gap-6">
                            {/* Top Card: Tầm nhìn (Vision) */}
                            <motion.div
                                {...fadeInUp}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex-1 rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col justify-center hover:bg-white/10 transition-colors group cursor-default"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                                        className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0"
                                    >
                                        <Eye size={28} className="text-[#9B8BDC]" />
                                    </motion.div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-3">Tầm nhìn</h2>
                                        <p className="text-gray-400 leading-relaxed mb-4">
                                            Trở thành đối tác công nghệ đáng tin cậy hàng đầu tại Việt Nam, được công nhận về chất lượng sản phẩm và sự đổi mới trong tư duy.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Bottom Card: Triển vọng (Prospects) */}
                            <motion.div
                                {...fadeInUp}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex-1 rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col justify-center hover:bg-white/10 transition-colors group cursor-default"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0"
                                    >
                                        <Rocket size={28} className="text-[#92C948]" />
                                    </motion.div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-3">Triển Vọng</h2>
                                        <p className="text-gray-400 leading-relaxed mb-4">
                                            Hướng tới việc xây dựng hệ sinh thái công nghệ toàn diện, mở rộng thị trường quốc tế và tiên phong trong các xu hướng công nghệ mới như AI & Blockchain.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Giá trị cốt lõi
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Những nguyên tắc định hướng mọi hoạt động của chúng tôi.
                        </p>
                    </motion.div>

                    <BentoGrid className="max-w-4xl mx-auto">
                        {values.map((value, index) => (
                            <BentoCard
                                key={index}
                                name={value.title}
                                className={value.className}
                                background={value.background}
                                Icon={value.icon}
                                description={value.description}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Hành trình
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Từ khởi đầu đến hiện tại.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-8"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-sm font-bold text-white">{item.year}</span>
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className="w-px h-full bg-white/10 mt-4"></div>
                                    )}
                                </div>
                                <div className="pb-12">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
