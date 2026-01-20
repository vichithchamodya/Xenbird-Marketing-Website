import IndustryGrid from "@/components/sections/IndustryGrid";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Demos - Xenbird",
  description:
    "Browse 12+ industry-specific eCommerce demos. See real, working websites before making any commitment. Fashion, Tech, Beauty, and more.",
};

export default function DemosPage() {
  return (
    <>
      {/* page intro */}
      <section className="bg-linear-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Demos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            See real, working eCommerce demos across 12+ industries. No generic
            templates—each demo is tailored to specific business types.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Browse by industry, explore features, and see exactly what you'll
            get before making any commitment.
          </p>
        </div>
      </section>

      {/* industry grid */}
      <IndustryGrid />

      {/* bottom section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're constantly expanding our demo library. Contact us to discuss
            your specific industry needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
