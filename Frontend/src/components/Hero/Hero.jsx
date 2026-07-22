import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import Aurora from "../Background/Aurora";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center bg-[#0F172A]"
    >
      {/* Aurora Background */}
      <Aurora />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-24">

          {/* Left Side */}
          <HeroContent />

          {/* Right Side */}
          <HeroImage />

        </div>

        {/* Stats */}
        <HeroStats />

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-white"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;