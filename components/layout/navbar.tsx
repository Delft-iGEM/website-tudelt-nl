import React, { FC, useState } from "react";
import { Menu, X } from "lucide-react";
import { GlobalHeaderNav } from "../../tina/__generated__/types";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";

export interface NavbarProps {
  logo?: React.ReactNode;
  links?: GlobalHeaderNav[];
}

const Navbar: FC<NavbarProps> = ({ logo, links = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">{logo}</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <Link
              data-tina-field={tinaField(link, "label")}
              key={index}
              href={link.href ?? "/"}
              className="text-white hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link, index) => (
              <Link
                data-tina-field={tinaField(link, "label")}
                key={index}
                href={link.href ?? "/"}
                className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
