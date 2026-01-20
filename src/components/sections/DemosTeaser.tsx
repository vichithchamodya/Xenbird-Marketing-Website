import Link from "next/link";
import { INDUSTRIES } from "@/lib/constants";

export default function DemosTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Demos Across 12+ Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See real, working demos tailored to your industry before making any
            commitment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.slug}
              href={`/demos/${industry.slug}`}
              className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg hover:border-blue-600 transition-all group"
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {industry.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/demos"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore All Demos
          </Link>
        </div>
      </div>
    </section>
  );
}
