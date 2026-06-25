import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background-dark flex items-center justify-center text-white">Loading...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
