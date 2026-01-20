import { ROADMAP_PHASES } from "@/lib/constants";

export default function Roadmap() {
  const phases = [
    {
      quarter: "Q1 2026",
      title: "Current",
      items: [
        "Launch 5 new industry demos",
        "Mobile admin app (iOS & Android)",
        "Advanced analytics dashboard",
        "Multi language support",
      ],
      status: "in-progress",
    },
    {
      quarter: "Q2 2026",
      title: "Next",
      items: [
        "AI-powered customization assistant",
        "Subscription & recurring billing",
        "Advanced SEO tools",
        "Marketplace integrations (Amazon, eBay)",
      ],
      status: "planned",
    },
    {
      quarter: "Q3 2026",
      title: "Future",
      items: [
        "White-label reseller program",
        "Advanced automation features",
        "Multi store management",
        "B2B eCommerce features",
      ],
      status: "planned",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What's coming next for Xenbird
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROADMAP_PHASES.map((phase, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg border-2 ${
                  phase.status === "in-progress"
                    ? "border-blue-600"
                    : "border-gray-200"
                }`}
              >
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600">
                    {phase.quarter}
                  </span>
                  {phase.status === "in-progress" && (
                    <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                      In Progress
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-blue-600 mr-2 mt-0.5">→</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            * Roadmap is subject to change based on customer feedback and market
            needs
          </p>
        </div>
      </div>
    </section>
  );
}
