"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
    ArrowRight,
    Globe,
    Smartphone,
    Database,
    Cloud,
    Shield,
    Cog,
} from "lucide-react";

export default function OutsourcingPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const services = [
        {
            icon: Globe,
            title: "Web Application",
            description:
                "Xây dựng ứng dụng web hiện đại với React, Next.js và công nghệ tiên tiến.",
        },
        {
            icon: Smartphone,
            title: "Mobile Application",
            description:
                "Ứng dụng di động đa nền tảng cho iOS và Android với UX tốt nhất.",
        },
        {
            icon: Database,
            title: "Backend & API",
            description:
                "Thiết kế backend mạnh mẽ, bảo mật và có khả năng mở rộng cao.",
        },
        {
            icon: Cloud,
            title: "Cloud & DevOps",
            description:
                "Triển khai và quản lý hạ tầng đám mây với AWS, Azure, Google Cloud.",
        },
        {
            icon: Shield,
            title: "Security & Testing",
            description:
                "Đảm bảo bảo mật và chất lượng với quy trình testing nghiêm ngặt.",
        },
        {
            icon: Cog,
            title: "Maintenance & Support",
            description:
                "Hỗ trợ và bảo trì hệ thống để đảm bảo hoạt động ổn định.",
        },
    ];

    const process = [
        {
            step: "01",
            title: "Phân tích",
            description: "Lắng nghe nhu cầu và phân tích yêu cầu chi tiết",
        },
        {
            step: "02",
            title: "Lập kế hoạch",
            description: "Xây dựng timeline và phân bổ nguồn lực",
        },
        {
            step: "03",
            title: "Phát triển",
            description: "Triển khai theo phương pháp Agile với sprint định kỳ",
        },
        {
            step: "04",
            title: "Kiểm thử",
            description: "Testing toàn diện đảm bảo chất lượng",
        },
        {
            step: "05",
            title: "Triển khai",
            description: "Deploy và giám sát hệ thống production",
        },
        {
            step: "06",
            title: "Hỗ trợ",
            description: "Bảo trì và hỗ trợ kỹ thuật liên tục",
        },
    ];

    const benefits = [
        {
            title: "Tiết kiệm chi phí",
            description: "Giảm chi phí vận hành lên đến 40%",
        },
        {
            title: "Chuyên môn cao",
            description: "Đội ngũ kỹ sư có kinh nghiệm",
        },
        {
            title: "Linh hoạt",
            description: "Dễ dàng mở rộng theo nhu cầu",
        },
        {
            title: "Tập trung",
            description: "Focus vào core business",
        },
    ];

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="py-32 md:py-48">
                <div className="px-8">
                    <motion.div {...fadeInUp} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Dịch vụ phát triển phần mềm
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                            Đội ngũ kỹ sư chất lượng cao sẵn sàng biến ý tưởng của bạn thành sản
                            phẩm công nghệ hoàn chỉnh.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm group"
                        >
                            Liên hệ tư vấn
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-32 border-t border-white/10">
                <div className="px-8">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Lợi ích
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Tối ưu hóa chi phí và nâng cao hiệu quả phát triển.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-white/10 rounded-xl bg-white/[0.02]"
                            >
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 border-t border-white/10">
                <div className="px-8">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Dịch vụ
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Giải pháp toàn diện cho mọi nhu cầu phát triển phần mềm.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all"
                            >
                                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                                    <service.icon size={20} className="text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 border-t border-white/10">
                <div className="px-8">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Quy trình
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Phương pháp chuyên nghiệp từ ý tưởng đến sản phẩm.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={step.step}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-white/10 rounded-xl bg-white/[0.02]"
                            >
                                <div className="text-sm text-gray-500 mb-2">{step.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 border-t border-white/10">
                <div className="px-8">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Bắt đầu dự án
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Liên hệ để được tư vấn miễn phí và nhận báo giá chi tiết.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm group"
                            >
                                Liên hệ ngay
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <Link
                                href="/products/smartflow"
                                className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Xem sản phẩm
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
