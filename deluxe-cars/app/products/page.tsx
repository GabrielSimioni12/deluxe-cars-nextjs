"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = "all" | "vestuario" | "bones" | "colecoes" | "acessorios";

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  tag?: string;
  img: string;
  description: string;
  brand: string;
}

const PRODUCTS: Product[] = [
  // Vestuário
  { id: 1, name: "2026 Authentic Team Polo", price: 845, category: "vestuario", tag: "Novo", img: "/images/shopping/polo_preta.png", description: "Polo oficial Scuderia Ferrari 2026", brand: "PUMA x Ferrari" },
  { id: 2, name: "2026 Driver T-Shirt", price: 599, category: "vestuario", img: "/images/shopping/image.png", description: "T-shirt oficial dos pilotos 2026", brand: "PUMA x Ferrari" },
  { id: 3, name: "2026 Polo Branca", price: 590, category: "vestuario", img: "/images/shopping/polo_branca.png", description: "Camiseta clássica Scuderia Ferrari", brand: "PUMA x Ferrari" },
  { id: 4, name: "Jaqueta Racing Ferrari", price: 869, category: "vestuario", tag: "Destaque", img: "/images/shopping/jaqueta.png", description: "Jaqueta racing oficial Ferrari", brand: "PUMA x Ferrari" },
  { id: 5, name: "Moletom Scuderia Ferrari", price: 720, category: "vestuario", img: "/images/shopping/moletom.png", description: "Moletom com zip e logo Cavallino", brand: "PUMA x Ferrari" },
  { id: 6, name: "Tênis Ferrari Sport", price: 980, category: "vestuario", tag: "Novo", img: "/images/shopping/tenis.png", description: "Tênis esportivo oficial Ferrari", brand: "PUMA x Ferrari" },

  // Bonés
  { id: 7, name: "Boné Scuderia Ferrari Preto", price: 297, category: "bones", img: "/images/shopping/bone.png", description: "Boné clássico com logo Scuderia", brand: "PUMA x Ferrari" },
  { id: 8, name: "Boné Ferrari Branco", price: 311, category: "bones", tag: "Edição Especial", img: "/images/shopping/bone_branco.png", description: "Boné branco edição especial", brand: "PUMA x Ferrari" },

  // Colecionáveis
  { id: 9, name: "Mini Capacete LEGO Ferrari", price: 1580, category: "colecoes", tag: "LEGO", img: "/images/shopping/capacete_lego.png", description: "Capacete colecionável em LEGO", brand: "LEGO x Ferrari" },
  { id: 10, name: "LEGO Ferrari F1", price: 9799, category: "colecoes", tag: "LEGO", img: "/images/shopping/ferrari_lego.png", description: "Set LEGO oficial Ferrari F1", brand: "LEGO x Ferrari" },
  { id: 11, name: "Carro Brinquedo Lewis Hamilton", price: 890, category: "colecoes", img: "/images/shopping/lewis_carro_brinquedo.png", description: "Miniatura colecionável Lewis Hamilton", brand: "Spark x Ferrari" },

  // Acessórios
  { id: 12, name: "Garrafa Ferrari 600ml", price: 218, category: "acessorios", img: "/images/shopping/garrafa_de_agua.png", description: "Garrafa oficial 600ml com logo", brand: "PUMA x Ferrari" },
  { id: 13, name: "Perfume Ferrari", price: 399, category: "acessorios", tag: "Perfume", img: "/images/shopping/perfume.png", description: "Eau de Toilette 125ml — Ferrari", brand: "Ferrari Parfums" },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "Todos", value: "all" },
  { label: "Vestuário", value: "vestuario" },
  { label: "Bonés", value: "bones" },
  { label: "Colecionáveis", value: "colecoes" },
  { label: "Acessórios", value: "acessorios" },
];

const EMOJI_FALLBACK: Record<Category, string> = {
  all: "🛍️",
  vestuario: "👕",
  bones: "🧢",
  colecoes: "🏎️",
  acessorios: "🎒",
};

interface CartItem extends Product {
  qty: number;
}

