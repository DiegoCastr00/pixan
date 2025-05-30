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
      <div className="pt-4 space-y-3 border-t border-emerald-600">
        <Link
          href="/iniciar-sesion"
          className="flex items-center space-x-3 text-black hover:text-emerald-200 transition-colors duration-200 py-3"
          onClick={onItemClick}
        >
          <IconLogin size={20} />
          <span>Iniciar Sesión</span>
        </Link>
        <Link
          href="/registro"
          className="flex items-center space-x-3 bg-white text-emerald-800 px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200 font-medium"
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
