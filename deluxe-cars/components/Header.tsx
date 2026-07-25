"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Models", href: "/models" },
    { label: "Locator", href: "/locator" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${scrolled ? "bg-background-dark/95 h-16" : "bg-black/30 backdrop-blur-sm h-16 md:h-20"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
            <Image src="/images/icons/Ferrari.png" alt="Ferrari" width={36} height={36} className="object-contain" />
            <span className="text-lg md:text-2xl font-extrabold tracking-tighter uppercase italic text-white">Ferrari</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-1">
                {l.label}
                {l.label === "Products" && <span className="text-[8px] bg-primary text-white px-1.5 py-0.5 rounded font-black">NOVO</span>}
              </Link>
            ))}
          </nav>

          <Link href="/models" className="hidden md:block bg-primary hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-sm transition-all shrink-0">
            Configure Yours
          </Link>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="material-symbols-outlined text-2xl">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background-dark/98 backdrop-blur-md flex flex-col pt-20 px-6 pb-8 md:hidden">
          <nav className="flex flex-col gap-1 flex-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-2xl font-black uppercase italic tracking-tighter text-white hover:text-primary transition-colors py-4 border-b border-white/5 flex items-center justify-between">
                {l.label}
                <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
              </Link>
            ))}
          </nav>
          <Link href="/models" onClick={() => setMenuOpen(false)} className="w-full bg-primary text-white text-sm font-black uppercase tracking-widest py-4 rounded-sm text-center mt-8">
            Configure Yours
          </Link>
        </div>
      )}
    </>
  );
}