import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl italic font-black">
                stat_3
              </span>
              <h2 className="text-3xl font-black tracking-tighter uppercase italic text-white">
                Ferrari
              </h2>
            </div>
            <p className="text-slate-500 font-light leading-relaxed max-w-sm text-lg italic">
              &ldquo;Driven by emotion. Defined by performance.&rdquo;
              <br />
              A excelência de Maranello, agora ao seu alcance em cada pixel.
            </p>
            <div className="flex gap-6">
              {["share", "play_circle", "photo_camera"].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="size-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-500"
                >
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">
              Experience
            </h4>
            <ul className="space-y-4">
              {["Racing Heritage", "Collections", "Tailor Made", "Maranello Store"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-primary transition-colors text-sm font-light uppercase tracking-widest"
                  >
                    {item}
                  </Link>
                  
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">
              The Scuderia Club
            </h4>
            <p className="text-slate-500 text-sm font-light">
              Receba atualizações exclusivas sobre lançamentos e eventos de pista.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-white/5 border-b border-white/10 py-4 px-0 text-white text-xs tracking-widest outline-none focus:border-primary transition-all placeholder:text-slate-700"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:translate-x-2 transition-transform">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">
            {["Privacy Policy", "Cookie Policy", "Legal Notes", "Corporate"].map((item) => (
              <Link key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <p className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-bold">
            © 2026 Ferrari S.p.A — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
