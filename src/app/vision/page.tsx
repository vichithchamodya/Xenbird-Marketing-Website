import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Roadmap - Xenbird",
  description:
    "Discover Xenbird's vision and roadmap. See what we're building and where we're heading.",
};

export default function VisionPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Vision & Roadmap
        </h1>
        <p className="text-xl text-muted text-center max-w-3xl mx-auto">
          Building the future of eCommerce website creation
        </p>
      </div>
    </div>
  );
}
