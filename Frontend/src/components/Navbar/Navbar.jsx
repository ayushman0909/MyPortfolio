import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Services",
  "Contact",
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center"
    >
      <nav
        className={`mt-5 w-[95%] max-w-7xl transition-all duration-300 rounded-full
        ${
          isScrolled
            ? "py-3 bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-8">

          {/* Logo */}

          <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
            Ayushman<span className="text-blue-500">.</span>
          </h1>

          {/* Desktop */}

          <ul className="hidden md:flex gap-8 font-medium">

            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="text-blue-500"
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}

          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition">
            Hire Me
          </button>

          {/* Mobile */}

          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="md:hidden mt-5 px-8 pb-5"
            >
              <ul className="flex flex-col gap-5">

                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      onClick={() => setOpen(false)}
                      className="cursor-pointer hover:text-blue-500"
                    >
                      {item}
                    </Link>
                  </li>
                ))}

              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
};

export default Navbar;