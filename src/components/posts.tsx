"use client";

const Posts = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-6 block">
              Latest Updates
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.9] mb-8">
              Newsletters
            </h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          {/* Placeholder Content */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
                Stay updated with our latest insights, educational trends, and
                company news. Discover how we're shaping the future of education
                through innovation and collaboration.
              </p>

              <div className="border border-gray-200 p-16">
                <div className="text-gray-400 text-lg font-light">
                  Posts content coming soon...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
