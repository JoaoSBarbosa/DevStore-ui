import { Header, HeaderProvider } from "@/features/header";
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
    </div>
  );
}
