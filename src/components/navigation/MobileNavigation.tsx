import { useState } from "react";
import { navigationItems } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { IconChevronDown } from "@tabler/icons-react";
import AuthButtons from "./AuthButtons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  onMenuClose: () => void;
}

const MobileNavigation = ({
  isMenuOpen,
  onMenuClose,
}: MobileNavigationProps) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const t = useTranslations();
  const pathname = usePathname();

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

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
    <>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={onMenuClose}
        />
      )}

      {/* Full screen mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 xl:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header of mobile menu */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menú</h2>
          <button
            onClick={onMenuClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = isRouteActive(item.href, item.dropdownItems);

              return (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 transition-colors duration-200 py-3 px-3 rounded-lg flex-1 ${
                        isActive
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                          : "text-gray-900 hover:text-emerald-600 hover:bg-emerald-50"
                      }`}
                      onClick={() => !item.hasDropdown && onMenuClose()}
                    >
                      <item.icon size={24} />
                      <span className="font-medium text-base">
                        {t(item.name)}
                      </span>
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <IconChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-12 mr-4 space-y-1 mt-2">
                        {item.dropdownItems?.map((dropdownItem) => {
                          const isDropdownActive = isDropdownItemActive(
                            dropdownItem.href
                          );

                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={`block transition-colors duration-200 py-2 px-3 rounded-lg ${
                                isDropdownActive
                                  ? "bg-emerald-600 text-white"
                                  : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                              }`}
                              onClick={onMenuClose}
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

          {/* Divider */}
          <hr className="my-6 border-gray-200" />

          {/* Language Switcher for mobile/tablet */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3 px-3">
              Idioma
            </h3>
            <div className="px-3">
              <LanguageSwitcher
                variant="mobile"
                onLanguageChange={onMenuClose}
              />
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <AuthButtons variant="mobile" onItemClick={onMenuClose} />
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
