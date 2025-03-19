"use client";

import * as React from "react";
import { ShoppingCart, User, Menu } from "lucide-react";
import NavigationMenu from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher"; // Import LanguageSwitcher
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <header className="flex justify-between items-center px-16 py-0 w-full h-24 bg-red-950 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0 max-sm:h-[72px]">
        <div className="h-[84px] w-[91px] max-sm:h-16 max-sm:w-[70px]">
          <Image
            src="/navbar/logo.png"
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <nav className="flex gap-6 items-center">
          <button
            className="text-2xl cursor-pointer text-white hover:text-gray-200 transition-colors"
            onClick={() => console.log("Cart clicked")}
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={24} />
          </button>

          <button
            className="text-2xl cursor-pointer text-white hover:text-gray-200 transition-colors"
            onClick={() => console.log("User clicked")}
            aria-label="User Profile"
          >
            <User size={24} />
          </button>

          <button
            className="text-2xl cursor-pointer text-white hover:text-gray-200 transition-colors"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>

          {/* Add LanguageSwitcher here */}
          <div className="text-white">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {isMenuOpen && <NavigationMenu onClose={toggleMenu} />}
    </>
  );
};

export default Navbar;
