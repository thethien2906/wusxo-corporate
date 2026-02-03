"use client";

import { motion } from "motion/react";
import { Target, Eye, Heart, Lightbulb, Shield, Users2 } from "lucide-react";
import { AuroraText } from "@/components/ui/AuroraText";
import { TextReveal } from "@/components/ui/text-reveal";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export default function AboutPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const values = [
        {
            icon: Heart,
            title: "Trung thực",
            description:
                "Cam kết minh bạch trong mọi giao dịch và đặt lợi ích khách hàng lên hàng đầu",
            background: <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-50" />,
            className: "md:col-span-1",
        },
        {
            icon: Lightbulb,
            title: "Sáng tạo",
            description:
                "Không ngừng đổi mới và tìm kiếm những giải pháp công nghệ tiên tiến",
            background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-50" />,
            className: "md:col-span-2",
        },
        {
            icon: Shield,
            title: "Trách nhiệm",
            description:
                "Chịu trách nhiệm hoàn toàn về chất lượng sản phẩm và dịch vụ",
            background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50" />,
            className: "md:col-span-2",
        },
        {
            icon: Users2,
            title: "Hợp tác",
            description:
                "Xây dựng mối quan hệ đối tác bền vững dựa trên sự tin tưởng",
            background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-50" />,
            className: "md:col-span-1",
        },
    ];

    const timeline = [
        {
            year: "2021",
            title: "Khởi đầu",
            description:
                "WuSxo được thành lập bởi nhóm các kỹ sư đam mê công nghệ.",
        },
        {
            year: "2023",
            title: "Mở rộng",
            description:
                "Phát triển đội ngũ và ra mắt sản phẩm đầu tiên SmartFlow.",
        },
        {
            year: "2025",
            title: "Đa dạng hóa",
            description:
                "Mở rộng dịch vụ gia công và ra mắt CloudVault.",
        },
        {
            year: "2026",
            title: "Hiện tại",
            description:
                "Tiếp tục đổi mới và đồng hành cùng hơn 30 đối tác.",
        },
    ];

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="py-32 md:py-48">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Về <AuroraText>WuSxo</AuroraText>
                        </h1>
                        <TextReveal
                            className="text-xl md:text-2xl text-gray-400 leading-relaxed"
                            delay={0.3}
                        >
                            Chúng tôi là đội ngũ các kỹ sư công nghệ đam mê, cam kết xây dựng các giải pháp phần mềm hiện đại và đáng tin cậy.
                        </TextReveal>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div {...fadeInUp}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Target size={20} className="text-gray-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Sứ mệnh</h2>
                            </div>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Tạo ra những sản phẩm công nghệ vượt trội và cung cấp dịch vụ gia
                                công phần mềm chất lượng cao, giúp doanh nghiệp chuyển đổi số thành
                                công.
                            </p>
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Eye size={20} className="text-gray-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Tầm nhìn</h2>
                            </div>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Trở thành đối tác công nghệ đáng tin cậy hàng đầu tại Việt Nam,
                                được công nhận về chất lượng sản phẩm và sự đổi mới trong tư duy.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Values Section */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Giá trị cốt lõi
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Những nguyên tắc định hướng mọi hoạt động của chúng tôi.
                        </p>
                    </motion.div>

                    <BentoGrid className="max-w-4xl mx-auto">
                        {values.map((value, index) => (
                            <BentoCard
                                key={index}
                                name={value.title}
                                className={value.className}
                                background={value.background}
                                Icon={value.icon}
                                description={value.description}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Hành trình
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Từ khởi đầu đến hiện tại.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-8"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-sm font-bold text-white">{item.year}</span>
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className="w-px h-full bg-white/10 mt-4"></div>
                                    )}
                                </div>
                                <div className="pb-12">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
