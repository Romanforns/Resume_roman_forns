import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: { default: 'Roman Forns — Data Architect & BI Consultant', template: '%s | Roman Forns' },
  description:
    'Data Architect & Engineer. 10+ years in data solutions, BI, cloud pipelines (GCP, Azure, Snowflake, Fabric), enterprise integration (SAP, Salesforce).',
  authors: [{ name: 'Roman Forns', url: 'https://romanforns.com' }],
  openGraph: { type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-bg text-text antialiased font-sans`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
