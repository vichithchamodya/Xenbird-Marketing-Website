import Link from "next/link";

interface DemoCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  demoUrl?: string;
  features?: string[];
}

export default function DemoCard({
  title,
  description,
  thumbnail,
  demoUrl = "#",
  features = [],
}: DemoCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      {/* thumbnail */}
      <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">Demo Preview</span>
        )}
      </div>

      {/* content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* features */}
        {features.length > 0 && (
          <ul className="space-y-1 mb-4 text-sm text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* cta button */}
        <Link
          href={demoUrl}
          className="inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View Demo
        </Link>
      </div>
    </div>
  );
}
