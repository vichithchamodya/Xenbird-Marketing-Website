export default function ProcessFlow() {
  const steps = [
    {
      number: "01",
      title: "Browse Industry Demos",
      description:
        "Explore our collection of real, working eCommerce demos across 12+ industries. Each demo showcases features, design, and functionality tailored to specific business types. No generic templates—just proven, industry-specific solutions.",
      visual: "🎯",
    },
    {
      number: "02",
      title: "Schedule a Call or Submit Requirements",
      description:
        "Tell us about your business, brand, and specific needs. Share your preferences for design, features, and functionality. We'll discuss the demo that best fits your requirements and how we'll customize it for you.",
      visual: "📋",
    },
    {
      number: "03",
      title: "We Customize Your Website",
      description:
        "Our team gets to work customizing your chosen demo. We tailor the design, integrate your branding, add your products, and configure features based on your exact requirements. All custom-coded, no shortcuts.",
      visual: "⚙️",
    },
    {
      number: "04",
      title: "Review & Provide Feedback",
      description:
        "We share your customized website for review. You can request changes, refinements, or adjustments. We iterate based on your feedback to ensure everything meets your expectations.",
      visual: "✅",
    },
    {
      number: "05",
      title: "Launch Your Store",
      description:
        "Once you approve, we handle the deployment and launch. Your custom eCommerce website goes live, fully functional and ready to start selling. All of this in days, not months.",
      visual: "🚀",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Step-by-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From demo selection to launch, here's how we help you get online
            fast
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* visual */}
              <div className="shrink-0 w-full md:w-1/3">
                <div className="bg-blue-50 rounded-lg h-48 flex items-center justify-center text-6xl">
                  {step.visual}
                </div>
              </div>

              {/* content */}
              <div className="flex-1">
                <div className="text-sm font-bold text-blue-600 mb-2">
                  STEP {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
