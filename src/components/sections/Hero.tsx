import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Launch Your Custom eCommerce Website in{" "}
            <span className="text-blue-600">Days, Not Months</span>
          </h1>

          {/* subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            No templates. No technical complexity. Just custom-coded eCommerce
            websites built for your business.
          </p>

          {/* cta buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

          {/* visual placeholder */}
          <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
            <p className="text-gray-500">
              Hero Image / Demo Preview Placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
