"use client";

import { useEffect } from "react";
import Image from "next/image";

interface F1ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MILESTONES = [
  {
    year: "1950",
    title: "O Início",
    car: "Ferrari 125 F1",
    desc: "Ferrari entra na Formula 1 na temporada inaugural. José Froilán González vence o GP da Grã-Bretanha em 1951 — primeira vitória da história.",
    color: "bg-red-900/40 border-red-700/50",
    dot: "bg-red-500",
    img: "/images/F1/F1-Incio.png",
  },
   {
    year: "1° Título",
    title: "Ascari — Primeiro Título",
    car: "Ferrari 500 F2",
    desc: "Alberto Ascari conquista o primeiro título de pilotos da Ferrari em 1952, dominando a temporada e repetindo o feito em 1953.",
    color: "bg-red-900/40 border-red-700/50",
    dot: "bg-red-500",
    champion: "Ascari ×2",
    img: "/images/F1/F1-primeiro_titulo.png",
  },
  {
    year: "1961",
    title: "Phil Hill",
    car: "Ferrari 156 'Sharknose'",
    desc: "O lendário 'Sharknose' leva Phil Hill ao título — primeiro americano campeão do mundo. Ferrari vence também o campeonato de construtores.",
    color: "bg-amber-900/30 border-amber-700/40",
    dot: "bg-amber-400",
    champion: "Phil Hill",
    img: "/images/F1/Phill_Hill.png",
  },
  {
    year: "1975–79",
    title: "Era Lauda & Scheckter",
    car: "Ferrari 312 T",
    desc: "Niki Lauda vence dois títulos (1975, 1977) com a família 312 T. Jody Scheckter completa a era em 1979 — último título de pilotos por 21 anos.",
    color: "bg-amber-900/30 border-amber-700/40",
    dot: "bg-amber-400",
    champion: "Lauda ×2 · Scheckter",
    img: "/images/F1/Nick_Lauda.png",
  },
  {
    year: "2000–04",
    title: "Dinastia Schumacher",
    car: "Ferrari F2002 / F2004",
    desc: "O período mais dominante da história da F1. Michael Schumacher conquista 5 títulos consecutivos. A Ferrari vence 6 construtores seguidos.",
    color: "bg-red-900/60 border-red-600/70",
    dot: "bg-red-400",
    champion: "Schumacher ×5",
    highlight: true,
    img: "/images/F1/Shumacher.png",
  },
  {
    year: "2007",
    title: "Räikkönen",
    car: "Ferrari F2007",
    desc: "Kimi Räikkönen vence o título de 2007 na última volta da última corrida. Felipe Massa quase repete o feito em 2008, perdendo por 1 ponto.",
    color: "bg-red-900/40 border-red-700/50",
    dot: "bg-red-500",
    champion: "Räikkönen",
    img: "/images/F1/KIMI.png",
  },
  {
    year: "2010–12",
    title: "Era Alonso",
    car: "Ferrari F10 / F150",
    desc: "Fernando Alonso leva a Ferrari a brigar pelos títulos de 2010 e 2012, perdendo ambos na última corrida. Uma das lutas mais épicas da história.",
    color: "bg-amber-900/30 border-amber-700/40",
    dot: "bg-amber-400",
    img: "/images/F1/alonso.png",
  },
 
  {
    year: "2022–hoje",
    title: "Leclerc & Hamilton",
    car: "Ferrari SF-24 / SF-25",
    desc: "Charles Leclerc lidera a nova era da Scuderia. Em 2025, Lewis Hamilton se junta ao time trazendo seus 7 títulos — a dupla mais aguardada da F1 moderna.",
    color: "bg-red-900/40 border-red-700/50",
    dot: "bg-red-500",
    img: "/images/F1/charles e hamilton.png",
  },
];

export default function F1Modal({ isOpen, onClose }: F1ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0e0e0e] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="shrink-0 px-8 py-6 border-b border-white/5 flex items-start justify-between">
          <div>
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-1">
              Scuderia Ferrari
            </span>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">
              Ferrari na Fórmula 1
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              75+ anos · 16 títulos de construtores · 15 títulos de pilotos
            </p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-primary transition-colors mt-1">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Stats */}
        <div className="shrink-0 grid grid-cols-3 divide-x divide-white/5 border-b border-white/5">
          {[
            { value: "243", label: "Vitórias" },
            { value: "15", label: "Títulos Pilotos" },
            { value: "16", label: "Títulos Construtores" },
          ].map((s) => (
            <div key={s.label} className="py-4 text-center">
              <p className="text-2xl font-black text-primary italic">{s.value}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/5" />
            <div className="space-y-4">
              {MILESTONES.map((m) => (
                <div key={m.year} className="flex gap-5">
                  <div className="relative shrink-0 mt-4">
                    <div className={`w-4 h-4 rounded-full border-2 border-[#0e0e0e] ${m.dot} z-10 relative`} />
                  </div>
                  <div className={`flex-1 border rounded-xl overflow-hidden ${m.color} ${"highlight" in m && m.highlight ? "ring-1 ring-primary/30" : ""}`}>
                    <div className="relative w-full h-48">
                      <Image
                        src={m.img}
                        alt={m.title}
                        fill
                        className="object-cover object-top brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">
                            {m.year}
                          </span>
                          <h3 className="text-base font-black uppercase text-white leading-tight">{m.title}</h3>
                        </div>
                        {"champion" in m && m.champion && (
                          <span className="shrink-0 bg-primary/90 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded">
                            🏆 {m.champion}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-4 pt-3">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 italic">{m.car}</p>
                      <p className="text-slate-300 text-sm font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}