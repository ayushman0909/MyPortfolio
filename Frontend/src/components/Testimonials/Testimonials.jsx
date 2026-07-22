import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import Container from "../UI/Container";
import SectionHeading from "../UI/SectionHeading";
import { testimonials } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#0F172A] py-28 relative overflow-hidden"
    >
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What People Say"
          subtitle="Replace these placeholder reviews with real client feedback as you complete projects."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <FaQuoteLeft className="text-4xl text-blue-400 opacity-60" />

              <p className="mt-6 leading-8 text-gray-400">
                {item.review}
              </p>

              <div className="mt-8 flex text-yellow-400 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;