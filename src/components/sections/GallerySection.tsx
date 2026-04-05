import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface GalleryCardProps {
  emoji: string;
  title: string;
  description: string;
  bgClass: string;
  delay: number;
}

function GalleryCard({ emoji, title, description, bgClass, delay }: GalleryCardProps): JSX.Element {
  return (
    <div
      className={`${bgClass} rounded-2xl overflow-hidden group cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 flex items-center justify-center">
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </span>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl flex items-end p-4 opacity-0 group-hover:opacity-100">
          <p className="text-white text-sm font-medium">{description}</p>
        </div>
      </div>
      <div className="p-4 bg-white/80 backdrop-blur-sm">
        <p className="font-semibold text-gray-800 text-sm">{title}</p>
      </div>
    </div>
  );
}

const GALLERY_ITEMS: GalleryCardProps[] = [
  {
    emoji: '🏪',
    title: 'Tampak Depan Warung',
    description: 'Warung Oman yang nyaman dan mudah ditemukan',
    bgClass: 'bg-gradient-to-br from-green-100 to-emerald-200',
    delay: 0,
  },
  {
    emoji: '🛒',
    title: 'Rak Sembako Lengkap',
    description: 'Berbagai kebutuhan pokok tersedia lengkap',
    bgClass: 'bg-gradient-to-br from-yellow-100 to-orange-200',
    delay: 100,
  },
  {
    emoji: '📱',
    title: 'Layanan Digital',
    description: 'Proses top up dan pembayaran yang cepat',
    bgClass: 'bg-gradient-to-br from-blue-100 to-indigo-200',
    delay: 200,
  },
  {
    emoji: '📲',
    title: 'QRIS Payment',
    description: 'Pembayaran mudah dengan scan QR code',
    bgClass: 'bg-gradient-to-br from-purple-100 to-pink-200',
    delay: 300,
  },
  {
    emoji: '🤝',
    title: 'Pelayanan Ramah',
    description: 'Selalu siap melayani dengan senyum',
    bgClass: 'bg-gradient-to-br from-teal-100 to-cyan-200',
    delay: 400,
  },
  {
    emoji: '⚡',
    title: 'Bayar Tagihan Listrik',
    description: 'Proses cepat, langsung di tempat',
    bgClass: 'bg-gradient-to-br from-red-100 to-rose-200',
    delay: 500,
  },
];

export function GallerySection(): JSX.Element {
  return (
    <SectionWrapper id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Galeri"
          title="Sekilas Warung Oman"
          subtitle="Lihat suasana warung dan layanan yang kami hadirkan untuk Anda setiap hari."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            📸 Foto nyata menyusul — hubungi kami untuk informasi lebih lanjut
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
