import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface GalleryCardProps {
  emoji: string;
  title: string;
  description: string;
  bgClass: string;
  delay: number;
  imageSrc?: string;
  imageAlt?: string;
  onClick?: () => void;
}

function GalleryCard({ emoji, title, description, bgClass, delay, imageSrc, imageAlt, onClick }: GalleryCardProps): JSX.Element {
  const hasImage = Boolean(imageSrc);

  return (
    <div
      className={`${bgClass} rounded-2xl overflow-hidden group cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="relative h-48 overflow-hidden">
        {hasImage ? (
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="relative flex items-center justify-center h-full">
            <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
              {emoji}
            </span>
          </div>
        )}

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
    imageSrc: '/images/gallery-front.jpg',
    imageAlt: 'Tampak depan Warung Oman',
  },
  {
    emoji: '🛒',
    title: 'Rak Sembako Lengkap',
    description: 'Berbagai kebutuhan pokok tersedia lengkap',
    bgClass: 'bg-gradient-to-br from-yellow-100 to-orange-200',
    delay: 100,
    imageSrc: '/images/gallery-shelf.jpg',
    imageAlt: 'Rak sembako lengkap di Warung Oman',
  },
  {
    emoji: '📱',
    title: 'Layanan Digital',
    description: 'Proses top up dan pembayaran yang cepat',
    bgClass: 'bg-gradient-to-br from-blue-100 to-indigo-200',
    delay: 200,
    imageSrc: '/images/gallery-digital.png',
    imageAlt: 'Layanan digital Warung Oman',
  },
  {
    emoji: '📲',
    title: 'QRIS Payment',
    description: 'Pembayaran mudah dengan scan QR code',
    bgClass: 'bg-gradient-to-br from-purple-100 to-pink-200',
    delay: 300,
    // imageSrc: '/images/gallery-qris.jpg',
    // imageAlt: 'Pembayaran QRIS di Warung Oman',
  },
  {
    emoji: '🤝',
    title: 'Pelayanan Ramah',
    description: 'Selalu siap melayani dengan senyum',
    bgClass: 'bg-gradient-to-br from-teal-100 to-cyan-200',
    delay: 400,
    // imageSrc: '/images/gallery-service.jpg',
    // imageAlt: 'Pelayanan ramah Warung Oman',
  },
  {
    emoji: '⚡',
    title: 'Bayar Tagihan Listrik',
    description: 'Proses cepat, langsung di tempat',
    bgClass: 'bg-gradient-to-br from-red-100 to-rose-200',
    delay: 500,
    // imageSrc: '/images/gallery-bills.jpg',
    // imageAlt: 'Bayar tagihan listrik di Warung Oman',
  },
];

export function GallerySection(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<GalleryCardProps | null>(null);

  const closePopup = (): void => setSelectedItem(null);
  const handleCardClick = (item: GalleryCardProps) => (): void => setSelectedItem(item);

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
            <GalleryCard key={item.title} {...item} onClick={handleCardClick(item)} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            📸 Foto nyata menyusul — hubungi kami untuk informasi lebih lanjut
          </p>
        </div>
      </div>

      {selectedItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="absolute inset-0" onClick={closePopup} />
          <div className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-white shadow-2xl">
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-700 shadow-sm transition hover:bg-white"
            >
              ❌
            </button>
            {selectedItem.imageSrc ? (
              <img
                src={selectedItem.imageSrc}
                alt={selectedItem.imageAlt ?? selectedItem.title}
                className="w-full max-h-[65vh] object-contain bg-black"
              />
            ) : (
              <div className="flex h-[65vh] items-center justify-center bg-slate-100 text-6xl text-slate-700">
                {selectedItem.emoji}
              </div>
            )}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">{selectedItem.title}</h3>
              <p className="mt-3 text-gray-600">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </SectionWrapper>
  );
}
