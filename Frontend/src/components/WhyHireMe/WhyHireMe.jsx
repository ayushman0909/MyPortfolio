import { motion } from "framer-motion";

import Container from "../UI/Container";
import SectionHeading from "../UI/SectionHeading";

import { whyHireData } from "../../data/whyHireData";

const WhyHireMe = () => {
  return (
    <section
      id="why-hire-me"
      className="relative overflow-hidden bg-[#0F172A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <Container>
        <SectionHeading
          badge="Why Hire Me"
          title="Why Clients Choose Me"
          subtitle="I focus on delivering high-quality, scalable and user-friendly solutions that create real business value."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyHireData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyHireMe;