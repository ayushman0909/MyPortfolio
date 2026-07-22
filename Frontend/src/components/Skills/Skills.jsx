import { motion } from "framer-motion";
import Container from "../UI/Container";
import SectionHeading from "../UI/SectionHeading";
import { skillCategories } from "../../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#0F172A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <Container>
        <SectionHeading
          badge="My Skills"
          title="Technologies I Work With"
          subtitle="I build modern, scalable and responsive web applications using the latest technologies and industry best practices."
        />

        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-6 text-2xl font-bold text-white"
              >
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.5,
                      }}
                      whileHover={{
                        y: -10,
                        scale: 1.05,
                      }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col items-center justify-center shadow-xl"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition duration-500"></div>

                      {/* Icon */}
                      <Icon
                        className={`text-5xl ${skill.color} transition-transform duration-500 group-hover:rotate-12`}
                      />

                      {/* Name */}
                      <h4 className="mt-5 text-white font-semibold text-lg text-center">
                        {skill.name}
                      </h4>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;