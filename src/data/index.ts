import type { Service, Testimonial, NavItem, ContactInfo, FeatureItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Beranda', href: '#home' },
  { id: 'about', label: 'Tentang Kami', href: '#about' },
  { id: 'services', label: 'Layanan', href: '#services' },
  { id: 'gallery', label: 'Galeri', href: '#gallery' },
  { id: 'testimonials', label: 'Testimoni', href: '#testimonials' },
  { id: 'contact', label: 'Kontak', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'sembako',
    title: 'Sembako Lengkap',
    description: 'Beras, minyak goreng, gula, tepung, dan semua kebutuhan pokok tersedia lengkap dengan harga terjangkau.',
    icon: '🛒',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
  },
  {
    id: 'tagihan',
    title: 'Pembayaran Tagihan',
    description: 'Bayar tagihan listrik PLN, air PDAM, internet, dan telepon dengan cepat dan mudah tanpa antri.',
    icon: '⚡',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 'ppob',
    title: 'PPOB Lengkap',
    description: 'Payment Point Online Bank untuk berbagai kebutuhan transaksi perbankan dan pembayaran online.',
    icon: '🏦',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'ewallet',
    title: 'Top Up E-Wallet',
    description: 'Isi saldo OVO, DANA, GoPay, ShopeePay, LinkAja, dan dompet digital lainnya dengan cepat.',
    icon: '📱',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'qris',
    title: 'Pembayaran QRIS',
    description: 'Terima pembayaran dari semua aplikasi e-wallet dengan satu kode QR. Praktis dan aman.',
    icon: '📲',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
  },
  {
    id: 'pulsa',
    title: 'Pulsa & Paket Data',
    description: 'Isi pulsa dan paket data semua operator: Telkomsel, Indosat, XL, Tri, Smartfren, dan lainnya.',
    icon: '📶',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'trusted',
    title: '10+ Tahun Berpengalaman',
    description: 'Dipercaya masyarakat sekitar selama lebih dari satu dekade.',
    icon: '🏆',
  },
  {
    id: 'complete',
    title: 'Layanan Lengkap',
    description: 'Satu tempat untuk semua kebutuhan harian dan transaksi digital.',
    icon: '✅',
  },
  {
    id: 'fast',
    title: 'Proses Cepat',
    description: 'Transaksi diproses dalam hitungan menit, tidak perlu lama menunggu.',
    icon: '⚡',
  },
  {
    id: 'safe',
    title: 'Aman & Terpercaya',
    description: 'Setiap transaksi tercatat dan terjamin keamanannya.',
    icon: '🔒',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ibu Sari',
    role: 'Pelanggan Setia',
    content: 'Sudah langganan di Warung Oman sejak lama. Harga sembako bersaing dan pelayanannya ramah. Bayar listrik juga bisa di sini, sangat praktis!',
    rating: 5,
    avatar: 'S',
  },
  {
    id: '2',
    name: 'Pak Budi',
    role: 'Warga Sekitar',
    content: 'Top up GoPay dan DANA di sini prosesnya cepat banget. Tidak perlu repot ke ATM atau minimarket jauh. Warung Oman selalu bisa diandalkan!',
    rating: 5,
    avatar: 'B',
  },
  {
    id: '3',
    name: 'Mbak Rina',
    role: 'Pelanggan Rutin',
    content: 'Belanja sembako sekaligus bayar tagihan air dan internet, semua bisa di Warung Oman. Hemat waktu dan tenaga. Recommended banget!',
    rating: 5,
    avatar: 'R',
  },
  {
    id: '4',
    name: 'Pak Doni',
    role: 'Pedagang Sayur',
    content: 'Setiap pagi belanja kebutuhan di sini. Stok selalu lengkap dan harganya pas di kantong. Pak Oman orangnya juga ramah dan jujur.',
    rating: 5,
    avatar: 'D',
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: 'Jl. Pasar Baru No. 12, RT 03/RW 05, Kelurahan Sukamaju, Kecamatan Cibeunying, Kota Bandung, Jawa Barat 40123',
  whatsapp: '6281234567890',
  whatsappDisplay: '+62 812-3456-7890',
  operationalHours: [
    { day: 'Senin – Jumat', hours: '06.00 – 21.00 WIB', isOpen: true },
    { day: 'Sabtu', hours: '06.00 – 20.00 WIB', isOpen: true },
    { day: 'Minggu', hours: '07.00 – 18.00 WIB', isOpen: true },
    { day: 'Hari Libur Nasional', hours: '07.00 – 16.00 WIB', isOpen: true },
  ],
};
