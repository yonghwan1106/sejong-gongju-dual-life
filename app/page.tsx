import TopBar from '@/components/nav/TopBar';
import HeroBlock from '@/components/hero/HeroBlock';
import PopulationGauge from '@/components/stats/PopulationGauge';
import DualLifeCalculator from '@/components/calc/DualLifeCalculator';
import RouteVisualizer from '@/components/brt/RouteVisualizer';
import PolicyDeck from '@/components/incentive/PolicyDeck';
import InterestForm from '@/components/apply/InterestForm';
import SiteFooter from '@/components/footer/SiteFooter';

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex-1">
        <HeroBlock />
        <PopulationGauge />
        <DualLifeCalculator />
        <RouteVisualizer />
        <PolicyDeck />
        <InterestForm />
      </main>
      <SiteFooter />
    </>
  );
}
