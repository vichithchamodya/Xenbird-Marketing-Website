export default function ValueProposition() {
  const features = [
    {
      title: "Demo-First Approach",
      description:
        "Explore real, working demos across 12+ industries before making any decision. No guesswork.",
      icon: "🎯",
    },
    {
      title: "Custom-Coded, Not Templates",
      description:
        "Every website is custom-coded to match your exact requirements. Not a generic template.",
      icon: "💻",
    },
    {
      title: "Launch in Days",
      description:
        "What takes months with traditional development, we deliver in days. Fast, reliable, proven.",
      icon: "⚡",
    },
    {
      title: "Zero Technical Complexity",
      description:
        "No coding required. No technical knowledge needed. We handle everything for you.",
      icon: "✨",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Xenbird?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not an agency. We're a product built to help you launch
            faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
