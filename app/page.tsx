import { Hero } from '@/components/sections/Hero';
import { ProofRow } from '@/components/sections/ProofRow';
import { Stats } from '@/components/sections/Stats';
import { RecentWork } from '@/components/sections/RecentWork';
import { Services } from '@/components/sections/Services';
import { Connect } from '@/components/sections/Connect';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofRow />
      <Stats />
      <RecentWork />
      <Services />
      <Connect />
    </>
  );
}
