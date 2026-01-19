import Link from "next/link";

export default function IndustryGrid() {
  const industries = [
    {
      name: "Fashion",
      icon: "👗",
      slug: "fashion",
      description: "Clothing, accessories, and fashion retail",
    },
    {
      name: "Technology",
      icon: "💻",
      slug: "technology",
      description: "Electronics, gadgets, and tech products",
    },
    {
      name: "Beauty",
      icon: "💄",
      slug: "beauty",
      description: "Cosmetics, skincare, and beauty products",
    },
    {
      name: "Wellness",
      icon: "🧘",
      slug: "wellness",
      description: "Health, fitness, and wellness products",
    },
    {
      name: "Sports",
      icon: "⚽",
      slug: "sports",
      description: "Sports equipment and athletic wear",
    },
    {
      name: "Jewellery",
      icon: "💎",
      slug: "jewellery",
      description: "Fine jewelry and accessories",
    },
    {
      name: "Appliances",
      icon: "🏠",
      slug: "appliances",
      description: "Home and kitchen appliances",
    },
    {
      name: "Construction",
      icon: "🏗️",
      slug: "construction",
      description: "Building materials and tools",
    },
    {
      name: "Horology",
      icon: "⌚",
      slug: "horology",
      description: "Watches and timepieces",
    },
    {
      name: "Food",
      icon: "🍕",
      slug: "food",
      description: "Food products and delivery",
    },
    {
      name: "Realty",
      icon: "🏡",
      slug: "realty",
      description: "Real estate and property listings",
    },
    {
      name: "Automotive",
      icon: "🚗",
      slug: "automotive",
      description: "Auto parts and accessories",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry) => (
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
