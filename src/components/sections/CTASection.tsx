import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Launch Your Store?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join businesses that chose speed, quality, and simplicity with Xenbird
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
          <Link
            href="/demos"
            className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-blue-700 transition-colors"
          >
            Explore Demos
          </Link>
        </div>
      </div>
    </section>
  );
}
