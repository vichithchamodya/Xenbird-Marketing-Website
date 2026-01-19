import DemoCard from "@/components/ui/DemoCard";
import Link from "next/link";

export default async function DemoCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // valid categories
  const validCategories = [
    "fashion",
    "technology",
    "beauty",
    "wellness",
    "sports",
    "jewellery",
    "appliances",
    "construction",
    "horology",
    "food",
    "realty",
    "automotive",
  ];

  // check if category is valid
  if (!validCategories.includes(category)) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The category you're looking for doesn't exist.
        </p>
        <Link
          href="/demos"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to All Demos
        </Link>
      </div>
    );
  }

  // placeholder demos
  const demos = [
    {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Store Pro`,
      description: `A comprehensive eCommerce solution for ${category} businesses with all essential features.`,
      features: [
        "Product catalog with categories",
        "Shopping cart & checkout",
        "Order management",
        "Customer accounts",
      ],
    },
    {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Boutique`,
      description: `A modern, elegant design perfect for boutique ${category} stores.`,
      features: [
        "Advanced product filters",
        "Wishlist functionality",
        "Customer reviews",
        "Mobile-optimized",
      ],
    },
    {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Marketplace`,
      description: `Multi-vendor marketplace solution for ${category} products.`,
      features: [
        "Multi-vendor support",
        "Advanced analytics",
        "Payment gateway integration",
        "Inventory management",
      ],
    },
  ];

  return (
    <>
      {/* breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/demos" className="hover:text-blue-600">
              Demos
            </Link>
            <span className="mx-2">/</span>
            <span className="capitalize">{category.replace(/-/g, " ")}</span>
          </div>
        </div>
      </section>

      {/* page header */}
      <section className="bg-linear-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 capitalize">
            {category.replace(/-/g, " ")} Demos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our custom-coded eCommerce demos designed specifically for{" "}
            {category} businesses.
          </p>
        </div>
      </section>

      {/* demo cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {demos.map((demo, index) => (
              <DemoCard
                key={index}
                title={demo.title}
                description={demo.description}
                features={demo.features}
                demoUrl="#"
              />
            ))}
          </div>
        </div>
      </section>

      {/* cta section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Customize Your{" "}
            {category.charAt(0).toUpperCase() + category.slice(1)} Store?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            These demos are just the starting point. We'll customize everything
            to match your brand and requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
