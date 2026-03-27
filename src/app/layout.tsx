
import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dev Store",
  description: "E-commerce de produtos para dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
