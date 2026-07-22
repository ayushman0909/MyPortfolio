import { motion } from "framer-motion";
import Container from "../UI/Container";
import SectionHeading from "../UI/SectionHeading";
import { contactInfo } from "../../data/contactData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0F172A] py-28"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <Container>
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Amazing"
          subtitle="Have a project idea or want to work together? Feel free to reach out."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-blue-500"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                    <Icon />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      {item.title}
                    </p>

                    <h4 className="text-lg font-semibold text-white">
                      {item.value}
                    </h4>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none focus:border-blue-500"
              />

              <button
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-500"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;