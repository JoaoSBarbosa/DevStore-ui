import React from "react";
import { Footer } from "@/features/footer";
import { Header, HeaderProvider } from "@/features/header";
import { Newsletter } from "@/features/newsletter";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <HeaderProvider>
        <Header />
      </HeaderProvider>

      {children}
      <Newsletter />
      <Footer />
    </div>
  );
}
