import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Sites - Explore Xenbird Industries",
  description:
    "Explore Xenbird demo eCommerce websites across 12 industries. Experience working stores before making your decision.",
};

export default function DemosPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Explore Demo Sites
        </h1>
        <p className="text-xl text-muted text-center max-w-3xl mx-auto">
          Browse ready-made eCommerce demos across multiple industries
        </p>
      </div>
    </div>
  );
}
