"use client";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          src="https://www.youtube.com/embed/G5V4wBjR880?si=anG78VhEvbeWaFvW&start=18&autoplay=1&mute=1&loop=1&playlist=G5V4wBjR880&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1"
          className="w-full h-full border-0"
          style={{
            pointerEvents: "none",
            minWidth: "100%",
            minHeight: "100%",
          }}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={false}
        />
      </div>

      {/* Fallback Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900 to-purple-900 z-0"></div>

      {/* Dark Overlay for Tinting */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Hero Content - Container Width */}
      <div className="container mx-auto px-4">
        <div className="relative z-20 text-left w-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Innovative solutions in the fields of education, investment, and
            management
          </h1>

          <p className="text-lg md:text-xl text-gray-200 w-full leading-relaxed">
            We establish and advance high educational standards, offering
            services from analytics to delivery based on best global practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            {/* First CTA - Transparent with Border */}
            <button className="relative border-2 border-white bg-transparent hover:bg-transparent text-white px-8 py-4 rounded-full font-bold transition-all duration-200 overflow-hidden group">
              <span className="block transition-transform duration-300 group-hover:-translate-y-12">
                Find Your Solution / Projects
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                Find Your Solution / Projects
              </span>
            </button>

            {/* Second CTA - White Background */}
            <button className="relative bg-white hover:bg-white text-black px-8 py-4 rounded-full font-bold transition-colors duration-200 overflow-hidden group">
              <span className="block transition-transform duration-300 group-hover:-translate-y-12">
                Request Demo
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                Request Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
