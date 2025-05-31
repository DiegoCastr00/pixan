import { Link } from "@/i18n/navigation";
import { IconLogin, IconUserPlus } from "@tabler/icons-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface AuthButtonsProps {
  variant?: "desktop" | "mobile";
  onItemClick?: () => void;
}

const AuthButtons = ({
  variant = "desktop",
  onItemClick,
}: AuthButtonsProps) => {
  if (variant === "mobile") {
    return (
      <div className="space-y-4">
        <Link
          href="/iniciar-sesion"
          className="flex items-center justify-center space-x-3 text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 py-4 px-6 rounded-xl font-medium text-base"
          onClick={onItemClick}
        >
          <IconLogin size={20} />
          <span>Iniciar Sesión</span>
        </Link>
        <Link
          href="/registro"
          className="flex items-center justify-center space-x-3 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200 py-4 px-6 rounded-xl font-medium text-base shadow-lg"
          onClick={onItemClick}
        >
          <IconUserPlus size={20} />
          <span>Regístrate Gratis</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <LanguageSwitcher />
      <Link
        href="/iniciar-sesion"
        className="flex items-center space-x-2 bg-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
      >
        <IconLogin size={18} />
        <span>Iniciar Sesión</span>
      </Link>
      <Link
        href="/registro"
        className="flex items-center space-x-2 bg-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
      >
        <IconUserPlus size={18} />
        <span>Regístrate Gratis</span>
      </Link>
    </div>
  );
};

export default AuthButtons;
