import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBolt,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    number: "15+",
    title: "Projects Completed",
    icon: <FaLaptopCode />,
    color: "text-blue-400",
  },
  {
    id: 2,
    number: "100%",
    title: "Responsive Design",
    icon: <FaMobileAlt />,
    color: "text-green-400",
  },
  {
    id: 3,
    number: "95+",
    title: "Lighthouse Score",
    icon: <FaBolt />,
    color: "text-yellow-400",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
        >
          {/* Glow */}
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

          {/* Icon */}
          <div
            className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl ${item.color}`}
          >
            {item.icon}
          </div>

          {/* Number */}
          <h2 className={`text-5xl font-extrabold ${item.color}`}>
            {item.number}
          </h2>

          {/* Title */}
          <p className="mt-3 text-gray-400 text-lg">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;