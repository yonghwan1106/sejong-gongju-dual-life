import TopBar from '@/components/nav/TopBar';
import HeroBlock from '@/components/hero/HeroBlock';
import PopulationGauge from '@/components/stats/PopulationGauge';
import PopulationTrend from '@/components/stats/PopulationTrend';
import UniquenessCompare from '@/components/diff/UniquenessCompare';
import GongjuByNumbers from '@/components/stats/GongjuByNumbers';
import DualLifeCalculator from '@/components/calc/DualLifeCalculator';
import RouteVisualizer from '@/components/brt/RouteVisualizer';
import LeafletMapSection from '@/components/brt/LeafletMapSection';
import PolicyDeck from '@/components/incentive/PolicyDeck';
import Roadmap2030 from '@/components/vision/Roadmap2030';
import PolicyFaq from '@/components/faq/PolicyFaq';
import InterestForm from '@/components/apply/InterestForm';
import ProposerNote from '@/components/intro/ProposerNote';
import SiteFooter from '@/components/footer/SiteFooter';

export default function Home() {
  return (
    <>
      <TopBar />
      <main id="main" className="flex-1">
        <HeroBlock />
        <PopulationGauge />
        <PopulationTrend />
        <UniquenessCompare />
        <GongjuByNumbers />
        <DualLifeCalculator />
        <RouteVisualizer />
        <LeafletMapSection />
        <PolicyDeck />
        <Roadmap2030 />
        <PolicyFaq />
        <InterestForm />
      </main>
      <ProposerNote />
      <SiteFooter />
    </>
  );
}
