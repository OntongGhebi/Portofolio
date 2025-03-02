import AboutMeMain from "./components/AboutMeSection/AboutMeMain";
import HeroGradient from "./components/HeroSection/HeroGradient";
import HeroMain from "./components/HeroSection/HeroMain";
import SubHeroSection from "./components/HeroSection/SubHeroSection";
import MySkillMain from "./components/MySkillSection/MySkillMain";
import NavbarMain from "./components/navbar/NavbarMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <MySkillMain />
    </main>
  );
}

export default App;
