import { useState } from "react";
import { navigationItems } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { IconChevronDown } from "@tabler/icons-react";
import AuthButtons from "./AuthButtons";
import { useTranslations } from "next-intl";

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

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div
      className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <nav className="py-4 space-y-2">
        {navigationItems.map((item, index) => (
          <div key={item.name}>
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                className="flex items-center space-x-3 text-black hover:text-emerald-200 transition-colors duration-200 py-3 flex-1"
                onClick={() => !item.hasDropdown && onMenuClose()}
              >
                <item.icon size={20} />
                <span className="font-medium">{t(item.name)}</span>
              </Link>
              {item.hasDropdown && (
                <button
                  onClick={() => toggleDropdown(index)}
                  className="p-2 text-black transition-colors duration-200"
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
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-8 space-y-2">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block text-black hover:text-emerald-200 transition-colors duration-200 py-2"
                      onClick={onMenuClose}
                    >
                      {t(dropdownItem.name)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Mobile Auth Buttons */}
        <AuthButtons variant="mobile" onItemClick={onMenuClose} />
      </nav>
    </div>
  );
};

export default MobileNavigation;
