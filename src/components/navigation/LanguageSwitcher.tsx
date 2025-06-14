"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";

const languages = {
  es: { name: "Español", flag: "🇲🇽" },
  en: { name: "English", flag: "🇺🇸" },
  de: { name: "Deutsch", flag: "🇩🇪" },
};

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
  onLanguageChange?: () => void;
}

export default function LanguageSwitcher({
  variant = "desktop",
  onLanguageChange,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
    onLanguageChange?.();
  };

  // Handle mouse enter to open dropdown (desktop only)
  const handleMouseEnter = () => {
    if (variant === "desktop") {
      setIsOpen(true);
    }
  };

  // Handle mouse leave to close dropdown (desktop only)
  const handleMouseLeave = () => {
    if (variant === "desktop") {
      setIsOpen(false);
    }
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

  const currentLanguage = languages[currentLocale as keyof typeof languages];

  // Mobile variant - simple list
  if (variant === "mobile") {
    return (
      <div className="space-y-2">
        {routing.locales.map((lang) => {
          const language = languages[lang as keyof typeof languages];
          const isSelected = lang === currentLocale;

          return (
            <button
              key={lang}
              onClick={() => handleChange(lang)}
              className={`w-full flex items-center gap-3 px-3 py-3 text-left rounded-lg transition-colors duration-150 ${
                isSelected
                  ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                  : "text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span className="text-lg">{language?.flag}</span>
              <span className="font-medium">{language?.name}</span>
              {isSelected && (
                <svg
                  className="w-4 h-4 ml-auto text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop variant - dropdown
  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dark backdrop-blur-sm border border-white/20 text-white rounded-full px-3 py-2 
                   flex items-center gap-2  transition-all duration-200 
                   shadow-lg hover:shadow-xl"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full right-0 w-48 bg-white/95 backdrop-blur-sm 
                        border border-white/20 rounded-lg shadow-xl overflow-hidden 
                        animate-in slide-in-from-top-2 duration-200 z-[9999]"
        >
          {routing.locales.map((lang) => {
            const language = languages[lang as keyof typeof languages];
            const isSelected = lang === currentLocale;

            return (
              <button
                key={lang}
                onClick={() => handleChange(lang)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left 
                           hover:bg-emerald-50 transition-colors duration-150 
                           ${
                             isSelected
                               ? "bg-emerald-100 text-emerald-700"
                               : "text-gray-700"
                           }`}
              >
                <span className="text-lg">{language?.flag}</span>
                <span className="font-medium">{language?.name}</span>
                {isSelected && (
                  <svg
                    className="w-4 h-4 ml-auto text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
