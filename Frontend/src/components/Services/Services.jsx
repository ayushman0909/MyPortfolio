import { motion } from "framer-motion";

import Container from "../UI/Container";
import SectionHeading from "../UI/SectionHeading";

import { services } from "../../data/servicesData";

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0F172A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-green-500/10 blur-[140px]" />

      <Container>
        <SectionHeading
          badge="Services"
          title="What Can I Do For You?"
          subtitle="I build high-quality websites and web applications that are modern, responsive, scalable and performance-focused."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400 transition duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;