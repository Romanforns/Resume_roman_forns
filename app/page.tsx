import { Hero } from '@/components/sections/Hero';
import { PipelineSection } from '@/components/sections/PipelineSection';
import { Services } from '@/components/sections/Services';
import { Connect } from '@/components/sections/Connect';
import { getCV } from '@/lib/content';

export default function HomePage() {
  const cv = getCV();
  return (
    <>
      <Hero cv={cv} />
      <PipelineSection cv={cv} />
      <Services />
      <Connect />
    </>
  );
}
