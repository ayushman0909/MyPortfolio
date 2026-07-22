import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const techCards = [
  {
    id: 1,
    icon: <FaReact />,
    text: "React.js",
    className: "-top-6 -left-10",
    color: "text-cyan-400",
    duration: 4,
  },
  {
    id: 2,
    icon: <FaNodeJs />,
    text: "Node.js",
    className: "top-16 -right-8",
    color: "text-green-500",
    duration: 3,
  },
  {
    id: 3,
    icon: <SiMongodb />,
    text: "MongoDB",
    className: "bottom-6 -left-8",
    color: "text-green-400",
    duration: 5,
  },
];

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center"
    >
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-[90px] scale-110"></div>

        {/* Animated Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-blue-500/30 scale-110"
        />

        {/* Image */}
        <img
          src={profile}
          alt="Ayushman Verma"
          className="relative z-10 h-85 w-85 md:h-107.5 md:w-107.5 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
        />

        {/* Floating Cards */}
        {techCards.map((card) => (
          <motion.div
            key={card.id}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: card.duration,
              repeat: Infinity,
            }}
            className={`absolute ${card.className} z-20`}
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-3 shadow-xl">
              <span className={`text-2xl ${card.color}`}>
                {card.icon}
              </span>

              <span className="font-medium">
                {card.text}
              </span>
            </div>
          </motion.div>
        ))}

        {/* GitHub Badge */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute -bottom-5 right-5"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-4 py-2 shadow-xl">
            <FaGithub className="text-xl" />
            <span className="text-sm">
              Open Source
            </span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HeroImage;