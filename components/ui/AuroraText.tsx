"use client";

import { cn } from "@/lib/utils";
import React, { memo } from "react";

interface AuroraTextProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    children: React.ReactNode;
    colors?: string[];
    speed?: number;
}

export const AuroraText = memo(
    ({
        className = "",
        children,
        colors = ["#38BDF8", "#3B82F6", "#EC4899", "#38BDF8"],
        speed = 1,
        ...props
    }: AuroraTextProps) => {
        const gradientStyle = {
            backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animationDuration: `${10 / speed}s`,
        };

        return (
            <span className={cn("relative inline-block", className)} {...props}>
                <span className="sr-only">{children}</span>
                <span
                    className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
                    style={gradientStyle}
                    aria-hidden="true"
                >
                    {children}
                </span>
            </span>
        );
    }
);

AuroraText.displayName = "AuroraText";
