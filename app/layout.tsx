import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Design Sence E-book by DesignMeee",
  description: "หนังสือรวม 55 พื้นฐานและจิตวิทยาดีไซน์ ฉบับลัด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} antialiased`}>
      <body className="font-prompt bg-main text-[#111827] min-h-screen flex flex-col pt-24">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
