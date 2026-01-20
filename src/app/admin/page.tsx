import AdminTiers from "@/components/sections/AdminTiers";
import AdminFeatures from "@/components/sections/AdminFeatures";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - Xenbird",
  description:
    "Powerful admin dashboard for eCommerce. Manage orders, products, customers, and inventory with ease. From Lite to Enterprise tiers.",
};

export default function AdminPage() {
  return (
    <>
      {/* page intro */}
      <section className="bg-linear-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your entire eCommerce operation from one intuitive dashboard.
            No technical expertise required.
          </p>
        </div>
      </section>

      {/* admin features */}
      <AdminFeatures />

      {/* admin tiers */}
      <AdminTiers />

      {/* cta section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a custom eCommerce website with the admin dashboard that fits
            your business
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
