import { SERVICES } from '@/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps): JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-white rounded-2xl p-6 shadow-card border border-gray-100',
        'hover:border-primary-200 hover:shadow-soft hover:-translate-y-1',
        'transition-all duration-300 cursor-default'
      )}
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5',
          'group-hover:scale-110 transition-transform duration-300',
          service.bgColor
        )}
      >
        {service.icon}
      </div>

      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

      {/* Bottom accent */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className={cn('text-xs font-semibold', service.color)}>Tersedia ✓</span>
        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">Proses Cepat</span>
      </div>
    </div>
  );
}

export function ServicesSection(): JSX.Element {
  return (
    <SectionWrapper id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Layanan Kami"
          title="Semua Kebutuhan Ada di Sini"
          subtitle="Dari kebutuhan pokok hingga layanan digital modern — kami hadir lengkap untuk memudahkan kehidupan sehari-hari Anda."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary-50 border border-primary-200 rounded-2xl px-6 py-4">
            <span className="text-2xl">💡</span>
            <p className="text-primary-800 text-sm">
              <strong>Ada pertanyaan tentang layanan kami?</strong>{' '}
              <button
                onClick={() => {
                  const wa = `https://wa.me/6281234567890?text=${encodeURIComponent('Halo Warung Oman, saya ingin bertanya tentang layanan yang tersedia.')}`;
                  window.open(wa, '_blank', 'noopener,noreferrer');
                }}
                className="text-primary-600 font-bold underline underline-offset-2 hover:text-primary-800 transition-colors"
              >
                Hubungi kami via WhatsApp
              </button>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
