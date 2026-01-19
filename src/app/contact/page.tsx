import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started - Contact Xenbird",
  description:
    "Ready to launch your eCommerce store? Get in touch with Xenbird and start your journey today.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Get Started with Xenbird
        </h1>
        <p className="text-xl text-muted text-center max-w-3xl mx-auto">
          Let's launch your eCommerce store together
        </p>
      </div>
    </div>
  );
}
