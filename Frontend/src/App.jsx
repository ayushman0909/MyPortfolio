import { useEffect, useState } from "react";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Cursor from "./components/Cursor/Cursor";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import WhyHireMe from "./components/WhyHireMe/WhyHireMe";
import Timeline from "./components/Timeline/Timeline";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      <Loader loading={loading} />

      {!loading && (
        <>
         {/* <Cursor /> */}
        <ScrollProgress />
          <Navbar />
          <Hero />
           <About />
           <Skills />
            <Projects />
            <Services />
            <WhyHireMe />
            <Timeline/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
      )}
    </>
  );
}

export default App;