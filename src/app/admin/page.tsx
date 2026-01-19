import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard Overview - Xenbird',
  description: 'Manage your eCommerce store with Xenbird admin dashboard. Choose from Lite, Standard, Pro, and Enterprise tiers.',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Admin Dashboard Overview
        </h1>
        <p className="text-xl text-muted text-center max-w-3xl mx-auto">
          Powerful tools to manage your eCommerce operations
        </p>
      </div>
    </div>
  );
}
