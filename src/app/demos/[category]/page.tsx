export default function DemoCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {category.replace(/-/g, " ")} Demos
      </h1>
      <p className="text-lg text-gray-600">
        Explore our {category} eCommerce website demos.
      </p>
    </div>
  );
}
