"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import {
  IconLogin,
  IconUserPlus,
  IconUser,
  IconChevronDown,
} from "@tabler/icons-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface TabletAuthDropdownProps {
  onItemClick?: () => void;
}

const TabletAuthDropdown = ({ onItemClick }: TabletAuthDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick?.();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-dark text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
      >
        <IconUser size={18} />
        <span className="font-medium">Cuenta</span>
        <IconChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999] animate-in slide-in-from-top-2 duration-200">
          {/* Language Switcher Section */}
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Idioma</h3>
            <LanguageSwitcher
              variant="mobile"
              onLanguageChange={handleItemClick}
            />
          </div>

          {/* Auth Buttons Section */}
          <div className="p-4 space-y-3">
            <Link
              href="/iniciar-sesion"
              className="flex items-center justify-center space-x-3 text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 py-3 px-4 rounded-lg font-medium w-full"
              onClick={handleItemClick}
            >
              <IconLogin size={18} />
              <span>Iniciar Sesión</span>
            </Link>
            <Link
              href="/registro"
              className="flex items-center justify-center space-x-3 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200 py-3 px-4 rounded-lg font-medium w-full shadow-lg"
              onClick={handleItemClick}
            >
              <IconUserPlus size={18} />
              <span>Regístrate Gratis</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabletAuthDropdown;
