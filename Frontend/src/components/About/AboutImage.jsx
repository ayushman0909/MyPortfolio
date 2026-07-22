import { motion } from "framer-motion";
import aboutImage from "../../assets/images/profile.png";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* Image Container */}
      <div className="relative z-10">

        {/* Profile Image */}
        <img
          src={aboutImage}
          alt="Ayushman Verma"
          className="w-85 md:w-105 rounded-3xl border border-white/10 shadow-2xl"
        />

        {/* Experience Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute -bottom-8 -left-8"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-xl">

            <h2 className="text-4xl font-bold text-blue-400">
              1+
            </h2>

            <p className="text-gray-300 mt-2">
              Years Learning
            </p>

          </div>
        </motion.div>

        {/* Floating Card */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute -top-6 -right-6"
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-xl">

            <FaLaptopCode className="text-2xl text-green-400" />

            <div>
              <h4 className="font-semibold">
                MERN
              </h4>

              <p className="text-sm text-gray-400">
                Full Stack
              </p>
            </div>

          </div>
        </motion.div>

        {/* Bottom Card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="absolute top-1/2 -right-10"
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-xl">

            <FaCode className="text-blue-400 text-xl" />

            <span>Clean Code</span>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default AboutImage;