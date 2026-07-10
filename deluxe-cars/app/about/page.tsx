import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const TECHS = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-background-dark min-h-screen text-slate-100 pt-24">

        {/* Hero */}
        <section className="relative py-32 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 text-[16rem] font-black text-white/[0.02] select-none leading-none italic uppercase translate-x-10 -translate-y-10">
            DEV
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Text */}
              <div className="space-y-8">
                <div>
                  <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-3 mb-4">
                    <span className="h-[1px] w-8 bg-primary" /> Sobre o Autor
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-white mb-2">
                    Gabriel <br /><span className="text-primary">Simioni</span>
                  </h1>
                  <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
                    Wodewotzky
                  </p>
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                <div className="space-y-4 text-slate-400 font-light text-lg leading-relaxed">
                  <p>
                    Desenvolvedor Frontend e estudante de Ciência da Computação na{" "}
                    <span className="text-white font-medium">FIAP</span>, com experiência prática
                    no setor financeiro.
                  </p>
                  <p>
                    Este projeto foi construído do zero com{" "}
                    <span className="text-white font-medium">Next.js, React e TypeScript</span>,
                    migrando de um HTML puro para uma stack moderna e escalável.
                  </p>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <Link
                    href="https://linkedin.com/in/gabrielsimioni22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-all group"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors">LinkedIn</span>
                  </Link>

                  <Link
                    href="https://github.com/GabrielSimioni12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-all group"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors">GitHub</span>
                  </Link>
                </div>
              </div>

              {/* Photo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                    <Image src="/images/about/autor.jpg" alt="Gabriel Simioni" fill className="object-cover" />
                    <div className="text-center space-y-3 p-8">
                      <span className="material-symbols-outlined text-6xl text-white/20">person</span>
                      <p className="text-[10px] text-slate-600 uppercase tracking-widest">
                        Adicione sua foto em<br />
                        <span className="text-slate-500">public/images/gabriel.jpg</span><br />
                        e substitua este bloco por:<br />
                        <span className="text-primary">{"<Image src=\"/images/gabriel.jpg\" ... />"}</span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary px-4 py-3 rounded-lg shadow-2xl">
                    <p className="text-white text-[10px] font-black uppercase tracking-widest">FIAP · 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-3 mb-2">
                <span className="h-[1px] w-8 bg-primary" /> Stack Utilizada
              </span>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
                Tecnologias do <span className="text-primary">Projeto</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {TECHS.map((tech) => (
                <div
                  key={tech.name}
                  className="group bg-white/5 border border-white/5 hover:border-primary/40 rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(194,10,10,0.1)]"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors text-center">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project info */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "code", label: "Projeto", value: "Deluxe Cars", sub: "Ferrari Showcase" },
                { icon: "school", label: "Curso", value: "Ciências da Computação", sub: "FIAP" },
                { icon: "layers", label: "Stack", value: "Next.js 15", sub: "React + TypeScript" },
              ].map((item) => (
                <div key={item.label} className="bg-surface-dark border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{item.icon}</span>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                  <p className="text-2xl font-black text-white uppercase italic">{item.value}</p>
                  <p className="text-slate-500 text-sm mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}