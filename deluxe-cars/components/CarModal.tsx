"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  img: string;
  title: string;
  tag: string;
  price: string;
}

export default function CarModal({ isOpen, onClose, img, title, tag, price }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-stretch justify-end bg-black overflow-hidden">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[1] scale-110"
        style={{
          backgroundImage: `url('${img}')`,
          filter: "blur(20px) brightness(0.35)",
        }}
      />

      {/* Car image area */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center p-4 cursor-zoom-out"
        onClick={onClose}
      >
        <Image
          src={img}
          alt={title}
          width={900}
          height={600}
          className="max-w-[96%] max-h-[92vh] object-contain rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.9)] animate-[fadeInScale_0.6s_cubic-bezier(0.23,1,0.32,1)_forwards]"
          style={{ opacity: 1 }}
        />
      </div>

      {/* Side panel */}
      <div className="relative z-20 w-full max-w-[450px] bg-black/50 backdrop-blur-[30px] border-l border-white/10 px-12 py-16 flex flex-col justify-center animate-[slideIn_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white/50 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        <div className="space-y-8">
          <div>
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
              {tag}
            </span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-none tracking-tighter mb-4 text-white">
              {title}
            </h2>
            <div className="h-1 w-20 bg-primary" />
          </div>

          <p className="text-slate-300 text-lg font-light leading-relaxed">
            A expressão máxima da performance italiana. Engenharia de precisão
            combinada com a paixão das pistas adaptada para a excelência das ruas.
          </p>

          <div className="pt-8 border-t border-white/5">
            <p className="text-[10px] uppercase text-white/40 tracking-widest mb-1">
              Starting at
            </p>
            <p className="text-4xl font-bold italic text-white">{price}</p>
          </div>

          <button className="w-full bg-primary hover:bg-red-700 text-white text-xs font-black uppercase tracking-[0.2em] py-5 rounded-sm transition-all mt-10">
            Configure Yours
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
