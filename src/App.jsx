import { Navbar } from "./components/layout/Navbar";
import { BackToTop, ScrollProgress } from "./components/layout/PageControls";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { NAV_ITEMS } from "./data/portfolio";
import { usePageNavigation } from "./hooks/usePageNavigation";

const GLOBAL_STYLES = `
  @keyframes fadeInDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes sheen { 0%, 100% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } }
  @keyframes floatSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  html { scroll-behavior: smooth; }
  a:focus-visible, button:focus-visible {
    outline: 2px solid #4338CA;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export default function App() {
  const { activeSection, progress, scrolled, showTop } =
    usePageNavigation(NAV_ITEMS);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#14181D]">
      <style>{GLOBAL_STYLES}</style>
      <ScrollProgress progress={progress} />
      <Navbar activeSection={activeSection} scrolled={scrolled} />
      <HeroSection />
      <div className="max-w-3xl mx-auto px-6">
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
      <BackToTop visible={showTop} />
    </div>
  );
}
