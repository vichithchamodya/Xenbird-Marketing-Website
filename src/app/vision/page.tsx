import CurrentFocus from "@/components/sections/CurrentFocus";
import Roadmap from "@/components/sections/Roadmap";
import Mission from "@/components/sections/Mission";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Roadmap - Xenbird",
  description:
    "Our mission to democratize eCommerce. See what we're building next and our roadmap for the future of custom online stores.",
};

export default function VisionPage() {
  return (
    <>
      <section className="bg-linear-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Vision & Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building the future of eCommerce, one custom website at a time
          </p>
        </div>
      </section>

      {/* sections */}
      <CurrentFocus />
      <Roadmap />
      <Mission />

      {/* cta section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the future of eCommerce. Start building your online store
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demos"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Demos
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
