import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Xenbird Works - Launch Your eCommerce Site in Days",
  description:
    "Discover how Xenbird helps you launch custom-coded eCommerce websites quickly. Experience demos first, customize confidently, and launch in days.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          How Xenbird Works
        </h1>
        <p className="text-xl text-muted text-center max-w-3xl mx-auto">
          Experience, customize, and launch your eCommerce store in days
        </p>
      </div>
    </div>
  );
}
