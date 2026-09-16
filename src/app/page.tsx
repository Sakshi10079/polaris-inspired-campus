import HeroSection from "@/components/home/HeroSection";
import NewAgeEngineering from "@/components/home/NewAgeEngineering";
import GlobalFund from "@/components/home/GlobalFund";
import Specialisations from "@/components/home/Specialisations";
import TrackQuiz from "@/components/home/TrackQuiz";
import Internships from "@/components/home/Internships";
import CampusGlobalTech from "@/components/home/CampusGlobalTech";
import VisionTechLeaders from "@/components/home/VisionTechLeaders";
import RealOutcomes from "@/components/home/RealOutcomes";
import PolarisFounders from "@/components/home/PolarisFounders";
import SiliconValley from "@/components/home/SiliconValley";
import PolarisInTheNews from "@/components/home/PolarisInTheNews";
import TheDecision from "@/components/home/TheDecision";
import LifeAtPolaris from "@/components/home/LifeAtPolaris";
import HearItFromStudents from "@/components/home/HearItFromStudents";
import ScholarshipCTA from "@/components/home/ScholarshipCTA";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <NewAgeEngineering/>
      <GlobalFund/>
      <Specialisations/>
      <TrackQuiz/>
      <Internships/>
      <CampusGlobalTech />
      <VisionTechLeaders/>
      <RealOutcomes/>
      <PolarisFounders/>
      <SiliconValley />
      <PolarisInTheNews />
      <TheDecision />
      <LifeAtPolaris />
      <HearItFromStudents/>
      <ScholarshipCTA />
      <FAQ />
      <Footer />
    </main>
  );
}