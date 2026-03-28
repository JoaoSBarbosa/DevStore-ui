import { Header } from "@/features/header";
import { HeaderProvider } from "@/features/header/context/header-provider";
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
