"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
    ArrowRight,
    Cloud,
    Lock,
    Share2,
    Download,
    FileCheck,
    History,
    ExternalLink,
} from "lucide-react";

export default function ProductBPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const features = [
        {
            icon: Cloud,
            title: "Lưu trữ đám mây",
            description: "Không giới hạn với tốc độ upload/download nhanh",
        },
        {
            icon: Lock,
            title: "Mã hóa end-to-end",
            description: "Bảo mật tuyệt đối với mã hóa AES-256",
        },
        {
            icon: Share2,
            title: "Chia sẻ linh hoạt",
            description: "Chia sẻ với link bảo mật hoặc phân quyền",
        },
        {
            icon: Download,
            title: "Đồng bộ tự động",
            description: "Tự động sync giữa các thiết bị",
        },
        {
            icon: FileCheck,
            title: "Quản lý phiên bản",
            description: "Lưu lịch sử và khôi phục phiên bản cũ",
        },
        {
            icon: History,
            title: "Khôi phục dữ liệu",
            description: "Phục hồi file đã xóa trong 30 ngày",
        },
    ];

    const pricing = [
        {
            name: "Personal",
            storage: "100GB",
            price: "99K",
            features: ["1 người dùng", "Mã hóa cơ bản", "Email support", "30 ngày lịch sử"],
        },
        {
            name: "Business",
            storage: "1TB",
            price: "299K",
            featured: true,
            features: [
                "10 người dùng",
                "Mã hóa nâng cao",
                "Priority support",
                "Lịch sử không giới hạn",
                "Phân quyền chi tiết",
            ],
        },
        {
            name: "Enterprise",
            storage: "Unlimited",
            price: "Custom",
            features: [
                "Không giới hạn người dùng",
                "Mã hóa tùy chỉnh",
                "Dedicated support 24/7",
                "Audit logs",
                "SLA 99.9%",
            ],
        },
    ];

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="py-32 md:py-48">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="max-w-4xl">
                        <div className="text-sm text-gray-500 mb-6">SẢN PHẨM</div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            CloudVault
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                            Nền tảng lưu trữ và bảo mật dữ liệu đám mây với mã hóa end-to-end,
                            đảm bảo an toàn tuyệt đối.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://cloudvault.wusxo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm group"
                            >
                                Dùng thử miễn phí
                                <ExternalLink size={16} />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Liên hệ tư vấn
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problem Solution */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Tại sao chọn CloudVault?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
                        <motion.div
                            {...fadeInUp}
                            className="p-8 border border-red-900/30 rounded-xl bg-red-950/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">
                                Vấn đề thường gặp
                            </h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li>Lo lắng về rò rỉ dữ liệu</li>
                                <li>Dung lượng lưu trữ hạn chế</li>
                                <li>Khó chia sẻ và cộng tác</li>
                                <li>Tốc độ truy cập chậm</li>
                                <li>Không thể khôi phục file đã xóa</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="p-8 border border-emerald-900/30 rounded-xl bg-emerald-950/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">
                                Giải pháp CloudVault
                            </h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li>Mã hóa end-to-end an toàn tuyệt đối</li>
                                <li>Dung lượng lớn giá cả hợp lý</li>
                                <li>Chia sẻ dễ dàng với link bảo mật</li>
                                <li>Tốc độ cao với CDN toàn cầu</li>
                                <li>Khôi phục file trong 30 ngày</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Tính năng
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Giải pháp lưu trữ đám mây hoàn hảo cho mọi nhu cầu.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all"
                            >
                                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                                    <feature.icon size={20} className="text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Bảng giá
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Lựa chọn gói phù hợp với nhu cầu lưu trữ.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                        {pricing.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 border rounded-xl ${plan.featured
                                        ? "border-white/30 bg-white/[0.04]"
                                        : "border-white/10 bg-white/[0.02]"
                                    }`}
                            >
                                {plan.featured && (
                                    <div className="text-xs text-gray-400 mb-2">PHỔ BIẾN NHẤT</div>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {plan.name}
                                </h3>
                                <div className="text-sm text-gray-400 mb-4">{plan.storage}</div>
                                <div className="text-3xl font-bold text-white mb-6">
                                    {plan.price}
                                    {plan.price !== "Custom" && (
                                        <span className="text-sm text-gray-400">/tháng</span>
                                    )}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="text-sm text-gray-400 flex items-center gap-2"
                                        >
                                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={`block text-center py-3 text-sm transition-all rounded-lg ${plan.featured
                                            ? "border border-white/30 text-white hover:bg-white/5"
                                            : "border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                                        }`}
                                >
                                    Bắt đầu
                                </Link>
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
                            Bảo vệ dữ liệu ngay hôm nay
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Dùng thử CloudVault miễn phí 30 ngày với 100GB dung lượng.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://cloudvault.wusxo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm group"
                            >
                                Dùng thử miễn phí
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </a>
                            <Link
                                href="/products/smartflow"
                                className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Xem sản phẩm khác
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
