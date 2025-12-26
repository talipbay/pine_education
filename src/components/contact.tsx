"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.9] mb-8">
              Contact Us
            </h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">
                Let's Start a Conversation
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
                Ready to transform your educational environment? We're here to
                help you create innovative learning spaces that inspire and
                engage students.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Office Address
                  </h4>
                  <p className="text-gray-600">
                    123 Education Street
                    <br />
                    Innovation District
                    <br />
                    City, State 12345
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Contact Information
                  </h4>
                  <p className="text-gray-600">
                    Phone: +1 (555) 123-4567
                    <br />
                    Email: info@pineeducation.com
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Business Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your project or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-8 font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
