import React, { useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Popover, Transition } from "@headlessui/react";
import { GlobalHeaderNav } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

interface NavItemProps {
  item: GlobalHeaderNav;
}

interface NavbarProps {
  logo?: string | React.ReactNode;
  links: GlobalHeaderNav[];
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100) as unknown as number;
  };

  if (item.children) {
    return (
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button
              className="flex items-center text-white hover:text-gray-300 focus:outline-none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Popover.Button>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel
                static
                className="absolute z-10 w-40 mt-2 bg-white shadow-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1">
                  {item.children?.map((child, index) =>
                    child !== null ? (
                      <a
                        data-tina-field={tinaField(child, "label")}
                        key={index}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.label}
                      </a>
                    ) : null
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }

  return (
    <a
      data-tina-field={tinaField(item, "label")}
      href={item.href}
      className="text-white hover:text-gray-300"
    >
      {item.label}
    </a>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <div>
        <button
          className="w-full text-left text-white hover:bg-gray-700 px-3 py-2 rounded-md flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.label}
          <ChevronDown
            className={`ml-1 h-4 w-4 transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div className="pl-4">
            {item.children.map((child, index) =>
              child !== null ? (
                <a
                  data-tina-field={tinaField(child, "label")}
                  key={index}
                  href={child.href}
                  className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  {child.label}
                </a>
              ) : null
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      data-tina-field={tinaField(item, "label")}
      href={item.href}
      className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md"
    >
      {item.label}
    </a>
  );
};

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">{logo}</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <NavItem key={index} item={link} />
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed w-full h-full top-0 left-0 z-50">
          {/* close button */}
          <div className="absolute right-0 p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <div className="bg-gray-700 p-4">
            {links.map((link, index) => (
              <MobileNavItem key={index} item={link} />
            ))}
          </div>

          {/* overlay */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full h-full top-0 left-0 bg-black opacity-50"
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
