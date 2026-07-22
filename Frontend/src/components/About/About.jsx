import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";

import Container from "../UI/Container";
import SectionHeading from "../UI/SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-[#0F172A] relative overflow-hidden"
    >
      <Container>

        <SectionHeading
          badge="About Me"
          title="Passionate MERN Stack Developer"
          subtitle="I enjoy building modern, responsive and scalable web applications with clean code and beautiful user experiences."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <AboutImage />

          {/* Right */}
          <AboutContent />

        </div>

        <AboutStats />

      </Container>
    </section>
  );
};

export default About;