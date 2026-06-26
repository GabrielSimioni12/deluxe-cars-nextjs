export type CarCategory = "sports" | "gt" | "special";

export interface Car {
  id: string;
  name: string;
  price: string;
  priceRaw: number;
  category: CarCategory;
  img: string;
}

export interface CarouselCar {
  name: string;
  tag: string;
  price: string;
  img: string;
}

export const CAROUSEL_CARS: CarouselCar[] = [
  { name: "SF90 Stradale", tag: "Hybrid PHEV", price: "R$ 6.900.000", img: "/images/Models/starter/SF90.png" },
  { name: "Roma", tag: "V8 Grand Tourer", price: "R$ 6.600.000", img: "/images/Models/starter/roma.png" },
  { name: "488 GTB", tag: "V8 Turbo", price: "R$ 5.800.000", img: "/images/Models/starter/488GTB.png" },
  { name: "812 Superfast", tag: "V12 Monster", price: "R$ 3.900.000", img: "/images/Models/starter/812SUPERFAST.png" },
  { name: "Purosangue", tag: "V12 SUV", price: "R$ 3.798.000", img: "/images/Models/starter/purosangue.png" },
  { name: "SF90 Stradale Spider", tag: "V12 Icona Series", price: "R$ 5.250.000", img: "/images/Models/starter/STRADALE.png" },
];

export const CATALOG_CARS: Car[] = [
  { id: "1", name: "Ferrari SF90 XX Stradale", price: "R$ 12.500.000", priceRaw: 12500000, category: "special", img: "/images/models/catalog/1.png" },
  { id: "2", name: "Ferrari California", price: "R$ 1.800.000", priceRaw: 1800000, category: "gt", img: "/images/models/catalog/2.png" },
  { id: "3", name: "Ferrari F80", price: "R$ 22.000.000", priceRaw: 22000000, category: "sports", img: "/images/models/catalog/3.png" },
  { id: "4", name: "LaFerrari Coupé", price: "R$ 30.000.000", priceRaw: 30000000, category: "special", img: "/images/models/catalog/4.png" },
  { id: "5", name: "LaFerrari Aperta", price: "R$ 35.000.000", priceRaw: 35000000, category: "special", img: "/images/models/catalog/5.png" },
  { id: "6", name: "Ferrari F355 Challenge", price: "R$ 2.800.000", priceRaw: 2800000, category: "sports", img: "/images/models/catalog/6.png" },
  { id: "7", name: "Ferrari Purosangue", price: "R$ 4.200.000", priceRaw: 4200000, category: "gt", img: "/images/models/catalog/7.png" },
  { id: "8", name: "Ferrari 250 GTO", price: "R$ 220.000.000", priceRaw: 220000000, category: "special", img: "/images/models/catalog/8.png" },
  { id: "9", name: "Ferrari F40", price: "R$ 12.000.000", priceRaw: 12000000, category: "special", img: "/images/models/catalog/9.png" },
  { id: "10", name: "LaFerrari Spider", price: "R$ 40.000.000", priceRaw: 40000000, category: "special", img: "/images/models/catalog/10.png" },
  { id: "11", name: "Ferrari 458 Speciale", price: "R$ 3.800.000", priceRaw: 3800000, category: "sports", img: "/images/models/catalog/11.png" },
  { id: "12", name: "Ferrari Daytona SP3", price: "R$ 14.000.000", priceRaw: 14000000, category: "gt", img: "/images/models/catalog/12.png" },
  { id: "13", name: "Ferrari Monza SP2", price: "R$ 8.500.000", priceRaw: 8500000, category: "special", img: "/images/models/catalog/13.png" },
  { id: "14", name: "Ferrari 488 Pista Spider", price: "R$ 4.200.000", priceRaw: 4200000, category: "sports", img: "/images/models/catalog/14.png" },
  { id: "15", name: "Ferrari SF90 Stradale", price: "R$ 6.900.000", priceRaw: 6900000, category: "sports", img: "/images/models/catalog/15.png" },
  { id: "16", name: "Ferrari F430", price: "R$ 1.200.000", priceRaw: 1200000, category: "sports", img: "/images/models/catalog/16.png" },
  { id: "17", name: "Ferrari Enzo", price: "R$ 55.000.000", priceRaw: 55000000, category: "special", img: "/images/models/catalog/17.png" },
  { id: "18", name: "Ferrari 296 Speciale", price: "R$ 7.500.000", priceRaw: 7500000, category: "sports", img: "/images/models/catalog/18.png" },
  { id: "19", name: "Ferrari Purosangue V12", price: "R$ 4.500.000", priceRaw: 4500000, category: "gt", img: "/images/models/catalog/19.png" },
];

export interface Dealer {
  name: string;
  country: string;
  x: number;
  y: number;
  img: string;
}

export const DEALERS: Dealer[] = [
  { name: "Ferrari Maranello", country: "Italy", x: 51, y: 38, img: "/images/icons/ferrari_logo.png" },
  { name: "Ferrari New York", country: "USA", x: 28, y: 37, img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=60&w=150" },
  { name: "Ferrari São Paulo", country: "Brazil", x: 34, y: 75, img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=60&w=150" },
];
