export default function AdminTiers() {
  const tiers = [
    {
      name: "Lite",
      price: "Starter",
      description: "Perfect for new businesses and small stores",
      features: [
        "Basic order management",
        "Product catalog (up to 100 products)",
        "Customer management",
        "Basic analytics",
        "Email notifications",
      ],
      highlight: false,
    },
    {
      name: "Standard",
      price: "Growing",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Lite",
        "Unlimited products",
        "Advanced analytics",
        "Inventory management",
        "Bulk operations",
        "Export data",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "Popular",
      description: "For established businesses",
      features: [
        "Everything in Standard",
        "Multi-user access",
        "Advanced reporting",
        "API access",
        "Custom integrations",
        "Priority support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom features",
        "White-label options",
        "Advanced security",
        "SLA guarantee",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Admin Tier
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From startups to enterprises, we have the right admin dashboard for
            your business size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`border rounded-lg p-6 ${
                tier.highlight
                  ? "border-blue-600 shadow-lg relative"
                  : "border-gray-200"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-2">
                  {tier.price}
                </p>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help choosing? We'll recommend the best tier for your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
