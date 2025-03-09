import AboutMeMain from "./components/AboutMeSection/AboutMeMain";
import ExpMain from "./components/ExperienceSection/ExpMain";
import HeroGradient from "./components/HeroSection/HeroGradient";
import HeroMain from "./components/HeroSection/HeroMain";
import SubHeroSection from "./components/HeroSection/SubHeroSection";
import MySkillMain from "./components/MySkillSection/MySkillMain";
import SubSkills from "./components/MySkillSection/SubSkills";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectMain from "./components/ProjectSection/ProjectMain";
import ContactMain from "./components/ContactSection/ContactMain";
import FooterMain from "./components/Footer/FooterMain";
import HelperSection from "./components/navbar/HelperSection";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <MySkillMain />
      <SubSkills />
      <ExpMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
