import { motion } from "framer-motion";

const SectionHeading = ({ badge, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {/* Badge */}
      <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
        {badge}
      </span>

      {/* Title */}
      <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-8">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeading;