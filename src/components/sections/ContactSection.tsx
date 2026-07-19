import { CONTACT_INFO } from '@/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { openWhatsApp } from '@/utils';

export function ContactSection(): JSX.Element {
  const handleWhatsApp = (): void => {
    openWhatsApp(
      CONTACT_INFO.whatsapp,
      'Halo Warung Oman, saya ingin menanyakan informasi lebih lanjut.',
    );
  };

  return (
    <SectionWrapper id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Kontak & Lokasi"
          title="Temukan & Hubungi Kami"
          subtitle="Kami siap melayani Anda. Datang langsung atau hubungi kami via WhatsApp."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Alamat</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                  <a
                    href="https://maps.app.goo.gl/CvrWN2DYUNNCy2eH7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium mt-2 hover:text-primary-800 transition-colors"
                  >
                    Buka di Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                  📱
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-600 text-sm">{CONTACT_INFO.whatsappDisplay}</p>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  Chat Sekarang
                </button>
              </div>
            </div>

            {/* Operational Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                  🕐
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-3">Jam Operasional</h3>
                  <div className="space-y-2">
                    {CONTACT_INFO.operationalHours.map((item) => (
                      <div key={item.day} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{item.day}</span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${item.isOpen ? 'bg-green-400' : 'bg-red-400'}`}
                          />
                          <span className="font-medium text-gray-800">{item.hours}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-primary-600 to-teal-600 text-white rounded-2xl font-bold text-base hover:from-primary-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              <span className="text-xl">💬</span>
              Hubungi via WhatsApp Sekarang
            </button>
          </div>

          {/* Right: Google Maps embed */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 min-h-[450px] flex flex-col">
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-lg">
                🗺️
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Lokasi Warung Oman</p>
                <p className="text-xs text-gray-500">Subang, Jawa Barat</p>
              </div>
            </div>
            <div className="flex-1 relative bg-gray-100">
              {/* Google Maps Embed - Replace src with actual embed URL */}
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Warung%20Oman%2C%20Jalan%20Sadang%20Kp.%20Sadang%20Kaler%2C%20RT.10%2FRW.04%2C%20Parung%2C%20Subang%20Regency%2C%20West%20Java%2C%20Indonesia&maptype=roadmap"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Warung Oman di Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
