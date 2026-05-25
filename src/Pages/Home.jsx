import About from "../Components/About";
import Contact from "../Components/Contact";
import DesignPlayground from "../Components/DesignPlayground";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Process from "../Components/Process";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Skills from "../Components/Skills";
import Testmonials from "../Components/Testmonials";
import SEO from "../Utils/SEO";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="Ella Thompson | UI/UX Designer"
        description="Creative UI/UX designer crafting modern, user-friendly, and visually engaging digital experiences for web and mobile products."
      />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Skills />
      <Testmonials />
      <Experience />
      <DesignPlayground />
      <Contact />
    </div>
  );
};

export default Home;
