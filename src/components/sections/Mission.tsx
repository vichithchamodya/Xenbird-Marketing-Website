export default function Mission() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            To democratize eCommerce by making custom, professional online
            stores accessible to every business—regardless of technical
            expertise or budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">
                Product, Not Service
              </h3>
              <p className="text-blue-100 text-sm">
                We build a scalable product, not an agency that charges by the
                hour
              </p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">
                Speed Matters
              </h3>
              <p className="text-blue-100 text-sm">
                Launch in days so you can start selling while others are still
                planning
              </p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">
                Empower Non-Technical Founders
              </h3>
              <p className="text-blue-100 text-sm">
                You focus on your business, we handle all the technical
                complexity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
