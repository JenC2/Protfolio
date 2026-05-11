import NavBar from "./components/NavBar";
import AbilitiyCards from "./sections/AbilitiyCards";
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ProjectsSection from "./sections/ProjectsSection";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ProjectsSection />
      <AbilitiyCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
