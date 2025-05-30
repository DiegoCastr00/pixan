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
      className="lg:hidden p-2 text-black transition-colors duration-200"
    >
      {isMenuOpen ? (
        <IconX size={24} className="text-black" />
      ) : (
        <IconMenu size={24} className="text-black" />
      )}
    </button>
  );
};

export default MobileMenuButton;
