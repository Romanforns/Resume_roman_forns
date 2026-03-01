import { AboutContent } from '@/components/sections/AboutContent';

export const metadata = {
  title: 'About',
  description: 'About Roman Forns — principles, working style, tooling.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AboutContent />
    </div>
  );
}
