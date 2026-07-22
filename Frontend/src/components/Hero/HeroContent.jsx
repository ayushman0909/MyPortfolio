import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Welcome Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        <span className="text-sm font-medium text-blue-300">
          Available for Freelance
        </span>
      </div>

      {/* Heading */}
      <div>
        <h2 className="text-2xl text-gray-300 mb-2">
          Hi, I'm
        </h2>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-white">Ayushman</span>{" "}
          <span className="text-blue-500">Verma</span>
        </h1>
      </div>

      {/* Typing Effect */}
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">
        <Typewriter
          words={[
            "MERN Stack Developer",
            "React.js Developer",
            "Frontend Engineer",
            "Freelancer",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
        />
      </h3>

      {/* Description */}
      <p className="max-w-xl text-gray-400 leading-8 text-lg">
        I build fast, scalable and modern web applications using React,
        Node.js, Express.js and MongoDB. My focus is creating beautiful UI,
        clean architecture and high-performance applications.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-5">
        <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500 shadow-lg shadow-blue-500/30">
          Hire Me
        </button>

        <button className="rounded-full border border-blue-500 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500/20">
          View Projects
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 pt-2">
        <a
          href="#"
          className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          className="rounded-full border border-white/10 bg-white/5 p-4 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
};

export default HeroContent;