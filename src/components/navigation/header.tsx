"use client";

import { useState } from "react";
import { navigationItems } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import {
  IconChevronDown,
  IconMenu,
  IconX,
  IconLogin,
  IconUserPlus,
} from "@tabler/icons-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index: any) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-transparent sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-black text-xl font-semibold tracking-wide">
              Novecento
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <nav className="hidden lg:flex items-center space-x-8 bg-black px-7 py-1 rounded-full">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-white hover:text-emerald-200 transition-colors duration-200 py-2"
                    onMouseEnter={() =>
                      item.hasDropdown && setActiveDropdown(index)
                    }
                  >
                    <item.icon size={18} />
                    <span className="font-medium">{item.name}</span>
                    {item.hasDropdown && (
                      <IconChevronDown
                        size={16}
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
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/iniciar-sesion"
              className="flex items-center space-x-2 text-white hover:text-emerald-200 transition-colors duration-200"
            >
              <IconLogin size={18} />
              <span>Iniciar Sesión</span>
            </Link>
            <Link
              href="/registro"
              className="flex items-center space-x-2 bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200 font-medium"
            >
              <IconUserPlus size={18} />
              <span>Regístrate Gratis</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-emerald-200 transition-colors duration-200"
          >
            {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
                    className="flex items-center space-x-3 text-white hover:text-emerald-200 transition-colors duration-200 py-3 flex-1"
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="p-2 text-white hover:text-emerald-200 transition-colors duration-200"
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
                          className="block text-emerald-200 hover:text-white transition-colors duration-200 py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-3 border-t border-emerald-600">
              <Link
                href="/iniciar-sesion"
                className="flex items-center space-x-3 text-white hover:text-emerald-200 transition-colors duration-200 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <IconLogin size={20} />
                <span>Iniciar Sesión</span>
              </Link>
              <Link
                href="/registro"
                className="flex items-center space-x-3 bg-white text-emerald-800 px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <IconUserPlus size={20} />
                <span>Regístrate Gratis</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
