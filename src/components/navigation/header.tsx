"use client";

import { useState } from "react";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import AuthButtons from "./AuthButtons";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-32 mx-auto">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation - Centered */}
          <DesktopNavigation />

          {/* Auth Buttons - Desktop */}
          <AuthButtons />

          {/* Mobile Menu Button */}
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        <MobileNavigation
          isMenuOpen={isMenuOpen}
          onMenuClose={handleMenuClose}
        />
      </div>
    </header>
  );
};

export default Header;
