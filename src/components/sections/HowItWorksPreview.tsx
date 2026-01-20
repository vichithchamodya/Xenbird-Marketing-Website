import Link from "next/link";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export default function HowItWorksPreview() {

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Xenbird Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to launch your custom eCommerce website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/how-it-works"
            className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Learn More About Our Process →
          </Link>
        </div>
      </div>
    </section>
  );
}
