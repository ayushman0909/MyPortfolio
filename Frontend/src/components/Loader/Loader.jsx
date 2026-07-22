import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0F172A]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
            },
          }}
        >
          <div className="relative">

            {/* Outer Ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="w-24 h-24 rounded-full border-4 border-blue-500 border-t-transparent"
            />

            {/* Inner Ring */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
              }}
              className="absolute inset-3 rounded-full border-4 border-green-400 border-b-transparent"
            />

            <h2 className="absolute inset-0 flex items-center justify-center font-bold text-xl">
              AV
            </h2>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;