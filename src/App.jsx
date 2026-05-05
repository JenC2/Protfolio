import NavBar from "./components/NavBar";
import AbilitiyCards from "./sections/AbilitiyCards";
import ExperienceSection from "./sections/ExperienceSection";
import Hero from "./sections/Hero";
import ProjectsSection from "./sections/ProjectsSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ProjectsSection />
      <AbilitiyCards />
      <ExperienceSection />
    </>
  );
};

export default App;
