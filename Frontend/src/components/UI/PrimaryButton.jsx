import { motion } from "framer-motion";

const PrimaryButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
      rounded-full
      bg-blue-600
      px-8
      py-4
      font-semibold
      text-white
      shadow-lg
      shadow-blue-500/30
      transition-all
      hover:bg-blue-500
      "
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;