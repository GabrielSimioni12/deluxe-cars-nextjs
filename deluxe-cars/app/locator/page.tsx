"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Dealer {
  name: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  hours: string;
  x: number;
  y: number;
  img: string;
}

const DEALERS: Dealer[] = [
  {
    name: "Ferrari Maranello",
    city: "Maranello",
    country: "Italy",
    address: "Via Abetone Inferiore, 4 — Maranello, MO 41053",
    phone: "+39 0536 949111",
    hours: "Seg–Sex: 9h–18h",
    x: 51,
    y: 35,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari New York",
    city: "New York",
    country: "USA",
    address: "799 Park Ave — New York, NY 10065",
    phone: "+1 (212) 355-5959",
    hours: "Seg–Sáb: 9h–19h",
    x: 27,
    y: 36,
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari São Paulo",
    city: "São Paulo",
    country: "Brazil",
    address: "Av. Europa, 218 — Jardim Europa, SP",
    phone: "+55 (11) 3060-5000",
    hours: "Seg–Sex: 9h–18h · Sáb: 9h–13h",
    x: 33,
    y: 72,
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari Dubai",
    city: "Dubai",
    country: "UAE",
    address: "Sheikh Zayed Rd — Al Quoz, Dubai",
    phone: "+971 4 339 1000",
    hours: "Seg–Sáb: 9h–21h",
    x: 60,
    y: 42,
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari Paris",
    city: "Paris",
    country: "France",
    address: "7 Rue de Presbourg — 75116 Paris",
    phone: "+33 1 45 00 00 00",
    hours: "Seg–Sáb: 10h–19h",
    x: 47,
    y: 32,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari Tokyo",
    city: "Tokyo",
    country: "Japan",
    address: "3-6-1 Minami-Aoyama — Minato, Tokyo",
    phone: "+81 3 5772 0077",
    hours: "Ter–Dom: 10h–19h",
    x: 82,
    y: 36,
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari London",
    city: "London",
    country: "UK",
    address: "2 Berkeley Square — London W1J 6EE",
    phone: "+44 20 7629 9339",
    hours: "Seg–Sáb: 9h–18h",
    x: 46,
    y: 28,
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari Los Angeles",
    city: "Los Angeles",
    country: "USA",
    address: "9250 Beverly Blvd — Beverly Hills, CA 90210",
    phone: "+1 (310) 247-7777",
    hours: "Seg–Sáb: 9h–19h",
    x: 18,
    y: 38,
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari Sydney",
    city: "Sydney",
    country: "Australia",
    address: "Corner William & Doris St — Brookvale NSW",
    phone: "+61 2 9938 0000",
    hours: "Seg–Sex: 8h30–17h30",
    x: 84,
    y: 72,
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari Shanghai",
    city: "Shanghai",
    country: "China",
    address: "1588 Nanjing West Rd — Jing'an, Shanghai",
    phone: "+86 21 6279 8888",
    hours: "Ter–Dom: 10h–20h",
    x: 78,
    y: 38,
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari Monaco",
    city: "Monaco",
    country: "Monaco",
    address: "7 Av. des Spélugues — 98000 Monaco",
    phone: "+377 93 50 00 00",
    hours: "Seg–Sáb: 10h–19h",
    x: 49,
    y: 34,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ferrari Miami",
    city: "Miami",
    country: "USA",
    address: "2060 Biscayne Blvd — Miami, FL 33137",
    phone: "+1 (305) 576-0000",
    hours: "Seg–Sáb: 9h–19h",
    x: 25,
    y: 42,
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=400",
  },
];

