import React from "react";
import { X } from "lucide-react";

interface NavigationMenuItemProps {
  text: string;
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({ text }) => {
  return (
    <div className="text-4xl font-bold text-center text-white cursor-pointer max-sm:text-3xl">
      {text}
    </div>
  );
};

interface NavigationMenuProps {
  onClose: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ onClose }) => {
  const menuItems = [
    "Home",
    "Gallery",
    "Menu",
    "About",
    "Reservation",
    "Contact",
  ];

  return (
    <div className="fixed inset-0 bg-red-950 z-50 flex justify-center items-center w-full min-h-screen max-md:gap-20 max-md:p-5 max-sm:flex-col max-sm:gap-10 max-sm:px-5 max-sm:pt-16 max-sm:pb-5">
      {/* Close button */}
      <div
        className="absolute top-5 right-5 flex justify-center items-center h-10 w-10 bg-amber-500 cursor-pointer rounded-full"
        onClick={onClose}
      >
        <X size={30} color="white" />
      </div>

      <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full">
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
