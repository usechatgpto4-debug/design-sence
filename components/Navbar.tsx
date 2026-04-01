"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, MonitorPlay, Home } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "หน้าแรก", href: "/", icon: Home },
    { name: "อีบุ๊ค", href: "/ebooks", icon: BookOpen },
    { name: "คอร์สเรียน", href: "/courses", icon: MonitorPlay },
  ];

  return (
    <nav className="w-full flex justify-center py-6 px-6 fixed top-0 z-50">
      <div className="bg-white/80 backdrop-blur-xl border border-white shadow-sm rounded-full px-6 py-3 flex gap-2 overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
          const Icon = link.icon;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all flex-shrink-0 ${
                isActive 
                  ? "bg-[#111827] text-[#fff32a] shadow-md" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <Icon className="w-4 h-4" />
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
