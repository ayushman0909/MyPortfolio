import { motion } from "framer-motion";

const blobs = [
  {
    size: "w-[550px] h-[550px]",
    color: "bg-blue-500/25",
    top: "-top-24",
    left: "-left-24",
    duration: 12,
  },
  {
    size: "w-[450px] h-[450px]",
    color: "bg-green-500/20",
    top: "bottom-0",
    left: "right-0",
    duration: 15,
  },
  {
    size: "w-[350px] h-[350px]",
    color: "bg-cyan-400/15",
    top: "top-1/2",
    left: "left-1/2",
    duration: 18,
  },
];

const Aurora = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[140px] ${blob.size} ${blob.color} ${blob.top} ${blob.left}`}
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Aurora;