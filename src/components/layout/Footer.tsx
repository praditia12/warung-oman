import { CONTACT_INFO, NAV_ITEMS } from '@/data';
import { scrollToSection, openWhatsApp } from '@/utils';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">W</span>
              </div>
              <div>
                <p className="font-display font-bold text-xl text-white">Warung Oman</p>
                <p className="text-xs text-primary-400">Sembako & Layanan Digital</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Warung terpercaya untuk kebutuhan harian dan layanan digital Anda. Sudah melayani
              masyarakat dengan sepenuh hati selama lebih dari 15 tahun.
            </p>
            <button
              onClick={() =>
                openWhatsApp(
                  CONTACT_INFO.whatsapp,
                  'Halo Warung Oman, saya ingin bertanya lebih lanjut.'
                )
              }
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-xl text-sm font-semibold transition-colors"
            >
              <span>💬</span>
              Chat WhatsApp
            </button>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>{CONTACT_INFO.whatsappDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Buka Setiap Hari</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Warung Oman. Hak Cipta Dilindungi.
          </p>
          <p className="text-gray-600 text-xs">Melayani dengan sepenuh hati 💚</p>
        </div>
      </div>
    </footer>
  );
}
