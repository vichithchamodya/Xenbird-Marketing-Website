"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this a template or custom-coded?",
      answer:
        "Every website is 100% custom coded to match your exact requirements. We start with industry-specific demos as a foundation, then customize everything design, features, branding, and functionality specifically for your business. No generic templates.",
    },
    {
      question: "How customizable is my website?",
      answer:
        "Fully customizable. You can modify design elements, add or remove features, integrate specific tools, adjust layouts, and change anything to match your brand and business needs. If you can describe it, we can build it.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "We provide support after launch. You can request changes, updates, or additional features. Depending on the scope, some changes may be included in your package, while others may be quoted separately.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "Absolutely not. Xenbird is built for non technical founders and business owners. You focus on your business requirements, and we handle all the technical complexity. Our admin dashboard is also designed to be simple and intuitive.",
    },
    {
      question: "How is this different from Shopify or WooCommerce?",
      answer:
        "Shopify and WooCommerce are self service platforms where you configure everything yourself. Xenbird provides custom coded websites built specifically for your business. You get a tailored solution without the DIY complexity or limitations of platform templates.",
    },
    {
      question: "What's included in the admin dashboard?",
      answer:
        "Our admin dashboard includes order management, product management, customer management, analytics, inventory tracking, and more. We offer different tiers (Lite, Standard, Pro, Enterprise) based on your business size and needs.",
    },
    {
      question: "Can I see examples before committing?",
      answer:
        "Yes! That's our demo first approach. Browse all our industry zspecific demos, interact with them, and see exactly what you're getting before making any commitment.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="text-blue-600 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
