import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ferrari | The Essence of Speed",
  description: "Italian engineering at its peak.",
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
