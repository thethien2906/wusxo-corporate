"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AuroraTextProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
}

export function AuroraText({
    className,
    children,
    as: Component = "span",
    ...props
}: AuroraTextProps) {
    return (
        <Component
            className={cn(
                "animate-aurora-text bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500 [background-size:200%_auto]",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
