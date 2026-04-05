export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  whatsapp: string;
  whatsappDisplay: string;
  operationalHours: OperationalHour[];
}

export interface OperationalHour {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
