import TopBar from '@/components/nav/TopBar';
import HeroBlock from '@/components/hero/HeroBlock';
import EvaluationMap from '@/components/critic/EvaluationMap';
import PopulationGauge from '@/components/stats/PopulationGauge';
import PopulationTrend from '@/components/stats/PopulationTrend';
import UniquenessCompare from '@/components/diff/UniquenessCompare';
import GongjuByNumbers from '@/components/stats/GongjuByNumbers';
import DualLifeCalculator from '@/components/calc/DualLifeCalculator';
import KpiTable from '@/components/stats/KpiTable';
import RouteVisualizer from '@/components/brt/RouteVisualizer';
import LeafletMapSection from '@/components/brt/LeafletMapSection';
import PolicyDeck from '@/components/incentive/PolicyDeck';
import RoiBreakdown from '@/components/stats/RoiBreakdown';
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
        <EvaluationMap />
        <PopulationGauge />
        <PopulationTrend />
        <UniquenessCompare />
        <GongjuByNumbers />
        <DualLifeCalculator />
        <KpiTable />
        <RouteVisualizer />
        <LeafletMapSection />
        <PolicyDeck />
        <RoiBreakdown />
        <Roadmap2030 />
        <PolicyFaq />
        <InterestForm />
      </main>
      <ProposerNote />
      <SiteFooter />
    </>
  );
}
