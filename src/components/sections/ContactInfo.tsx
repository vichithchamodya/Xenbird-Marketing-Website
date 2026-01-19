export default function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-gray-600">
              Prefer to connect differently? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email Us
              </h3>
              <a
                href="mailto:hello@xenbird.com"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                hello@xenbird.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">Coming Soon</p>
            </div>

            {/* Social */}
            <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Follow Us
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">Twitter</p>
                <p className="text-gray-600">LinkedIn</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Response Time
            </h3>
            <p className="text-gray-700">
              We typically respond within 24 hours during business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
