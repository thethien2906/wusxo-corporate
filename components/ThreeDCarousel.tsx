'use client';
import React, { useMemo, useRef, useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* 1️⃣  Config ————————————————————————— */
const CARD_W = 200; // Reduced width
const CARD_H = 280; // Reduced height
const RADIUS = 250; // Further reduced radius for tighter circle
const TILT_SENSITIVITY = 15;
const DRAG_SENSITIVITY = 0.5;
const INERTIA_FRICTION = 0.95;
const AUTOSPIN_SPEED = 0.2; // Slower spin
const IDLE_TIMEOUT = 1000;

/* 2️⃣  Data Types —————————————————————— */
export interface CarouselItem {
    id: string;
    name: string;
    description: string;
    path: string;
    image?: string;
    color?: string;
}

/* 3️⃣  Card Component —————————————————— */
interface CardProps {
    item: CarouselItem;
    transform: string;
    cardW: number;
    cardH: number;
}

const Card = React.memo(({ item, transform, cardW, cardH }: CardProps) => (
    <div
        className="absolute group"
        style={{
            width: cardW,
            height: cardH,
            transform,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
        }}
    >
        <div
            className="block w-full h-full relative select-none"
            style={{ backfaceVisibility: 'hidden' }} // Only show front face
            draggable="false"
        >
            <div
                className="w-full h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10
                 backdrop-blur-md shadow-2xl transition-all duration-300
                 group-hover:scale-105 group-hover:border-white/30 group-hover:bg-white/10 flex flex-col"
            >
                {/* Image / Gradient Background */}
                <div className="h-full w-full relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            draggable="false"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-4xl">
                            Wait...
                        </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
            </div>
        </div>
    </div>
));

Card.displayName = 'Card';

/* 4️⃣  Main Component —————————————————— */
interface ThreeDCarouselProps {
    items: CarouselItem[];
    radius?: number;
    cardW?: number;
    cardH?: number;
    onActiveChange?: (item: CarouselItem) => void;
}

const ThreeDCarousel = React.memo(
    ({
        items,
        radius = RADIUS,
        cardW = CARD_W,
        cardH = CARD_H,
        onActiveChange,
    }: ThreeDCarouselProps) => {
        const parentRef = useRef<HTMLDivElement>(null);
        const wheelRef = useRef<HTMLDivElement>(null);

        const rotationRef = useRef(0);
        const tiltRef = useRef(0);
        const targetTiltRef = useRef(0);
        const velocityRef = useRef(0);
        const isDraggingRef = useRef(false);
        const dragStartRef = useRef(0);
        const initialRotationRef = useRef(0);
        const lastInteractionRef = useRef(Date.now());
        const animationFrameRef = useRef<number | null>(null);

        // Access current items in animation loop without dependency issues
        const itemsRef = useRef(items);
        useEffect(() => {
            itemsRef.current = items;
        }, [items]);

        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
                if (!parentRef.current || isDraggingRef.current) return;

                const parentRect = parentRef.current.getBoundingClientRect();
                // Only tilt if mouse is roughly over the component to avoid extreme tilts from far away
                if (
                    e.clientX < parentRect.left - 100 ||
                    e.clientX > parentRect.right + 100 ||
                    e.clientY < parentRect.top - 100 ||
                    e.clientY > parentRect.bottom + 100
                ) {
                    targetTiltRef.current = 0;
                    return;
                }

                const mouseY = e.clientY - parentRect.top;
                const normalizedY = (mouseY / parentRect.height - 0.5) * 2; // -1 to 1

                // Limit tilt range
                targetTiltRef.current = -Math.max(-1, Math.min(1, normalizedY)) * TILT_SENSITIVITY;
            };

            // We attach to window to catch movements even if not directly over (for smoother feel),
            // but we limit logic above. Alternatively, attach to parentRef if preferred.
            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, []);

        useEffect(() => {
            const animate = () => {
                if (!isDraggingRef.current) {
                    // Apply inertia
                    if (Math.abs(velocityRef.current) > 0.001) {
                        rotationRef.current += velocityRef.current;
                        velocityRef.current *= INERTIA_FRICTION;
                    } else if (Date.now() - lastInteractionRef.current > IDLE_TIMEOUT) {
                        rotationRef.current += AUTOSPIN_SPEED;
                    }
                }

                tiltRef.current += (targetTiltRef.current - tiltRef.current) * 0.1;

                if (wheelRef.current) {
                    wheelRef.current.style.transform = `rotateX(${tiltRef.current}deg) rotateY(${rotationRef.current}deg)`;
                }

                if (onActiveChange) {
                    const currentItems = itemsRef.current;
                    const anglePerItem = 360 / currentItems.length;
                    // Calculate the "ideal" rotation index
                    // Because adding rotation moves items "backwards" effectively (item at 0 stays at 0, carousel rotates +),
                    // active item is the one that opposes the current rotation.
                    // Angle_i + Rotation = 0 (mod 360) => Front
                    // i * anglePerItem = -Rotation
                    // i = -Rotation / anglePerItem

                    let activeIndex = Math.round(-rotationRef.current / anglePerItem);
                    // Normalize to 0...items.length - 1
                    activeIndex = ((activeIndex % currentItems.length) + currentItems.length) % currentItems.length;

                    onActiveChange(currentItems[activeIndex]);
                }

                animationFrameRef.current = requestAnimationFrame(animate);
            };

            animationFrameRef.current = requestAnimationFrame(animate);

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }, []); // Dependence on empty array is now safe because we use refs

        const handleDragStart = useCallback((clientX: number) => {
            lastInteractionRef.current = Date.now();
            isDraggingRef.current = true;
            velocityRef.current = 0;
            dragStartRef.current = clientX;
            initialRotationRef.current = rotationRef.current;
            if (document.body) document.body.style.cursor = 'grabbing';
        }, []);

        const handleDragMove = useCallback((clientX: number) => {
            if (!isDraggingRef.current) return;
            lastInteractionRef.current = Date.now();

            const deltaX = clientX - dragStartRef.current;
            const newRotation = initialRotationRef.current + deltaX * DRAG_SENSITIVITY;

            velocityRef.current = newRotation - rotationRef.current;
            rotationRef.current = newRotation;
        }, []);

        const handleDragEnd = useCallback(() => {
            isDraggingRef.current = false;
            lastInteractionRef.current = Date.now();
            if (document.body) document.body.style.cursor = '';
        }, []);

        // Event listeners
        const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
        const onMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
        const onTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
        const onTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);

        const cards = useMemo(
            () =>
                items.map((item, idx) => {
                    const angle = (idx * 360) / items.length;
                    return {
                        item,
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    };
                }),
            [items, radius]
        );

        return (
            <div
                ref={parentRef}
                className="w-full h-[600px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing perspective-container"
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={handleDragEnd}
            >
                <div
                    className="relative"
                    style={{
                        perspective: 2000,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        ref={wheelRef}
                        className="relative"
                        style={{
                            width: 0,
                            height: 0,
                            transformStyle: 'preserve-3d',
                            position: 'absolute',
                        }}
                    >
                        {cards.map((card, idx) => (
                            <div
                                key={card.item.id}
                                style={{
                                    position: 'absolute',
                                    left: -cardW / 2,
                                    top: -cardH / 2,
                                    transform: card.transform,
                                    width: cardW,
                                    height: cardH,
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <Card
                                    item={card.item}
                                    transform="" // Already applied on wrapper
                                    cardW={cardW}
                                    cardH={cardH}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
);

ThreeDCarousel.displayName = 'ThreeDCarousel';

export default ThreeDCarousel;
