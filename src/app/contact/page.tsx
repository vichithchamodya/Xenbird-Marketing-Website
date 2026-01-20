import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Xenbird",
  description:
    "Ready to launch your eCommerce website? Get in touch with us. No commitment required, just a conversation about your needs.",
};

export default function ContactPage() {
  return (
    <>
      {/* page header */}
      <section className="bg-linear-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Your eCommerce Website
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Tell us about your business and we'll help you get started
          </p>
          <p className="text-lg text-gray-700">
            No commitment required. Just a conversation about your needs.
          </p>
        </div>
      </section>

      {/* contact form */}
      <ContactForm />

      {/* contact info */}
      <ContactInfo />
    </>
  );
}
