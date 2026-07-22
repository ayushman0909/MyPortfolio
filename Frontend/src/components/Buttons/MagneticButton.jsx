import { motion } from "framer-motion";

const MagneticButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-xl shadow-blue-500/30"
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;