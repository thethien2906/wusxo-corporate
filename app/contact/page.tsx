"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            });
        }, 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "contact@wusxo.com",
            link: "mailto:contact@wusxo.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+84 123 456 789",
            link: "tel:+84123456789",
        },
        {
            icon: MapPin,
            label: "Address",
            value: "Tầng 7, Tòa nhà ABC, Quận 1, TP.HCM",
            link: null,
        },
    ];

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="py-32 md:py-48">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Liên hệ
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                            Có câu hỏi hoặc cần tư vấn? Chúng tôi sẵn sàng hỗ trợ.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.label}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-white/10 rounded-xl bg-white/[0.02]"
                            >
                                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                                    <info.icon size={18} className="text-gray-400" />
                                </div>
                                <div className="text-sm text-gray-500 mb-2">{info.label}</div>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        className="text-white hover:text-gray-300 transition-colors"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <div className="text-white">{info.value}</div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-3xl">
                        <motion.div {...fadeInUp} className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Gửi tin nhắn
                            </h2>
                            <p className="text-gray-400">
                                Điền thông tin và chúng tôi sẽ liên hệ lại trong 24 giờ.
                            </p>
                        </motion.div>

                        {submitted ? (
                            <motion.div
                                {...fadeInUp}
                                className="p-8 border border-emerald-900/30 rounded-xl bg-emerald-950/10"
                            >
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                                    <Send size={20} className="text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Cảm ơn bạn!
                                </h3>
                                <p className="text-gray-400">
                                    Tin nhắn đã được gửi. Chúng tôi sẽ liên hệ lại sớm.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form {...fadeInUp} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm text-gray-400 mb-2"
                                        >
                                            Họ và tên *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
                                            placeholder="Nhập họ tên"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm text-gray-400 mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm text-gray-400 mb-2"
                                        >
                                            Số điện thoại
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
                                            placeholder="+84 123 456 789"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm text-gray-400 mb-2"
                                        >
                                            Công ty
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
                                            placeholder="Tên công ty"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm text-gray-400 mb-2"
                                    >
                                        Nội dung *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors resize-none"
                                        placeholder="Mô tả chi tiết yêu cầu hoặc câu hỏi..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg text-sm"
                                >
                                    <Send size={16} />
                                    Gửi tin nhắn
                                </button>
                            </motion.form>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6">
                    <motion.div {...fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Câu hỏi thường gặp
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl space-y-8">
                        <motion.div {...fadeInUp} className="pb-8 border-b border-white/10">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Thời gian phát triển một dự án là bao lâu?
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tùy thuộc vào quy mô và độ phức tạp. Thông thường, một dự án web
                                đơn giản mất 2-3 tháng, các hệ thống phức tạp có thể mất 6-12 tháng.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="pb-8 border-b border-white/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">
                                Chi phí phát triển phần mềm là bao nhiêu?
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Chi phí phụ thuộc vào nhiều yếu tố. Chúng tôi cung cấp báo giá miễn
                                phí và chi tiết sau khi trao đổi về yêu cầu.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="pb-8 border-b border-white/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">
                                Có hỗ trợ sau khi bàn giao không?
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Có, chúng tôi cung cấp gói bảo hành và hỗ trợ. Bạn cũng có thể đăng
                                ký gói maintenance để được hỗ trợ liên tục.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.3 }}
                            className="pb-8 border-b border-white/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">
                                Quy trình làm việc như thế nào?
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Chúng tôi áp dụng phương pháp Agile với các sprint 2 tuần. Bạn sẽ
                                được cập nhật tiến độ thường xuyên và tham gia review.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
