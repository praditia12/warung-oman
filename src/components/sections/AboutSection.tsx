import { FEATURES } from '@/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useInView } from '@/hooks/useInView';
import type { FeatureItem } from '@/types';

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps): JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card border border-gray-100 hover:border-primary-200 hover:shadow-soft transition-all duration-300"
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
        {feature.icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}

export function AboutSection(): JSX.Element {
  return (
    <SectionWrapper id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <SectionHeading
              badge="Tentang Kami"
              title="Lebih dari Sekadar Warung Biasa"
              centered={false}
            />

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">Warung Oman</strong> telah berdiri sejak tahun
                2013, melayani warga sekitar dengan penuh keikhlasan dan semangat. Berawal dari
                warung sembako sederhana, kini kami telah berkembang menjadi pusat layanan
                kebutuhan harian dan transaksi digital yang lengkap.
              </p>
              <p>
                Kami percaya bahwa warung bukan hanya tempat belanja — tapi juga ruang silaturahmi
                dan sumber kemudahan bagi masyarakat. Itulah mengapa kami terus berinovasi
                menghadirkan layanan digital yang memudahkan hidup Anda sehari-hari.
              </p>
              <p>
                Dengan pengalaman lebih dari <strong className="text-primary-700">10 tahun</strong>,
                kepercayaan pelanggan adalah amanah yang selalu kami jaga. Harga jujur, pelayanan
                ramah, dan proses cepat menjadi komitmen kami untuk Anda.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold font-display text-primary-600">2013</p>
                <p className="text-sm text-gray-500">Berdiri</p>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-teal-300 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full" />
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold font-display text-teal-600">2024</p>
                <p className="text-sm text-gray-500">Kini</p>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}

            {/* Trust badge */}
            <div className="sm:col-span-2 bg-gradient-to-r from-primary-600 to-teal-600 rounded-2xl p-5 text-white flex items-center gap-4">
              <span className="text-4xl">🤝</span>
              <div>
                <p className="font-bold text-lg">Dipercaya Ribuan Pelanggan</p>
                <p className="text-primary-100 text-sm">
                  Bergabunglah bersama keluarga besar pelanggan setia Warung Oman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
