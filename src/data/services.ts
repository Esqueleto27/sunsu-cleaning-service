import apartmentImg from '../assets/images/service-apartment.jpg';
import houseImg from '../assets/images/service-house.jpg';
import officeImg from '../assets/images/service-office.jpg';
import buildingImg from '../assets/images/service-building.jpg';
import residentialImg from '../assets/images/service-residential.jpg';
import commercialImg from '../assets/images/service-commercial.jpg';

export const services = [
  {
    icon: 'apartment',
    title: 'Departamentos',
    image: apartmentImg,
    description:
      'Limpieza de mantenimiento o profunda para tu departamento, cuidando cada rincón con productos modernos y de calidad.',
  },
  {
    icon: 'home',
    title: 'Casas',
    image: houseImg,
    description: 'Tu casa siempre impecable y fresca, con un servicio adaptado a espacios grandes y familiares.',
  },
  {
    icon: 'briefcase',
    title: 'Oficinas',
    image: officeImg,
    description: 'Ambientes de trabajo productivos y saludables, con altos estándares de higiene para tu equipo.',
  },
  {
    icon: 'tower',
    title: 'Edificios',
    image: buildingImg,
    description:
      'Mantenimiento integral de áreas comunes: parqueaderos, pasillos, ascensores, terrazas y jardines.',
  },
  {
    icon: 'gate',
    title: 'Conjuntos Residenciales',
    image: residentialImg,
    description: 'Cuidamos los espacios compartidos de tu conjunto para que todos disfruten de un entorno impecable.',
  },
  {
    icon: 'store',
    title: 'Locales Comerciales',
    image: commercialImg,
    description: 'Espacios comerciales impecables que transmiten confianza a tus clientes desde el primer momento.',
  },
] as const;
