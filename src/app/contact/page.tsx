import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
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

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info */}
      <ContactInfo />
    </>
  );
}
