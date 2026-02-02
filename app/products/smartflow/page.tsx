"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
    ArrowRight,
    LayoutDashboard,
    Users,
    Calendar,
    BarChart3,
    MessageSquare,
    FileText,
    ExternalLink,
} from "lucide-react";

export default function ProductAPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const features = [
        {
            icon: LayoutDashboard,
            title: "Dashboard trực quan",
            description: "Theo dõi toàn bộ dự án và tiến độ qua dashboard tổng quan",
        },
        {
            icon: Users,
            title: "Quản lý đội nhóm",
            description: "Phân công công việc và theo dõi hiệu suất thành viên",
        },
        {
            icon: Calendar,
            title: "Lịch trình thông minh",
            description: "Lập kế hoạch dự án với timeline rõ ràng",
        },
        {
            icon: BarChart3,
            title: "Báo cáo chi tiết",
            description: "Phân tích dữ liệu và tạo báo cáo tự động",
        },
        {
            icon: MessageSquare,
            title: "Giao tiếp tập trung",
            description: "Trao đổi và chia sẻ file ngay trong hệ thống",
        },
        {
            icon: FileText,
            title: "Quản lý tài liệu",
            description: "Lưu trữ và tổ chức tài liệu có hệ thống",
        },
    ];

    const pricing = [
        {
            name: "Starter",
            price: "499K",
            features: ["10 thành viên", "5 dự án", "10GB lưu trữ", "Email support"],
        },
        {
            name: "Professional",
            price: "999K",
            featured: true,
            features: [
                "50 thành viên",
                "Dự án không giới hạn",
                "100GB lưu trữ",
                "Priority support",
                "API tích hợp",
            ],
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                "Không giới hạn",
                "Lưu trữ không giới hạn",
                "Dedicated support",
                "Tùy chỉnh",
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
                            SmartFlow
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                            Giải pháp quản lý dự án và quy trình làm việc thông minh, giúp đội
                            nhóm làm việc hiệu quả hơn.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://smartflow.wusxo.com"
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
                            Giải quyết vấn đề gì?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
                        <motion.div
                            {...fadeInUp}
                            className="p-8 border border-red-900/30 rounded-xl bg-red-950/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">Trước khi dùng</h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li>Thông tin phân tán nhiều nơi</li>
                                <li>Khó theo dõi tiến độ và deadline</li>
                                <li>Giao tiếp không hiệu quả</li>
                                <li>Mất thời gian cho họp không cần thiết</li>
                                <li>Báo cáo thủ công tốn công sức</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="p-8 border border-emerald-900/30 rounded-xl bg-emerald-950/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">
                                Sau khi dùng SmartFlow
                            </h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li>Tập trung mọi thông tin tại một nơi</li>
                                <li>Theo dõi tiến độ real-time</li>
                                <li>Giao tiếp tức thì trong hệ thống</li>
                                <li>Tăng 40% hiệu suất làm việc</li>
                                <li>Báo cáo tự động và trực quan</li>
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
                            Tất cả những gì bạn cần để quản lý dự án hiệu quả.
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
                            Chọn gói phù hợp với quy mô đội nhóm của bạn.
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
                            Sẵn sàng tăng hiệu suất?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Dùng thử SmartFlow miễn phí 14 ngày, không cần thẻ tín dụng.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://smartflow.wusxo.com"
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
                                href="/products/cloudvault"
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