export default function ProductsPage() {
  const [filter, setFilter] = useState<Category>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [added, setAdded] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const filtered = PRODUCTS.filter((p) => filter === "all" || p.category === filter);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id: number, qty: number) => {
    if (qty < 1) return removeFromCart(id);
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
  };

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const totalItems = cart.reduce((acc, i) => acc + i.qty, 0);

  return (
    <>
      <Header />

      {/* Cart sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="relative z-10 w-full max-w-sm bg-[#0e0e0e] border-l border-white/10 flex flex-col h-full shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <div>
                <h2 className="text-lg font-black uppercase italic tracking-tighter text-white">Carrinho</h2>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{totalItems} {totalItems === 1 ? "item" : "itens"}</p>
              </div>
              <button onClick={() => setCartOpen(false)} className="text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-20">
                  <span className="text-5xl">🛒</span>
                  <p className="text-slate-500 text-sm uppercase tracking-widest">Carrinho vazio</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center text-2xl shrink-0 relative overflow-hidden">
                      {!imgError[item.id] ? (
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover"
                          onError={() => setImgError((p) => ({ ...p, [item.id]: true }))}
                        />
                      ) : (
                        <span>{EMOJI_FALLBACK[item.category]}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-black uppercase truncate">{item.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{item.brand}</p>
                      <p className="text-primary text-sm font-black mt-0.5">
                        R$ {(item.price * item.qty).toLocaleString("pt-BR")}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-6 h-6 rounded bg-white/10 hover:bg-primary transition-all text-white text-xs flex items-center justify-center font-black">−</button>
                        <span className="text-white text-xs w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-6 h-6 rounded bg-white/10 hover:bg-primary transition-all text-white text-xs flex items-center justify-center font-black">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-slate-600 hover:text-red-500 transition-colors shrink-0 self-start">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm uppercase tracking-widest font-bold">Total</span>
                  <span className="text-white text-2xl font-black">R$ {total.toLocaleString("pt-BR")}</span>
                </div>
                <button className="w-full bg-primary hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 rounded-lg transition-all text-sm">
                  Finalizar Compra
                </button>
                <button onClick={() => setCartOpen(false)} className="w-full text-slate-500 hover:text-white text-xs uppercase tracking-widest transition-colors">
                  Continuar Comprando
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <main className="bg-background-dark min-h-screen text-slate-100 pt-24">
        {/* Hero */}
        <section className="relative py-20 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 text-[18rem] font-black text-white/[0.02] select-none leading-none italic uppercase -translate-y-10 translate-x-10">
            STORE
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div
                className="space-y-4 transition-all duration-700"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
              >
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-primary" /> Scuderia Ferrari Store
                </span>
                <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-none">
                  Ferrari <br /><span className="text-primary">Store</span>
                </h1>
                <p className="text-slate-500 max-w-md font-light text-lg">
                  25 produtos oficiais Ferrari — vestuário, colecionáveis, bonés e acessórios.
                </p>
              </div>

              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center gap-3 bg-white/5 border border-white/10 hover:border-primary px-6 py-4 rounded-xl transition-all group"
              >
                <span className="material-symbols-outlined text-2xl text-white group-hover:text-primary transition-colors">shopping_cart</span>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">Carrinho</p>
                  <p className="text-white font-black text-sm">R$ {total.toLocaleString("pt-BR")}</p>
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full text-white text-[10px] font-black flex items-center justify-center animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-40 bg-background-dark/90 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto hide-scrollbar">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                  filter === f.value
                    ? "bg-primary text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 border border-white/5"
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="text-slate-600 text-xs uppercase tracking-widest ml-auto shrink-0">
              {filtered.length} produtos
            </span>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="group bg-surface-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(194,10,10,0.15)]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${i * 0.04}s`,
                }}
              >
                {/* Image */}
                <div className="relative bg-white/[0.03] aspect-square flex items-center justify-center overflow-hidden">
                  {!imgError[product.id] ? (
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImgError((p) => ({ ...p, [product.id]: true }))}
                    />
                  ) : (
                    <span className="text-7xl transition-transform duration-500 group-hover:scale-110 select-none">
                      {EMOJI_FALLBACK[product.category]}
                    </span>
                  )}

                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded z-10">
                      {product.tag}
                    </span>
                  )}

                  {added === product.id && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <p className="text-[9px] text-slate-600 uppercase tracking-widest mb-0.5">{product.brand}</p>
                    <p className="text-[10px] text-slate-500 mb-1">{product.description}</p>
                    <h3 className="text-white font-black uppercase text-sm leading-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <p className="text-xl font-black text-white">
                      R$ {product.price.toLocaleString("pt-BR")}
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}