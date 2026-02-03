"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Code2, Database, Cloud, Smartphone } from "lucide-react";

import { AuroraText } from "@/components/ui/AuroraText";
import { MovingGrid } from "@/components/ui/moving-grid";
import { OrbitCarousel } from "@/components/ui/orbit-carousel";
import { TechMarquee } from "@/components/ui/tech-marquee";
import ThreeDCarousel, { CarouselItem } from "@/components/ThreeDCarousel";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const products: CarouselItem[] = [
    {
      id: "1",
      name: "Phở Phố Board Game",
      description: "Trò chơi Board Game mô phỏng văn hóa ẩm thực Phở Việt Nam độc đáo.",
      path: "/products/pho-pho",
      image: "https://i.pinimg.com/1200x/6e/4c/39/6e4c394783c731f261f295e7ffd1deed.jpg",
    },
    {
      id: "2",
      name: "Cello Betta",
      description: "Website thương mại điện tử chuyên cung cấp các dòng cá Betta nghệ thuật.",
      path: "/products/cello-betta",
      image: "https://i.pinimg.com/1200x/1e/0c/1c/1e0c1c9c868bf07b4c27a275fb3087af.jpg",
    },
    {
      id: "3",
      name: "Twin Coffee",
      description: "Website giới thiệu và đặt bàn cho chuỗi cửa hàng cà phê hiện đại.",
      path: "/products/twin-coffee",
      image: "https://i.pinimg.com/736x/30/91/09/3091098a15810ddbbd58d5e007bc7207.jpg",
    },
    {
      id: "4",
      name: "Tinh Hoa Quê Nhà",
      description: "Sàn thương mại điện tử kết nối và phân phối đặc sản vùng miền Việt Nam.",
      path: "/products/tinh-hoa-que-nha",
      image: "https://i.pinimg.com/736x/07/cf/4a/07cf4a3a6f4144b4c7ac8e2ec5978dc1.jpg",
    },
    {
      id: "5",
      name: "SmartCalo",
      description: "Ứng dụng theo dõi sức khoẻ và dinh dưỡng cá nhân hóa với AI.",
      path: "/products/smart-calo",
      image: "https://i.pinimg.com/736x/5d/bf/f2/5dbff2b4c0fdcb9815e989f0db386f95.jpg",
    }
  ];

  const [activeProject, setActiveProject] = useState<CarouselItem>(products[0]);

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <MovingGrid className="z-0" gridSize={50} speed={0.5} />
        <div className="max-w-[1600px] mx-auto px-6 pt-0 pb-20 md:pt-0 md:pb-32 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="w-full max-w-lg md:max-w-2xl aspect-[3/1] relative mb-10">
              <Image
                src="/logos/wusxo_letter_logo.png"
                alt="WuSxo Logo"
                fill
                className="object-contain scale-[4.0]"
                priority
              />
            </div>
            <h1 className="text-1xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              VỮNG VÀN <AuroraText colors={["#ADA0E1", "#8976D8", "#644AD1", "#ADA0E1"]}>KỸ THUẬT</AuroraText>
              <br />
              ĐỔI MỚI <AuroraText colors={["#C0DB9C", "#A9D173", "#92C948", "#C0DB9C"]}>TƯ DUY</AuroraText>
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
                Bắt đầu
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              {/* <Link
                href="/outsourcing"
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Dịch vụ
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 border-t border-white/10">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Carousel */}
            <div className="w-full h-[600px] relative order-2 lg:order-1">
              <ThreeDCarousel items={products} onActiveChange={setActiveProject} />
            </div>

            {/* Right Column: Active Description */}
            <div className="order-1 lg:order-2 h-[400px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
                    <h3 className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                      {activeProject.name}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      {activeProject.description}
                    </p>

                    <Link
                      href={activeProject.path}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                      Xem chi tiết
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dịch vụ
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Phát triển phần mềm theo yêu cầu với đội ngũ kỹ sư chất lượng cao.
            </p>
          </motion.div>

          {/* Grid removed in favor of OrbitCarousel */}
          <div className="w-full py-2">
            <OrbitCarousel />
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            {/* <Link
              href="/outsourcing"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm group"
            >
              Xem tất cả dịch vụ
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link> */}
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

          <TechMarquee />
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
