"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

interface TextRevealProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    children: string;
    as?: React.ElementType;
    delay?: number;
}

export function TextReveal({
    className,
    children,
    as: Component = "p",
    delay = 0,
    ...props
}: TextRevealProps) {
    const words = children.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        },
    };

    return (
        <Component className={cn(className)} {...props}>
            <motion.span
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="inline-block"
            >
                {words.map((word, index) => (
                    <motion.span
                        key={`${word}-${index}`}
                        variants={wordVariants}
                        className="inline-block mr-[0.25em] last:mr-0"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.span>
        </Component>
    );
}
