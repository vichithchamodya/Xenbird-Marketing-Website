import Link from "next/link";
import { INDUSTRIES } from "@/lib/constants";

export default function IndustryGrid() {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.slug}
              href={`/demos/${industry.slug}`}
              className="group border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-blue-600 transition-all"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {industry.name}
              </h3>
              <p className="text-gray-600">{industry.description}</p>
              <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
                View Demos →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
