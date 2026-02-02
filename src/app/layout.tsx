import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import "@/styles/index.css";

export const metadata: Metadata = {
    title: "WuSxo Corporate",
    description: "Vững vàng về kỹ thuật. Đổi mới về tư duy.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-black text-gray-100">
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
