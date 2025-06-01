import {
  IconFileCertificate,
  IconCoffee,
  IconGlassFullFilled,
  IconUsers,
} from "@tabler/icons-react";

export const navigationItems = [
  {
    name: "Navigation.certificates",
    href: "/certificados",
    icon: IconFileCertificate,
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Navigation.requestCertificate",
        href: "/certificados/solicitar",
      },
      { name: "Navigation.validateCertificate", href: "/certificados/validar" },
    ],
  },
  {
    name: "Navigation.honey",
    href: "/miel",
    icon: IconCoffee,
    hasDropdown: true,
    dropdownItems: [
      { name: "Navigation.honeyProducts", href: "/miel/productos" },
      { name: "Navigation.productionProcess", href: "/miel/proceso" },
      { name: "Navigation.qualityCertification", href: "/miel/calidad" },
    ],
  },
  {
    name: "Navigation.wine",
    href: "/vino",
    icon: IconGlassFullFilled,
    hasDropdown: true,
    dropdownItems: [
      { name: "Navigation.wineCatalog", href: "/vino/catalogo" },
      { name: "Navigation.elaborationProcess", href: "/vino/proceso" },
      { name: "Navigation.originDenomination", href: "/vino/denominacion" },
    ],
  },
  {
    name: "Navigation.aboutUs",
    href: "/sobre-nosotros",
    icon: IconUsers,
    hasDropdown: false,
  },
];
