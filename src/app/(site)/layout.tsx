import Header from "@/components/layout/headers/header";
import { HeaderProvider } from "@/contexts/header/header-provider";
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
