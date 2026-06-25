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
  { name: "SF90 Stradale", tag: "Hybrid PHEV", price: "R$ 6.900.000", img: "/images/Models/starter/SF90.jpeg" },
  { name: "Roma", tag: "V8 Grand Tourer", price: "R$ 6.600.000", img: "/images/Models/starter/Ferrari-Roma.png" },
  { name: "488 GTB", tag: "V8 Turbo", price: "R$ 5.800.000", img: "/images/Models/starter/488GTB.png" },
  { name: "812 Superfast", tag: "V12 Monster", price: "R$ 3.900.000", img: "/images/Models/starter/812.png" },
  { name: "Purosangue", tag: "V12 SUV", price: "R$ 3.798.000", img: "/images/Models/starter/purosangue.png" },
  { name: "SF90 Stradale Spider", tag: "V12 Icona Series", price: "R$ 5.250.000", img: "/images/Models/starter/SF90STRADALE.png" },
];

export const CATALOG_CARS: Car[] = [
  { id: "1", name: "Ferrari 250 GTO", price: "$385.000.000", priceRaw: 385000000, category: "special", img: "/images/Models/image copy 17.png" },
  { id: "2", name: "Ferrari Purosangue", price: "$7.500.000", priceRaw: 7500000, category: "gt", img: "/images/Models/image copy 16.png" },
  { id: "3", name: "Ferrari F40", price: "$19.250.000", priceRaw: 19250000, category: "special", img: "/images/Models/image copy 18.png" },
  { id: "4", name: "Ferrari 458 Speciale", price: "R$ 5.500.000", priceRaw: 5500000, category: "sports", img: "/images/Models/image copy 3.png" },
  { id: "5", name: "Ferrari Daytona SP3", price: "R$ 25.000.000", priceRaw: 25000000, category: "gt", img: "/images/Models/image copy 4.png" },
  { id: "6", name: "Ferrari Monza SP2", price: "R$ 13.000.000", priceRaw: 13000000, category: "sports", img: "/images/Models/image copy 5.png" },
  { id: "7", name: "Ferrari 488 Pista Spider", price: "R$ 5.600.000", priceRaw: 5600000, category: "sports", img: "/images/Models/image copy 6.png" },
  { id: "8", name: "Ferrari SF90 Stradale", price: "R$ 6.900.000", priceRaw: 6900000, category: "sports", img: "/images/Models/image copy 7.png" },
  { id: "9", name: "Ferrari 360 Challenge Stradale", price: "R$ 3.500.000", priceRaw: 3500000, category: "special", img: "/images/Models/image copy 8.png" },
  { id: "10", name: "Ferrari Enzo", price: "R$ 95.500.000", priceRaw: 95500000, category: "special", img: "/images/Models/image copy 9.png" },
  { id: "11", name: "Ferrari SF90 XX Stradale", price: "R$ 12.500.000", priceRaw: 12500000, category: "special", img: "/images/Models/image copy 10.png" },
  { id: "12", name: "Ferrari California", price: "$1.650.000", priceRaw: 1650000, category: "gt", img: "/images/Models/image copy 11.png" },
  { id: "13", name: "Ferrari F80", price: "R$ 22.000.000", priceRaw: 22000000, category: "sports", img: "/images/Models/image copy 12.png" },
  { id: "14", name: "LaFerrari Aperta", price: "R$ 25.000.000", priceRaw: 25000000, category: "special", img: "/images/Models/image copy 19.png" },
  { id: "15", name: "LaFerrari Coupé", price: "R$ 30.000.000", priceRaw: 30000000, category: "special", img: "/images/Models/image copy 14.png" },
  { id: "16", name: "Ferrari F355 Challenge", price: "$2.500.000", priceRaw: 2500000, category: "sports", img: "/images/Models/image copy 15.png" },
  { id: "17", name: "Ferrari SF90", price: "R$ 10.000.000", priceRaw: 10000000, category: "sports", img: "/images/Models/image copy.png" },
  { id: "18", name: "Ferrari Purosangue V12", price: "$7.500.000", priceRaw: 7500000, category: "gt", img: "/images/Models/image.png" },
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
