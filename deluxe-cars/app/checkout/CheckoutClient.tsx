"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutClient() {
  const params = useSearchParams();
  const model = params.get("model") || "Ferrari Model";
  const price = params.get("price") || "0";
  const img = params.get("img") || "/images/models/catalog/1.png";

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(Number(price));

  return (
    <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
      <header className="border-b border-white/5 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">stat_3</span>
            <span className="text-xl font-black uppercase italic">Ferrari</span>
          </Link>
          <Link href="/models" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Voltar ao Catálogo
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-slate-900 shadow-2xl aspect-video">
              <Image src={img} alt={model} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Ficha do Modelo</span>
              <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">{model}</h1>
              <div className="h-1 w-16 bg-primary" />
            </div>

            <div className="bg-surface-dark border border-white/5 rounded-xl p-6 space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Preço Estimado</p>
              <p className="text-4xl font-black text-white">{priceFormatted}</p>
              <p className="text-[10px] text-slate-600 uppercase tracking-widest">* Valores podem variar conforme disponibilidade e impostos</p>
            </div>

            <div className="space-y-4">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(model + " à venda Brasil")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-red-700 text-white font-black py-5 rounded-lg uppercase transition-all tracking-widest text-center flex items-center justify-center gap-3 text-sm"
              >
                <span className="material-symbols-outlined">search</span>
                Ver Anúncios Disponíveis
              </a>

              <a
                href="https://www.ferrari.com/pt-BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent border border-white/10 hover:border-primary text-white font-black py-5 rounded-lg uppercase transition-all tracking-widest text-center flex items-center justify-center gap-3 text-sm hover:text-primary"
              >
                <span className="material-symbols-outlined">language</span>
                Site Oficial Ferrari
              </a>

              <Link href="/models" className="w-full bg-transparent text-slate-500 hover:text-white font-bold py-3 uppercase transition-all tracking-widest text-center flex items-center justify-center gap-2 text-xs">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Explorar outros modelos
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}