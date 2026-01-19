export default function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Speed That Makes a Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare traditional development timelines with Xenbird's approach
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Traditional Development */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Traditional Development
            </h3>
            <div className="relative">
              <div className="bg-red-100 rounded-lg p-6">
                <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                  <span>Start</span>
                  <span className="font-bold text-red-600">3-6 Months</span>
                </div>
                <div className="h-4 bg-red-300 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-red-400 to-red-600"></div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>• Finding developers or agency</p>
                  <p>• Requirements gathering</p>
                  <p>• Design and revisions</p>
                  <p>• Development and testing</p>
                  <p>• Multiple feedback rounds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Xenbird */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              With Xenbird
            </h3>
            <div className="relative">
              <div className="bg-green-100 rounded-lg p-6">
                <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                  <span>Start</span>
                  <span className="font-bold text-green-600">5-7 Days</span>
                </div>
                <div className="h-4 bg-green-300 rounded-full relative overflow-hidden w-1/6">
                  <div className="absolute inset-0 bg-linear-to-r from-green-400 to-green-600"></div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>• Browse demos (Day 1)</p>
                  <p>• Share requirements (Day 1-2)</p>
                  <p>• We customize (Day 2-5)</p>
                  <p>• Review & launch (Day 6-7)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Difference */}
          <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
            <p className="text-2xl font-bold text-blue-600 mb-2">
              10x Faster Launch
            </p>
            <p className="text-gray-700">
              Start selling while others are still planning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
