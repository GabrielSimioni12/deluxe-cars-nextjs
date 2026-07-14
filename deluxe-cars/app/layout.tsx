import type { Metadata } from "next";

// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";

export const metadata: Metadata = {
  title: "Ferrari | The Essence of Speed",
  description: "Italian engineering at its peak.",
  icons: {
    icon: "/images/icons/FerrariTransparent.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className="bg-background-dark text-slate-100 font-display">
        {children}
      </body>
    </html>
  );
}