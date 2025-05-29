import {
  IconFileCertificate,
  IconCoffee,
  IconGlassFullFilled,
  IconUsers,
} from "@tabler/icons-react";

export const navigationItems = [
  {
    name: "Certificados",
    href: "/certificados",
    icon: IconFileCertificate,
    hasDropdown: true,
    dropdownItems: [
      { name: "Ver Certificados", href: "/certificados" },
      { name: "Solicitar Certificado", href: "/certificados/solicitar" },
      { name: "Validar Certificado", href: "/certificados/validar" },
    ],
  },
  {
    name: "Miel",
    href: "/miel",
    icon: IconCoffee,
    dropdownItems: [
      { name: "Productos de Miel", href: "/miel/productos" },
      { name: "Proceso de Producción", href: "/miel/proceso" },
      { name: "Calidad y Certificación", href: "/miel/calidad" },
    ],
  },
  {
    name: "Vino",
    href: "/vino",
    icon: IconGlassFullFilled,
    hasDropdown: true,
    dropdownItems: [
      { name: "Catálogo de Vinos", href: "/vino/catalogo" },
      { name: "Proceso de Elaboración", href: "/vino/proceso" },
      { name: "Denominación de Origen", href: "/vino/denominacion" },
    ],
  },
  {
    name: "Sobre Nosotros",
    href: "/sobre-nosotros",
    icon: IconUsers,
    hasDropdown: false,
  },
];
