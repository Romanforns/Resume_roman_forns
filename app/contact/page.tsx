import { ContactContent } from '@/components/sections/ContactContent';

export const metadata = {
  title: 'Contact',
  description: 'Contact Roman Forns — email, LinkedIn, scheduling.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ContactContent />
    </div>
  );
}
