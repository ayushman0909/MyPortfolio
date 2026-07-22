import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-9999 shadow-[0_0_20px_#3B82F6]"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg,#3B82F6,#06B6D4,#22C55E)",
      }}
    />
  );
};

export default ScrollProgress;
