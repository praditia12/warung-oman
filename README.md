# 🏪 Warung Oman — Website Resmi

Website profesional untuk **Warung Oman**, warung sembako dan layanan digital yang telah melayani masyarakat selama 10+ tahun.

## 🚀 Tech Stack

- **React 18** + **TypeScript** (Strict Mode)
- **Tailwind CSS** v3 (Mobile-first)
- **Vite** (Bundler cepat)
- **ESLint** + **Prettier** (Code quality)

## 📁 Struktur Folder

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, WhatsAppFloat
│   ├── sections/       # HeroSection, AboutSection, ServicesSection, dll.
│   └── ui/             # Button, Badge, SectionHeading, SectionWrapper
├── data/               # Data statis (layanan, testimoni, kontak)
├── hooks/              # Custom hooks (useInView, useScrollSpy)
├── types/              # TypeScript interfaces
└── utils/              # Helper functions
```

## ⚡ Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

## 🌐 Fitur Website

- ✅ **Hero Section** — Banner utama dengan tagline & statistik
- ✅ **Tentang Kami** — Cerita & keunggulan warung
- ✅ **Layanan** — 6 layanan dalam grid yang interaktif
- ✅ **Galeri** — Tampilan visual warung & aktivitas
- ✅ **Testimoni** — Ulasan dari pelanggan setia
- ✅ **Kontak** — Alamat, WhatsApp, jam operasional & Google Maps
- ✅ **Floating WhatsApp** — Tombol kontak cepat
- ✅ **Navbar Responsif** — Dengan mobile menu
- ✅ **Animasi Scroll** — Smooth transitions via IntersectionObserver
- ✅ **SEO Basic** — Meta tags lengkap
- ✅ **Mobile-First** — Tampil sempurna di semua perangkat

## 🔧 Kustomisasi

- **Data warung**: edit `src/data/index.ts`
- **Warna brand**: edit `tailwind.config.js` → `colors.primary`
- **Nomor WA**: ubah `CONTACT_INFO.whatsapp` di `src/data/index.ts`
- **Alamat Maps**: ganti URL iframe di `ContactSection.tsx`

## 📦 Dependencies

| Package | Versi | Keterangan |
|---|---|---|
| react | ^18.2.0 | UI library |
| react-dom | ^18.2.0 | DOM renderer |
| lucide-react | ^0.383.0 | Icon library |
| tailwindcss | ^3.4.3 | CSS framework |
| typescript | ^5.4.2 | Type safety |
| vite | ^5.2.0 | Build tool |
