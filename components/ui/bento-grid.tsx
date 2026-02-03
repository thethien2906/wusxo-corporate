"use client";
import { cn } from "@/lib/utils";
import React, {
    ComponentPropsWithoutRef,
    FC,
    ReactNode,
    SVGProps,
} from "react";

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
        />
    </svg>
);

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
    children: ReactNode;
    className?: string;
}

export const BentoGrid: FC<BentoGridProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
    name: string;
    className?: string;
    background: ReactNode;
    Icon?: React.ElementType;
    description: string;
    href?: string;
    cta?: string;
}

export const BentoCard: FC<BentoCardProps> = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
    ...props
}) => (
    <div
        key={name}
        className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-xl",
            "bg-white/[0.02] border border-white/10", // Dark theme base styles
            "shadow-[0_-20px_80px_-20px_#ffffff1f_inset]", // Inner glow
            className,
        )}
        {...props}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            {Icon && (
                <Icon className="h-12 w-12 origin-left transform-gpu text-gray-400 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-white mb-2" />
            )}

            <h3 className="text-xl font-semibold text-white">
                {name}
            </h3>

            <p className="max-w-lg text-gray-400">
                {description}
            </p>
        </div>

        {href && (
            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                )}
            >
                <a
                    href={href}
                    className="pointer-events-auto text-sm font-semibold text-white/50 hover:text-white flex items-center transition-colors"
                >
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
            </div>
        )}

        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.02]" />
    </div>
);
