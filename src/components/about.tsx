"use client";

const About = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with Animation */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4 block">
                About Our Company
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
                Main
              </h2>
              <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="text-4xl font-bold text-black mb-2">17+</div>
                <div className="text-gray-600 font-medium">
                  Years of Experience
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="text-4xl font-bold text-black mb-2">500+</div>
                <div className="text-gray-600 font-medium">
                  Schools Equipped
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="text-4xl font-bold text-black mb-2">10K+</div>
                <div className="text-gray-600 font-medium">
                  Teachers Trained
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are a consulting company with 17 years of history,
                  specializing in the comprehensive equipping of schools and
                  professional development for educators. Our mission is to be a
                  vital part of the continuous advancement of education.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-3 h-3 bg-gray-600 rounded-full mr-3"></div>
                  Our Approach
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Since our founding, we have been assisting educational
                  institutions in implementing cutting-edge technologies,
                  methodologies, and equipment to make the learning process more
                  effective, interactive, and engaging.
                </p>
              </div>
            </div>

            {/* Right Column - Services */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h3>
                <div className="w-16 h-1 bg-black mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div className="group">
                  <div className="bg-black rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🏫</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">
                          School Equipment Consulting
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          From concept development to project implementation,
                          including the supply of modern equipment, furniture,
                          and digital solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-gray-800 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">👨‍🏫</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">
                          Teacher Training Consulting
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          Professional development programs, training sessions,
                          and master classes focused on mastering new teaching
                          methodologies and modern technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="text-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our extensive experience and deep understanding of the
                educational sector's needs allow us to offer individualized
                solutions that meet the highest standards. We are proud that our
                projects help schools become centers of innovation, and enable
                teachers to become true leaders of change in education.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-black">
                <p className="text-xl font-semibold text-gray-900 italic">
                  "We firmly believe that high-quality education starts with the
                  right environment and professionally prepared educators."
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our Values
              </h3>
              <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We first formulated these values when we started Pine. We did
                  this not for marketing purposes, but to describe how we aspire
                  to operate every day, and to list the principles we believe
                  are necessary to build the most effective and innovative
                  environment in school education.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  These values serve as our internal compass, guiding us daily
                  to realize our vision: to become the trusted partner for
                  schools striving for outstanding educational outcomes.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">🤝</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Respect
                    </h4>
                    <p className="text-sm text-gray-600">
                      Valuing every individual and their contributions
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">✨</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Honesty
                    </h4>
                    <p className="text-sm text-gray-600">
                      Transparency and integrity in all our actions
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">🎯</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Client-Orientation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Putting our clients' needs at the center
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">🌟</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Openness
                    </h4>
                    <p className="text-sm text-gray-600">
                      Embracing new ideas and perspectives
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">👥</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Team Spirit
                    </h4>
                    <p className="text-sm text-gray-600">
                      Working together towards common goals
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">🏢</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Corporate Culture
                    </h4>
                    <p className="text-sm text-gray-600">
                      Building a positive work environment
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">🔒</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Trust
                    </h4>
                    <p className="text-sm text-gray-600">
                      Building reliable partnerships
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">💡</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Innovation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Continuously improving and evolving
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">💪</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Healthy Lifestyle
                    </h4>
                    <p className="text-sm text-gray-600">
                      Promoting well-being and balance
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">🏆</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Meritocracy
                    </h4>
                    <p className="text-sm text-gray-600">
                      Recognizing and rewarding excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-black text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center">
                <span className="mr-2">Learn More About Our Services</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>

            <button className="group relative border-2 border-gray-900 bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <span className="relative flex items-center justify-center">
                <span className="mr-2">Contact Us Today</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  ✉
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
