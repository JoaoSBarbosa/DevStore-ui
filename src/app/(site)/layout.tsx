import Footer from "@/features/footer/footer";
import { Header, HeaderProvider } from "@/features/header";
import Home from "@/features/home";
import React from "react";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <HeaderProvider>
        <Header />
      </HeaderProvider>

      {children}

      <Footer />
    </div>
  );
}
