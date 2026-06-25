"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutClient() {
  const params = useSearchParams();
  const model = params.get("model") || "Ferrari Model";
  const price = parseInt(params.get("price") || "300000");
  const img = params.get("img") || "/images/Models/image.png";

  const [downPayment, setDownPayment] = useState(price * 0.2);
  const [term, setTerm] = useState(48);

  const minDown = price * 0.1;
  const maxDown = price * 0.8;

  const calcMonthly = () => {
    const loan = price - downPayment;
    const rate = 0.0399 / 12;
    return (loan * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
  };

  useEffect(() => {
    setDownPayment(price * 0.2);
  }, [price]);

  const monthly = calcMonthly();

  return (
    <div className="bg-background-dark min-h-screen text-slate-100">
      <header className="border-b border-white/5 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/models" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">stat_3</span>
            <span className="text-xl font-black uppercase italic">Ferrari</span>
          </Link>
          <Link
            href="/models"
            className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
          >
            Back to Catalog
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">{model}</h1>
          <p className="text-xl text-slate-400 font-medium">
            Configured Price: ${price.toLocaleString()}.00
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Car image */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-slate-900 shadow-2xl">
              <div className="relative aspect-video">
                <Image src={img} alt={model} fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-dark rounded-2xl border border-white/5 p-8">
              <h3 className="text-lg font-bold mb-8 uppercase tracking-widest">
                Financing Calculator
              </h3>

              <div className="space-y-10">
                {/* Down payment */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-400 uppercase">
                      Down Payment
                    </label>
                    <span className="text-lg font-black text-primary">
                      ${Math.round(downPayment).toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={minDown}
                    max={maxDown}
                    step={1000}
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Term */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-400 uppercase">
                      Term (Months)
                    </label>
                    <span className="text-lg font-black text-primary">{term} Months</span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={72}
                    step={12}
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Result */}
              <div className="mt-10 pt-8 border-t border-white/5">
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">
                      Monthly Payment
                    </p>
                    <p className="text-4xl font-black text-white">
                      ${Math.round(monthly).toLocaleString()}
                    </p>
                  </div>
                  <p className="text-xl font-black text-primary italic">3.99% APR</p>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-lg uppercase mt-6 transition-all tracking-widest">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
