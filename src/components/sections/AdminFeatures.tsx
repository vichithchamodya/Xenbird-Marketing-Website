export default function AdminFeatures() {
  const features = [
    {
      icon: "📦",
      title: "Order Management",
      description:
        "Track, process, and fulfill orders efficiently. View order history, update statuses, and manage returns.",
    },
    {
      icon: "🛍️",
      title: "Product Management",
      description:
        "Add, edit, and organize products with ease. Manage variants, pricing, inventory, and images.",
    },
    {
      icon: "👥",
      title: "Customer Management",
      description:
        "View customer profiles, order history, and contact information. Build better relationships.",
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description:
        "Get insights into sales, revenue, traffic, and customer behavior with detailed reports.",
    },
    {
      icon: "📈",
      title: "Inventory Tracking",
      description:
        "Monitor stock levels in real-time. Get low-stock alerts and manage inventory across locations.",
    },
    {
      icon: "💳",
      title: "Payment Management",
      description:
        "Track payments, refunds, and transactions. Support multiple payment gateways.",
    },
    {
      icon: "🎨",
      title: "Content Management",
      description:
        "Update banners, promotions, and site content without touching code. Simple drag-and-drop.",
    },
    {
      icon: "🔔",
      title: "Notifications",
      description:
        "Stay updated with email and in-app notifications for orders, inventory, and customer activity.",
    },
    {
      icon: "🔐",
      title: "Security & Permissions",
      description:
        "Role-based access control. Keep your data secure with multi-level permissions.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features, Simple Interface
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to run your eCommerce business efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg">
              Admin Dashboard Preview Mockup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
