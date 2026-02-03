"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/wusxo_logo.png"
                alt="WuSxo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain scale-200 origin-left"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Vững vàng về kỹ thuật - Đổi mới về tư duy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/outsourcing"
                  className="hover:text-white transition-colors"
                >
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Sản phẩm</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/smartflow"
                  className="hover:text-white transition-colors"
                >
                  SmartFlow
                </Link>
              </li>
              <li>
                <Link
                  href="/products/cloudvault"
                  className="hover:text-white transition-colors"
                >
                  CloudVault
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gray-500" />
                <a
                  href="mailto:contact@wusxo.com"
                  className="hover:text-white transition-colors"
                >
                  contact@wusxo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gray-500" />
                <a
                  href="tel:+84123456789"
                  className="hover:text-white transition-colors"
                >
                  +84 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 WuSxo Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}