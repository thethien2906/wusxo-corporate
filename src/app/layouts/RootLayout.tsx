import { Outlet } from "react-router";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}