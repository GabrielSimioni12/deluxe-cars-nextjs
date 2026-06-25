"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CATALOG_CARS, type CarCategory } from "@/data/cars";

type Filter = "all" | CarCategory;

export default function ModelsPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const filters: { label: string; value: Filter }[] = [
    { label: "All Models", value: "all" },
    { label: "Sports", value: "sports" },
    { label: "GT", value: "gt" },
    { label: "Special Series", value: "special" },
  ];

  const filtered = CATALOG_CARS.filter((car) => {
    const matchesFilter = activeFilter === "all" || car.category === activeFilter;
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCardClick = (car: (typeof CATALOG_CARS)[0]) => {
    const params = new URLSearchParams({
      model: car.name,
      price: String(car.priceRaw),
      img: car.img,
    });
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <div className="bg-background-dark min-h-screen text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-primary text-3xl">stat_3</span>
              <h1 className="text-xl font-extrabold tracking-[0.2em] uppercase italic">Ferrari</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span className="text-primary">Models</span>
              <Link href="/#engineering" className="hover:text-white transition-colors">Engineering</Link>
              <Link href="#" className="hover:text-white transition-colors">Racing</Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10">
            <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-500 text-white outline-none ml-2"
              placeholder="Search Models..."
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeFilter === f.value
                  ? "bg-primary text-white"
                  : "bg-white/5 text-slate-400 hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((car) => (
            <div
              key={car.id}
              className="group cursor-pointer"
              onClick={() => handleCardClick(car)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-slate-900">
                <Image
                  src={car.img}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <h3 className="text-xl font-extrabold uppercase group-hover:text-primary transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-bold italic">{car.price}</p>
                </div>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all">
                  shopping_cart
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32 text-slate-500">
            <p className="text-xl font-bold uppercase tracking-widest">No models found</p>
          </div>
        )}
      </main>
    </div>
  );
}
