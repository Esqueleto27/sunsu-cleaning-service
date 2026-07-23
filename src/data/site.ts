export const site = {
  name: 'SUNSU',
  legalName: 'Sunsu Cleaning Service',
  tagline: 'Luminous Clarity',
  description:
    'Servicios de limpieza profesional en Quito y sus valles. Dejamos tu hogar, oficina o edificio impecable, con la máxima puntualidad y confianza.',
  locale: 'es',
  whatsappNumber: '593991534018',
  phoneDisplay: '099 153 4018',
  city: 'Quito, Ecuador',
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const navLinks = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Cómo Funciona', href: '#how-it-works' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Preguntas', href: '#faq' },
] as const;

export const socialLinks = [
  { label: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@sunsu.cleaning.se' },
] as const;

export const footerColumns = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nosotros', href: '#about' },
      { label: 'Contacto', href: whatsappLink() },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Departamentos y Casas', href: '#services' },
      { label: 'Oficinas y Locales', href: '#services' },
      { label: 'Edificios y Conjuntos', href: '#services' },
    ],
  },
] as const;
