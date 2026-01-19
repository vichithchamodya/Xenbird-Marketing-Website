import ProcessFlow from "@/components/sections/ProcessFlow";
import Timeline from "@/components/sections/Timeline";
import FAQ from "@/components/sections/FAQ";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <>
      {/* page intro */}
      <section className="bg-linear-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Xenbird Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From demo selection to launch, here's our proven process for
            delivering custom eCommerce websites in days, not months.
          </p>
        </div>
      </section>

      {/* main sections */}
      <ProcessFlow />
      <Timeline />
      <FAQ />

      {/* bottom cta */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our demos or contact us to discuss your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demos"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Demos
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
