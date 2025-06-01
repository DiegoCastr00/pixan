import { useState } from "react";
import { navigationItems } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

interface DesktopNavigationProps {
  variant?: "default" | "compact";
}

const DesktopNavigation = ({ variant = "default" }: DesktopNavigationProps) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const t = useTranslations();
  const pathname = usePathname();

  const isCompact = variant === "compact";

  // Función para determinar si una ruta está activa
  const isRouteActive = (
    href: string,
    dropdownItems?: Array<{ href: string }>
  ) => {
    // Si la ruta principal coincide exactamente
    if (pathname === href) return true;

    // Si el pathname empieza con el href (para subrutas)
    if (pathname.startsWith(href + "/") || pathname.startsWith(href + "?"))
      return true;

    // Si tiene dropdown items, verificar si alguno está activo
    if (dropdownItems) {
      return dropdownItems.some(
        (item) => pathname === item.href || pathname.startsWith(item.href + "/")
      );
    }

    return false;
  };

  // Función para determinar si un dropdown item está activo
  const isDropdownItemActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
      <nav
        className={`hidden lg:flex items-center bg-dark rounded-full ${
          isCompact
            ? "space-x-4 px-4 py-1"
            : "space-x-6 xl:space-x-8 px-5 xl:px-7 py-1"
        }`}
      >
        {navigationItems.map((item, index) => {
          const isActive = isRouteActive(item.href, item.dropdownItems);

          return (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center space-x-1 transition-colors duration-200 py-2 px-3 rounded-2xl ${
                  isActive
                    ? "bg-white text-gray-900"
                    : "text-white hover:text-emerald-200"
                }`}
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(index)
                }
              >
                <item.icon size={isCompact ? 16 : 18} />
                <span
                  className={`font-medium ${
                    isCompact ? "text-xs" : "text-sm xl:text-base"
                  }`}
                >
                  {t(item.name)}
                </span>
                {item.hasDropdown && (
                  <IconChevronDown
                    size={isCompact ? 14 : 16}
                    className={`transition-transform duration-200 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {item.dropdownItems?.map((dropdownItem) => {
                      const isDropdownActive = isDropdownItemActive(
                        dropdownItem.href
                      );

                      return (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-4 py-3 transition-colors duration-200 ${
                            isDropdownActive
                              ? "bg-emerald-100 text-emerald-700"
                              : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
                          }`}
                        >
                          {t(dropdownItem.name)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default DesktopNavigation;
