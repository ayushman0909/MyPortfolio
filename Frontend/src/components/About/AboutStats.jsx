import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    value: "1+",
    title: "Years Learning",
    color: "text-blue-400",
  },
  {
    id: 2,
    icon: <FaProjectDiagram />,
    value: "15+",
    title: "Projects Built",
    color: "text-green-400",
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    value: "100%",
    title: "Responsive Design",
    color: "text-cyan-400",
  },
  {
    id: 4,
    icon: <FaCode />,
    value: "MERN",
    title: "Full Stack",
    color: "text-purple-400",
  },
];

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
      {stats.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
          }}
          whileHover={{
            y: -10,
            scale: 1.04,
          }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-xl"
        >
          {/* Glow */}
          <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl"></div>

          {/* Icon */}
          <div
            className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl ${item.color}`}
          >
            {item.icon}
          </div>

          {/* Value */}
          <h3 className={`mt-5 text-4xl font-extrabold ${item.color}`}>
            {item.value}
          </h3>

          {/* Title */}
          <p className="mt-2 text-gray-400">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutStats;