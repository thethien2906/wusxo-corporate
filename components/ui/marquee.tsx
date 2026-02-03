"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
    children: React.ReactNode;
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
    speed?: "slow" | "normal" | "fast";
}

export function Marquee({
    children,
    className,
    reverse = false,
    pauseOnHover = false,
    vertical = false,
    repeat = 4,
    speed = "normal",
}: MarqueeProps) {
    const speedValues = {
        slow: "60s",
        normal: "40s",
        fast: "20s",
    };

    return (
        <div
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className
            )}
            style={
                {
                    "--duration": speedValues[speed],
                } as React.CSSProperties
            }
        >
            {Array.from({ length: repeat }).map((_, i) => (
                <div
                    key={i}
                    className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                        "animate-marquee flex-row": !vertical,
                        "animate-marquee-vertical flex-col": vertical,
                        "group-hover:[animation-play-state:paused]": pauseOnHover,
                        "[animation-direction:reverse]": reverse,
                    })}
                >
                    {children}
                </div>
            ))}
        </div>
    );
}
