import { getAllCaseStudies } from '@/lib/content';
import { WorkListing } from '@/components/sections/WorkListing';

export const metadata = {
  title: 'Work',
  description: 'Case studies and projects — Data platforms, BI, integration, blockchain analytics.',
};

export default function WorkPage() {
  const studies = getAllCaseStudies();
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-heading mb-8">Work & Case Studies</h1>
      <WorkListing studies={studies} />
    </div>
  );
}
