"use client";

import { getImagePath } from "../../lib/image-path";

const Partners = () => {
  const partners = [
    { name: "Dogus", logo: getImagePath("/partners/dogus.png") },
    { name: "ISKU", logo: getImagePath("/partners/isku.png") },
    { name: "Matata", logo: getImagePath("/partners/matata.png") },
    { name: "Mozaik", logo: getImagePath("/partners/mozaik.png") },
    { name: "PHYWE", logo: getImagePath("/partners/phywe.png") },
    { name: "RoboBlockly", logo: getImagePath("/partners/robobloq.png") },
    { name: "Robolink", logo: getImagePath("/partners/robolink.avif") },
    { name: "Samsung", logo: getImagePath("/partners/samsung.png") },
    { name: "PASCO", logo: getImagePath("/partners/pasco.png") },
    { name: "Dr.Web", logo: getImagePath("/partners/drweb.png") },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-6 block">
              Trusted Partnerships
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.9] mb-8">
              Our Partners
            </h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="aspect-square border border-gray-200 flex items-center justify-center p-8 group hover:bg-gray-50 transition-colors duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Partnership Description */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                We collaborate with leading educational technology companies and
                equipment manufacturers to provide schools with the most
                innovative and effective solutions. Our partnerships enable us
                to offer comprehensive educational ecosystems that enhance
                learning outcomes and prepare students for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
