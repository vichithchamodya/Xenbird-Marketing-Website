export default function TrustSection() {
  const stats = [
    { number: "12+", label: "Industry Demos" },
    { number: "7", label: "Days to Launch" },
    { number: "100%", label: "Custom Coded" },
    { number: "0", label: "Technical Skills Required" },
  ];

  const testimonials = [
    {
      quote:
        "Xenbird helped us launch our online store in just 5 days. The demo-first approach made everything so clear.",
      author: "Sarah Chen",
      role: "Founder, Fashion Boutique",
    },
    {
      quote:
        "No templates, no compromises. They built exactly what we needed without the agency complexity.",
      author: "Michael Rodriguez",
      role: "Owner, Tech Gadgets Store",
    },
    {
      quote:
        "As a non-technical founder, I was amazed at how simple the process was. Highly recommended!",
      author: "Priya Sharma",
      role: "Entrepreneur, Wellness Brand",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
