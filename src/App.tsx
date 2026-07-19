import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { SEO } from '@/components/seo/SEO';
import { CONTACT_INFO } from '@/data';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Warung Oman',
  description:
    'Warung Oman menyediakan sembako lengkap, pembayaran tagihan, PPOB, top up e-wallet, dan QRIS di Subang, Jawa Barat.',
  url: 'https://warungoman.com',
  telephone: CONTACT_INFO.whatsappDisplay,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address,
    addressLocality: 'Subang',
    addressRegion: 'Jawa Barat',
    addressCountry: 'ID',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '07:00',
      closes: '19:00',
    },
  ],
  sameAs: ['https://wa.me/6288222177678'],
};

function App(): JSX.Element {
  return (
    <div className="min-h-screen font-sans antialiased">
      <SEO
        title="Sembako & Layanan Digital Terpercaya"
        description="Warung Oman adalah warung sembako dan layanan digital terpercaya di Subang, Jawa Barat. Temukan sembako lengkap, pembayaran tagihan, PPOB, top up e-wallet, dan QRIS."
        canonical="/"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
