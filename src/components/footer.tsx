"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <img
                    src="/logo.png"
                    alt="Pine Education"
                    className="h-12 w-auto mb-6 filter invert"
                  />
                  <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                    Transforming education through innovative solutions,
                    cutting-edge technology, and comprehensive teacher training
                    programs.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Address:</span> 123
                    Education Street, Innovation District, City, State 12345
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Phone:</span> +1
                    (555) 123-4567
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Email:</span>{" "}
                    info@pineeducation.com
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Our Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Blog & News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      School Equipment Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Teacher Training Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Educational Technology
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Curriculum Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Project Implementation
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* EdTech Solutions */}
            <div className="mt-16 pt-12 border-t border-gray-800">
              <h3 className="text-white font-bold text-lg mb-6">
                Integrated EdTech Solutions
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Intellektum
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Matatalab
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  IoT Board
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Nodistep
                </a>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="mt-16 pt-12 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-6">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-auto">
                  <h3 className="text-white font-bold text-lg mb-4">
                    Stay Updated
                  </h3>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-3 bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none flex-1 md:w-64"
                    />
                    <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Pine Education. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
