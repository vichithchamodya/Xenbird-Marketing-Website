"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    industry: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! (This will be connected to backend later)");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            {/* business type */}
            <div>
              <label
                htmlFor="businessType"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Business Type *
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select your business type</option>
                <option value="startup">Startup</option>
                <option value="small-business">Small Business</option>
                <option value="medium-business">Medium Business</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            {/* industry */}
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select your industry</option>
                <option value="fashion">Fashion</option>
                <option value="technology">Technology</option>
                <option value="beauty">Beauty</option>
                <option value="wellness">Wellness</option>
                <option value="sports">Sports</option>
                <option value="jewellery">Jewellery</option>
                <option value="appliances">Appliances</option>
                <option value="construction">Construction</option>
                <option value="horology">Horology</option>
                <option value="food">Food</option>
                <option value="realty">Realty</option>
                <option value="automotive">Automotive</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Tell Us About Your Project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Describe your business and what you're looking for..."
              />
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Request
            </button>

            <p className="text-sm text-gray-600 text-center">
              * Form submission will be connected to backend later
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
