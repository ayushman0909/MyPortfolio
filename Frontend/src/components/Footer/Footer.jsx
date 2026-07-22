import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0F172A]">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Ayushman<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              MERN Stack Developer focused on building modern,
              fast and responsive web applications with
              beautiful user experiences.
            </p>
          </div>

          {/* Center */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-center">
            © {year} Ayushman Verma. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-500 transition flex items-center justify-center"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;