"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled ? "bg-background-dark/95 h-16" : "bg-black/30 backdrop-blur-sm h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/icons/Ferrari.png"
            alt="Ferrari"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-2xl font-extrabold tracking-tighter uppercase italic text-white">
            Ferrari
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors" href="/models">
            Models
          </Link>
          <Link className="text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors" href="/locator">
            Locator
          </Link>
          <Link
            className="text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-1"
            href="/products"
          >
            Products
            <span className="text-[8px] bg-primary text-white px-1.5 py-0.5 rounded font-black tracking-wider">
              NOVO
            </span>
          </Link>
          <Link className="text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors" href="/about">
  About
</Link>
        </nav>



        {/* CTA */}
        <Link
          href="/models"
          className="bg-primary hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-sm transition-all shrink-0"
        >
          Configure Yours
        </Link>
      </div>
    </header>
  );
}