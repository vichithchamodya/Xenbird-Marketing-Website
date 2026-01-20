import { PROCESS_FLOW } from "@/lib/constants";

export default function ProcessFlow() {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Step-by-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From demo selection to launch, here's how we help you get online
            fast
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {PROCESS_FLOW.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* visual */}
              <div className="shrink-0 w-full md:w-1/3">
                <div className="bg-blue-50 rounded-lg h-48 flex items-center justify-center text-6xl">
                  {step.visual}
                </div>
              </div>

              {/* content */}
              <div className="flex-1">
                <div className="text-sm font-bold text-blue-600 mb-2">
                  STEP {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
