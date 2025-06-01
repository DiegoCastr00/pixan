import { IconMenu, IconX } from "@tabler/icons-react";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton = ({
  isMenuOpen,
  toggleMenu,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden p-2 text-white bg-dark rounded-lg transition-colors duration-200"
    >
      {isMenuOpen ? (
        <IconX size={24} className="text-white" />
      ) : (
        <IconMenu size={24} className="text-white" />
      )}
    </button>
  );
};

export default MobileMenuButton;
