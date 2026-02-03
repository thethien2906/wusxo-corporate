"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const links = [
    { path: "/", label: "Trang chủ" },
    { path: "/about", label: "Về chúng tôi" },
    // { path: "/outsourcing", label: "Dịch vụ gia công" },
    { path: "/contact", label: "Liên hệ" },
  ];

  return (
    <header className="bg-black/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logos/wusxo_logo.png"
              alt="WuSxo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain scale-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm transition-colors relative ${isActive(link.path)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 border border-white/20 text-white text-sm hover:bg-white/5 transition-all rounded-md"
            >
              Bắt đầu dự án
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-sm ${isActive(link.path)
                      ? "text-white"
                      : "text-gray-400"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="px-4 py-2 border border-white/20 text-white text-sm hover:bg-white/5 transition-all rounded-md text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bắt đầu dự án
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}