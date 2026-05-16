import { CONTACT_INFO } from '@/data';
import { scrollToSection, openWhatsApp } from '@/utils';

const STATS = [
  { value: '15+', label: 'Tahun Pengalaman' },
  { value: '1000+', label: 'Pelanggan Puas' },
  { value: '6', label: 'Jenis Layanan' },
  { value: '7', label: 'Hari Buka' },
] as const;

export function HeroSection(): JSX.Element {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-teal-800 md:pt-16"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-primary-200 border border-white/20 mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse-slow" />
              Buka Hari Ini · Melayani Sejak 2010
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Warung Terpercaya{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-teal-300">
                untuk Kebutuhan
              </span>{' '}
              Harian Anda
            </h1>

            <p className="text-lg text-primary-100/80 leading-relaxed mb-8 max-w-xl">
              Dari sembako lengkap hingga layanan digital modern — PPOB, top up e-wallet, pembayaran
              tagihan, dan QRIS. Semua tersedia di{' '}
              <span className="text-white font-semibold">satu tempat</span>, dekat dari rumah Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-primary-700 rounded-xl font-bold text-base hover:bg-primary-50 transition-all duration-200 shadow-hero active:scale-95"
              >
                <span>📍</span>
                Kunjungi Kami
              </button>
              <button
                onClick={() =>
                  openWhatsApp(
                    CONTACT_INFO.whatsapp,
                    'Halo Warung Oman, saya ingin menanyakan informasi produk/layanan.'
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-xl font-bold text-base transition-all duration-200 shadow-lg active:scale-95"
              >
                <span>💬</span>
                Hubungi Sekarang
              </button>
            </div>

            {/* Services quick list */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['🛒 Sembako', '⚡ Bayar Tagihan', '📱 Top Up', '📲 QRIS', '🏦 PPOB'].map(
                (service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm text-primary-100 border border-white/10"
                  >
                    {service}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
                    <span className="text-4xl">🏪</span>
                  </div>
                  <h3 className="text-white font-display font-bold text-2xl">Warung Oman</h3>
                  <p className="text-primary-200 text-sm mt-1">Sembako & Layanan Digital</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 rounded-2xl p-4 text-center border border-white/10"
                    >
                      <p className="text-3xl font-bold text-white font-display">{stat.value}</p>
                      <p className="text-xs text-primary-200 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Open status */}
                <div className="mt-4 flex items-center justify-center gap-2 bg-primary-500/30 rounded-xl py-3 px-4 border border-primary-400/30">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-300 text-sm font-medium">Buka Setiap Hari</span>
                  <span className="text-primary-200 text-sm">· 06.00 – 21.00 WIB</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                ⭐ Terpercaya 15+ Tahun
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-primary-300 hover:text-white transition-colors group"
            aria-label="Scroll ke bawah"
          >
            <span className="text-xs font-medium">Lihat Lebih Lanjut</span>
            <div className="w-8 h-12 border-2 border-current rounded-full flex items-start justify-center p-1.5 group-hover:border-white transition-colors">
              <div className="w-1 h-3 bg-current rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
