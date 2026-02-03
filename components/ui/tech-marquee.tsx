"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const technologies = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "Angular", logo: "/logos/angular.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "C#", logo: "/logos/csharp.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Supabase", logo: "/logos/supabase.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
];

function TechCard({ name, logo }: { name: string; logo: string }) {
    return (
        <div className="relative group flex flex-col items-center justify-center w-40 h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-white/20 transition-all duration-300 mx-4 backdrop-blur-sm">
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Logo container */}
            <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Tech name */}
            <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                {name}
            </span>
        </div>
    );
}

export function TechMarquee() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Top gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

            {/* Bottom gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* First row - moving left (ascending order) */}
            <Marquee speed="slow" pauseOnHover className="[--gap:2rem] py-4">
                {technologies.map((tech, index) => (
                    <TechCard key={`row1-${index}`} {...tech} />
                ))}
            </Marquee>

            {/* Second row - moving right (descending order - reversed) */}
            <Marquee speed="slow" pauseOnHover reverse className="[--gap:2rem] py-4">
                {[...technologies].reverse().map((tech, index) => (
                    <TechCard key={`row2-${index}`} {...tech} />
                ))}
            </Marquee>
        </div>
    );
}