export default function LocatorPage() {
  const [active, setActive] = useState<Dealer>(DEALERS[0]);
  const [detailOpen, setDetailOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [visitModal, setVisitModal] = useState(false);

  const filtered = DEALERS.filter(
    (d) =>
      d.city.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase()) ||
      d.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (dealer: Dealer) => {
    setActive(dealer);
    setDetailOpen(true);
  };

  return (
    <div className="bg-[#050505] font-display text-slate-100 antialiased h-screen flex flex-col overflow-hidden">

      {/* Visit Modal */}
      {visitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">
              Visita Agendada!
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sua solicitação de visita à{" "}
              <span className="text-white font-bold">{active.name}</span> foi recebida
              com sucesso. Nossa equipe entrará em contato em breve para confirmar o
              melhor horário.
            </p>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest">
              {active.phone}
            </p>
            <button
              onClick={() => setVisitModal(false)}
              className="w-full bg-primary hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded transition-all"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/5 px-8 py-3 z-50 shrink-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/icons/Ferrari.png" width={48} height={48} alt="Ferrari" className="object-contain" />
          <h1 className="text-2xl font-black uppercase tracking-[0.3em] italic text-white">Ferrari</h1>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold hidden md:block">
            {DEALERS.length} Concessionárias Globais
          </span>
          <Link
            href="/"
            className="bg-primary text-white text-[9px] font-extrabold px-6 py-2 uppercase tracking-widest hover:bg-red-700 transition-all"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full max-w-[360px] bg-[#0a0a0a] border-r border-white/5 flex flex-col z-40">
          <div className="p-5 border-b border-white/5">
            <h2 className="text-lg font-extrabold uppercase italic tracking-tighter mb-4 text-white">
              Global Network
            </h2>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">
                search
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black border border-white/10 py-2.5 pl-9 pr-4 text-[10px] text-white outline-none focus:border-primary uppercase tracking-widest transition-all"
                placeholder="Search City..."
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filtered.map((dealer) => (
              <div
                key={dealer.name}
                onClick={() => handleSelect(dealer)}
                className={`flex gap-3 p-4 cursor-pointer transition-all border-b border-white/5 ${
                  active.name === dealer.name
                    ? "border-l-4 border-l-primary bg-white/5"
                    : "border-l-4 border-l-transparent hover:bg-white/[0.03]"
                }`}
              >
                <div className="shrink-0 w-16 h-16 relative rounded overflow-hidden">
                  <Image src={dealer.img} alt={dealer.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-black uppercase tracking-wider text-white truncate">
                    {dealer.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
                    {dealer.country}
                  </p>
                  <p className="text-[10px] text-slate-600 mt-1 truncate">{dealer.address}</p>
                </div>
                {active.name === dealer.name && (
                  <span className="material-symbols-outlined text-primary text-lg shrink-0 self-center">
                    chevron_right
                  </span>
                )}
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="p-8 text-center text-slate-600 text-xs uppercase tracking-widest">
                Nenhuma concessionária encontrada
              </div>
            )}
          </div>
        </aside>

        {/* Map */}
        <section className="flex-1 relative bg-[#080808] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
            alt="World Map"
            style={{ filter: "grayscale(100%) contrast(1.2)" }}
          />

          {/* Glow */}
          <div
            className="absolute z-10 transition-all duration-700 pointer-events-none"
            style={{ left: `${active.x}%`, top: `${active.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className="w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          </div>

          {/* Markers */}
          {DEALERS.map((dealer) => (
            <div
              key={dealer.name}
              className="absolute z-20 cursor-pointer transition-all duration-500 -translate-x-1/2 -translate-y-full"
              style={{ left: `${dealer.x}%`, top: `${dealer.y}%` }}
              onClick={() => handleSelect(dealer)}
            >
              {active.name === dealer.name ? (
                <div className="flex flex-col items-center">
                  <div className="absolute w-10 h-10 rounded-full bg-primary/30 animate-ping" />
                  <div className="relative bg-primary border-2 border-white shadow-[0_0_30px_rgba(194,10,10,0.8)] px-3 py-2 flex flex-col items-center min-w-[90px]">
                    <Image
                      src="/images/icons/FerrariTransparent.png"
                      width={28}
                      height={28}
                      alt="Ferrari"
                      className="object-contain invert mb-1"
                    />
                    <span className="text-[9px] font-black text-white uppercase tracking-tight text-center leading-none">
                      {dealer.city}
                    </span>
                  </div>
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-primary" />
                </div>
              ) : (
                <div className="flex flex-col items-center group">
                  <div className="w-3 h-3 rounded-full bg-white/40 border border-white/60 group-hover:bg-primary group-hover:border-primary transition-all" />
                  <span className="text-[8px] text-white/50 uppercase tracking-widest mt-1 group-hover:text-white transition-all">
                    {dealer.city}
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Detail panel */}
          {detailOpen && (
            <div className="absolute bottom-6 right-6 z-30 w-80 bg-[#0e0e0e]/95 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-36">
                <Image
                  src={active.img}
                  alt={active.name}
                  fill
                  className="object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <button
                  onClick={() => setDetailOpen(false)}
                  className="absolute top-3 right-3 text-white/60 hover:text-primary transition-colors bg-black/40 rounded-full p-1"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-black uppercase text-base leading-none">{active.city}</p>
                  <p className="text-primary text-[10px] uppercase tracking-widest font-bold">{active.country}</p>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { icon: "location_on", text: active.address },
                  { icon: "call", text: active.phone },
                  { icon: "schedule", text: active.hours },
                ].map((item) => (
                  <div key={item.icon} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <p className="text-[11px] text-slate-400 leading-snug">{item.text}</p>
                  </div>
                ))}
                <button
                  onClick={() => setVisitModal(true)}
                  className="w-full bg-primary hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest py-3 transition-all rounded mt-1"
                >
                  Agendar Visita
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}