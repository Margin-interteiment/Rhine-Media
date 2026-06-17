import Layout from '../../components/Layout';
import { usePageTitle } from '../../hooks/usePageTitle';
import Hero from '../../components/sections/Hero';
import StatsBand from '../../components/sections/StatsBand';
import Verticals from '../../components/sections/Verticals';
import TrafficSources from '../../components/sections/TrafficSources';
import Partners from '../../components/sections/Partners';
import WhyUs from '../../components/sections/WhyUs';
import CallToAction from '../../components/sections/CallToAction';

export default function Home() {
  usePageTitle(
    'Rhine Media — Performance Media Buying Agency',
    'Rhine Media is a premium performance media buying agency. We buy traffic for Dating, Nutra, Gambling, Sweepstakes, iGaming and more — globally at scale.',
  );

  return (
    <Layout>
      <Hero />
      <StatsBand />
      <Verticals />
      <TrafficSources />
      <Partners />
      <WhyUs />
      <CallToAction />
    </Layout>
  );
}
