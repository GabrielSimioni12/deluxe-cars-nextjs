"use client";

import { useState } from "react";
import Image from "next/image";
import { DEALERS, type Dealer } from "@/data/cars";

export default function LocatorPage() {
  const [active, setActive] = useState<Dealer>(DEALERS[0]);

  return (
    <div className="bg-[#050505] font-display text-slate-100 antialiased overflow-hidden h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/5 bg-[#050505] px-8 py-4 z-50 shrink-0">
        <div className="flex items-center gap-4">
          <Image
            src="/images/icons/ferrari_transparente_logo.png"
            width={32}
            height={32}
            alt="Ferrari Logo"
            className="brightness-0 invert"
          />
          <h1 className="text-xl font-black uppercase tracking-[0.4em] italic text-primary">
            Ferrari
          </h1>
        </div>
        <button className="bg-white text-black text-[9px] font-extrabold px-6 py-2 uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
          MyFerrari Login
        </button>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full max-w-[380px] bg-[#111111] border-r border-white/5 flex flex-col z-40 shadow-2xl">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-xl font-extrabold uppercase italic tracking-tighter mb-6">
              Global Network
            </h2>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                search
              </span>
              <input
                className="w-full bg-black border border-white/10 py-3 pl-10 pr-4 text-[10px] text-white outline-none focus:border-primary uppercase tracking-widest"
                placeholder="Search City..."
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
            {DEALERS.map((dealer) => (
              <div
                key={dealer.name}
                onClick={() => setActive(dealer)}
                className={`p-4 border border-white/5 flex gap-4 cursor-pointer transition-all ${
                  active.name === dealer.name ? "active-dealer" : "hover:bg-white/5"
                }`}
              >
                <div
                  className="shrink-0 w-[65px] h-[65px] bg-cover bg-center rounded-sm shadow-lg"
                  style={{ backgroundImage: `url('${dealer.img}')` }}
                />
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-white">
                    {dealer.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase">{dealer.country}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Map */}
        <section className="flex-1 relative bg-black overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale brightness-50"
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
            alt="World Map"
          />

          {/* Marker */}
          <div
            className="absolute z-30 transition-all duration-700 ease-out -translate-x-1/2 -translate-y-full"
            style={{ left: `${active.x}%`, top: `${active.y}%` }}
          >
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/20 rounded-full animate-ping absolute top-0" />
              <div className="relative bg-white p-[2px] shadow-[0_0_40px_rgba(194,10,10,0.7)] border border-primary">
                <div className="bg-primary px-4 py-4 flex flex-col items-center min-w-[110px]">
                  <Image
                    src="/images/icons/ferrari_transparente_logo.png"
                    width={40}
                    height={55}
                    alt="Ferrari"
                    className="brightness-0 invert mb-3 object-contain"
                  />
                  <span className="text-[11px] font-black text-white uppercase tracking-tighter border-t border-white/20 pt-2 w-full text-center">
                    {active.name.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              </div>
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-white" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
