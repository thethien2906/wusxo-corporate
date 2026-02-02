"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Code2, Database, Cloud, Smartphone } from "lucide-react";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const technologies = [
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Docker",
  ];

  const products = [
    {
      name: "SmartFlow",
      description: "Quản lý dự án và quy trình",
      path: "/products/smartflow",
    },
    {
      name: "CloudVault",
      description: "Lưu trữ và bảo mật dữ liệu",
      path: "/products/cloudvault",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 pt-0 pb-20 md:pt-6 md:pb-32">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="w-full max-w-xs aspect-[2.4/1] bg-white/5 rounded-2xl border border-white/10 mb-8 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50" />
              <div className="text-gray-600 font-mono text-sm flex items-center gap-1">
                <div className="w-4 h-4 border-2 border-gray-600 border-dashed rounded" />
                Placeholder Image
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              VỮNG VÀN KỸ THUẬT
              <br />
              ĐỔI MỚI TƯ DUY
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Chúng tôi xây dựng sản phẩm công nghệ và cung cấp dịch vụ phát triển
              phần mềm cho doanh nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products/smartflow"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm group"
              >
                Sản phẩm
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/outsourcing"
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Dịch vụ
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      </section>

      {/* Products Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sản phẩm
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Các giải pháp phần mềm được thiết kế và phát triển bởi đội ngũ của
              chúng tôi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={product.path}
                  className="group block p-8 border border-white/10 hover:border-white/20 transition-all rounded-xl bg-white/[0.02] hover:bg-white/[0.04]"
                >
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    Tìm hiểu thêm
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dịch vụ
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Phát triển phần mềm theo yêu cầu với đội ngũ kỹ sư chất lượng cao.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 size={20} className="text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Web Application
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Phát triển ứng dụng web hiện đại với React, Next.js và các công
                    nghệ tiên tiến.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone size={20} className="text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Mobile Application
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ứng dụng di động đa nền tảng cho iOS và Android với trải nghiệm
                    tốt nhất.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database size={20} className="text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Backend & API
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Thiết kế và phát triển backend mạnh mẽ, bảo mật và có khả năng
                    mở rộng.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud size={20} className="text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Cloud & DevOps
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Triển khai và quản lý hạ tầng đám mây với AWS, Azure, Google
                    Cloud.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Link
              href="/outsourcing"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm group"
            >
              Xem tất cả dịch vụ
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Công nghệ
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Thành thạo các công nghệ hiện đại và frameworks tiên tiến.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="p-6 border border-white/10 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all"
              >
                <span className="text-sm text-gray-400">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bắt đầu dự án của bạn
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Liên hệ với chúng tôi để thảo luận về ý tưởng và nhận tư vấn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm group"
              >
                Liên hệ
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Về chúng tôi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
