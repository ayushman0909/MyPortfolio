import { motion } from "framer-motion";
import { FaCheckCircle, FaDownload } from "react-icons/fa";

const highlights = [
  "Clean & Maintainable Code",
  "Responsive UI Development",
  "REST API Integration",
  "Modern React Architecture",
];

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Small Heading */}
      <div>
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Who I Am
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
          Turning Ideas into
          <span className="text-blue-500"> Modern Web Experiences.</span>
        </h2>
      </div>

      {/* Paragraph */}
      <p className="text-gray-400 leading-8 text-lg">
        I'm a passionate <span className="text-white font-semibold">MERN Stack Developer</span> who enjoys building modern, fast and scalable web applications.
        I focus on writing clean code, creating responsive interfaces,
        and developing user-friendly digital experiences that solve
        real-world problems.
      </p>

      <p className="text-gray-400 leading-8 text-lg">
        My goal is not just to build websites, but to create products
        that are visually impressive, optimized for performance, and
        easy to maintain. I continuously learn new technologies and
        best practices to improve my development skills.
      </p>

      {/* Highlights */}
      <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 8 }}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
          >
            <FaCheckCircle className="text-green-400 text-lg" />

            <span className="text-gray-300">{item}</span>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-5 pt-2">
        <button className="flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 shadow-lg shadow-blue-500/30">
          <FaDownload />
          Download CV
        </button>

        <button className="rounded-full border border-blue-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500/20">
          Let's Talk
        </button>
      </div>
    </motion.div>
  );
};

export default AboutContent;