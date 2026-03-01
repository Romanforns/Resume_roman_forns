import { CVPage } from '@/components/sections/CVPage';

export const metadata = {
  title: 'CV',
  description: 'Roman Forns — Professional CV: experience, skills, education, certifications.',
};

export default function CVRoute() {
  return (
    <div className="container mx-auto px-4 py-8 print:py-0">
      <CVPage />
    </div>
  );
}
