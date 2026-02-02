import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/app/layouts/RootLayout";
import { HomePage } from "@/app/pages/HomePage";
import { AboutPage } from "@/app/pages/AboutPage";
import { OutsourcingPage } from "@/app/pages/OutsourcingPage";
import { ProductAPage } from "@/app/pages/ProductAPage";
import { ProductBPage } from "@/app/pages/ProductBPage";
import { ContactPage } from "@/app/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "outsourcing", Component: OutsourcingPage },
      { path: "products/smartflow", Component: ProductAPage },
      { path: "products/cloudvault", Component: ProductBPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
