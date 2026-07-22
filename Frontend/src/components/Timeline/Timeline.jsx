import { motion } from "framer-motion";
import Container from "../UI/Container";
import SectionHeading from "../UI/SectionHeading";
import { timelineData } from "../../data/timelineData";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="relative bg-[#0F172A] py-28 overflow-hidden"
    >
      <Container>
        <SectionHeading
          badge="Experience"
          title="My Learning Journey"
          subtitle="A timeline of my growth from learning web fundamentals to building full-stack applications."
        />

        <div className="relative max-w-5xl mx-auto">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-white/10 lg:block" />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative mb-14 flex w-full ${
                  isLeft ? "lg:justify-start" : "lg:justify-end"
                } justify-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-blue-500 ring-8 ring-blue-500/20 lg:block" />

                <div className="w-full lg:w-[45%] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
                    <Icon />
                  </div>

                  <span className="text-sm font-semibold text-blue-400">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;