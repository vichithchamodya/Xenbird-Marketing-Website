import { CURRENT_FOCUS } from "@/lib/constants";

export default function CurrentFocus() {
  const focuses = [
    {
      icon: "🎯",
      title: "Expanding Demo Library",
      description:
        "Adding more industry specific demos and variations to cover even more business types and niches.",
    },
    {
      icon: "⚡",
      title: "Improving Customization Speed",
      description:
        "Streamlining our process to deliver customized websites even faster without compromising quality.",
    },
    {
      icon: "🛠️",
      title: "Enhancing Admin Features",
      description:
        "Continuously improving our admin dashboard based on customer feedback and emerging needs.",
    },
    {
      icon: "🤝",
      title: "Better Integration Options",
      description:
        "Adding seamless integrations with popular tools like payment gateways, shipping providers, and marketing platforms.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We're Focused on Now
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our current priorities for making Xenbird better every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CURRENT_FOCUS.map((focus, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-lg border border-blue-100"
            >
              <div className="text-5xl mb-4">{focus.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {focus.title}
              </h3>
              <p className="text-gray-700">{focus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
