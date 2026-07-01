"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarModal from "@/components/CarModal";
import F1Modal from "@/components/F1Modal";
import { CAROUSEL_CARS, type CarouselCar } from "@/data/cars";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modal, setModal] = useState<CarouselCar | null>(null);
  const [f1Modal, setF1Modal] = useState(false);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load();
    }
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (e) {
      console.log("Audio error:", e);
    }
  };

  return (
    <>
      <Header />

      {modal && (
        <CarModal
          isOpen={!!modal}
          onClose={() => setModal(null)}
          img={modal.img}
          title={modal.name}
          tag={modal.tag}
          price={modal.price}
        />
      )}

      <F1Modal isOpen={f1Modal} onClose={() => setF1Modal(false)} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-background-dark/20 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=2000"
            alt="Ferrari SF90"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-48 reveal">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-primary" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                V12 Naturally Aspirated
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-extrabold leading-[0.85] tracking-tighter text-white uppercase italic">
              The Essence <br /> of <span className="text-primary">Speed</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl font-light">
              Italian engineering at its peak. Clique nas máquinas para ampliar a visão.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: "800", label: "Cavalos de Potência", highlight: true },
            { value: "2.9s", label: "0-100 KM/H", highlight: false },
            { value: "340", label: "Velocidade Máxima", highlight: false },
            { value: "V12", label: "Engine Heart", highlight: true },
          ].map((stat, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className={`font-black text-5xl md:text-6xl italic tracking-tighter mb-2 ${stat.highlight ? "text-primary" : "text-white"}`}>
                {stat.value}
              </p>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel */}
      <section className="py-32 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end reveal">
          <div>
            <h3 className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2">The Collection</h3>
            <h2 className="text-5xl font-bold tracking-tighter text-white italic uppercase">Current Stable</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => carouselRef.current?.scrollBy({ left: -432, behavior: "smooth" })}
              className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all text-white"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => carouselRef.current?.scrollBy({ left: 432, behavior: "smooth" })}
              className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all text-white"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div ref={carouselRef} className="flex overflow-x-auto hide-scrollbar px-6 gap-8 snap-x scroll-smooth">
          {CAROUSEL_CARS.map((car) => (
            <div key={car.name} className="min-w-[400px] snap-start group cursor-pointer reveal">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-accent-dark">
                <Image
                  src={car.img}
                  alt={car.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 gap-4 p-6">
                  <p className="text-white font-black uppercase text-xl tracking-wider text-center">{car.name}</p>
                  <p className="text-primary text-sm font-bold">{car.price}</p>
                  <Link
                    href="/models"
                    className="bg-primary hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-sm transition-all"
                  >
                    Ver Catálogo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage */}
      <section className="py-32 bg-surface-dark relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 left-0 text-[20rem] font-black text-white/[0.02] select-none leading-none -translate-x-20 -translate-y-20 italic uppercase">
          1947
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative reveal group">
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-700" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/Models/hub/enzo.png"
                alt="Enzo Ferrari Heritage"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-8 right-8 bg-primary p-6 rounded-sm shadow-2xl">
              <p className="text-4xl font-black italic tracking-tighter">75+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest leading-none">Anos de Glória</p>
            </div>
          </div>

          <div className="space-y-8 reveal">
            <div>
              <h3 className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 flex items-center gap-4">
                <span className="h-[1px] w-8 bg-primary" /> Maranello Heritage
              </h3>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white italic uppercase leading-[0.9]">
                O Homem por trás da <span className="text-primary">Lenda</span>
              </h2>
            </div>
            <div className="space-y-6 text-slate-400 font-light text-lg leading-relaxed">
              <p>
                &ldquo;Eu não vendo carros, eu vendo motores. Os carros eu dou de graça porque algo
                precisa segurar o motor.&rdquo; —{" "}
                <span className="text-white font-medium">Enzo Ferrari</span>.
              </p>
              <p>
                Desde a lendária 125 S de 1947, cada curva de uma Ferrari é desenhada pelo vento e
                cada batida do motor é sincronizada com o coração de quem a pilota.
              </p>
            </div>
            <button className="group flex items-center gap-6 text-white hover:text-primary transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explorar Linha do Tempo</span>
              <div className="relative flex items-center justify-center">
                <div className="h-[1px] w-12 bg-white group-hover:bg-primary group-hover:w-20 transition-all" />
                <span className="material-symbols-outlined text-sm absolute -right-2 opacity-0 group-hover:opacity-100 transition-all">chevron_right</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* F1 Card */}
      <section className="py-32 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/5 cursor-pointer group"
            onClick={() => setF1Modal(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all duration-700 scale-105 group-hover:scale-100"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=2000')" }}
            />
            <div className="relative z-20 p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-4">
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-primary" /> Scuderia Ferrari
                </span>
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white italic uppercase leading-none">
                  75 Anos na <br /><span className="text-primary">Fórmula 1</span>
                </h2>
                <p className="text-slate-400 font-light max-w-md">
                  A equipe mais icônica da história do automobilismo. 243 vitórias, 16 títulos de
                  construtores — clique para explorar.
                </p>
              </div>
              <div className="shrink-0 size-20 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sound */}
      <section className="py-32 bg-background-dark border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="max-w-xl reveal">
              <h3 className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Acoustic Engineering</h3>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white italic uppercase leading-none mb-8">
                A Sinfonia <br /> de <span className="text-primary">Maranello</span>
              </h2>
              <p className="text-slate-400 font-light text-lg mb-10 leading-relaxed">
                Cada motor Ferrari é afinado como um instrumento musical. O som não é apenas um
                subproduto, é uma assinatura emocional que reverbera a 9.000 RPM.
              </p>
              <div className="flex items-center gap-6 group cursor-pointer" onClick={toggleSound}>
                <div className="size-20 rounded-full border border-primary flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-all duration-500">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">
                    {isPlaying ? "pause" : "play_arrow"}
                  </span>
                </div>
                <div>
                  <p className="text-white font-black uppercase tracking-widest text-sm">Ouvir V12 Aspirado</p>
                  <p className="text-primary text-[10px] uppercase font-bold tracking-[0.2em]">812 Superfast Engine</p>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-1 h-32 reveal">
              {[25, 50, 75, 100, 75, 50, 25, 50, 80].map((h, i) => (
                <div
                  key={i}
                  className={`w-2 bg-primary rounded-full sound-bar ${isPlaying ? "playing" : ""}`}
                  style={{ height: `${h}%`, opacity: h / 100 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <audio ref={audioRef} loop preload="auto">
        <source src="/images/assets/V12.mp3" type="audio/mpeg" />
      </audio>

      <Footer />
    </>
  );
}