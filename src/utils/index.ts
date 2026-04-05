export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function openWhatsApp(phone: string, message: string = ''): void {
  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');
}

export function renderStars(rating: number): string[] {
  return Array.from({ length: 5 }, (_, i) => (i < rating ? '★' : '☆'));
}
