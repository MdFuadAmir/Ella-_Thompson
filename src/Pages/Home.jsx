import About from "../Components/About";
import Contact from "../Components/Contact";
import CTA from "../Components/CTA";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Process from "../Components/Process";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Skills from "../Components/Skills";
import Testmonials from "../Components/Testmonials";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
            <Skills/>
            <Process/>
            <Testmonials/>
            <Experience/>
            <CTA/>
            <Contact/>
            <Footer/>

            
        </div>
    );
};

export default Home;