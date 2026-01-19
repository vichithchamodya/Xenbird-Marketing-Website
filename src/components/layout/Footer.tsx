import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Xenbird</h3>
            <p className="text-sm">
              Launch custom eCommerce websites in days, not months.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/demos"
                  className="hover:text-white transition-colors"
                >
                  Explore Demos
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="hover:text-white transition-colors"
                >
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/vision"
                  className="hover:text-white transition-colors"
                >
                  Vision & Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* industries */}
          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/demos/fashion"
                  className="hover:text-white transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/demos/technology"
                  className="hover:text-white transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/demos/beauty"
                  className="hover:text-white transition-colors"
                >
                  Beauty & Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/demos"
                  className="hover:text-white transition-colors"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@xenbird.com"
                  className="hover:text-white transition-colors"
                >
                  contact@xenbird.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Xenbird. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
