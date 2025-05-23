import { Popover, Transition } from "@headlessui/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { tinaField } from "tinacms/dist/react";

import { cn } from "../../lib/cn";
import { GlobalHeaderNav } from "../../tina/__generated__/types";

interface NavItemProps {
  item: GlobalHeaderNav;
}

interface NavbarProps {
  logoSrc?: string;
  links: GlobalHeaderNav[];
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const router = useRouter();

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
              className="flex items-center text-white font-bold hover:text-opacity-50 focus:outline-none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Popover.Button>

            <Transition
              className="absolute z-20"
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
                className="w-40 mt-2  bg-green-500 rounded shadow-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1">
                  {item.children?.map((child, index) =>
                    child !== null ? (
                      <Link
                        data-tina-field={tinaField(child, "label")}
                        key={index}
                        href={child.href}
                        className={cn(
                          "block px-4 py-2 text-sm text-white font-bold hover:text-opacity-50",
                          router.asPath === child.href && "text-opacity-50"
                        )}
                      >
                        {child.label}
                      </Link>
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
    <Link
      data-tina-field={tinaField(item, "label")}
      href={item.href || "#"}
      className={cn(
        "text-white font-bold hover:text-opacity-50",
        router.asPath === item.href && "text-opacity-50"
      )}
    >
      {item.label}
    </Link>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  if (item.children) {
    return (
      <div>
        <button
          className="w-full text-left text-white font-bold px-3 py-2 rounded-md flex items-center"
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
                <Link
                  data-tina-field={tinaField(child, "label")}
                  key={index}
                  href={child.href}
                  className={cn(
                    "block text-white font-bold px-3 py-2 rounded-md",
                    router.asPath === child.href && "text-opacity-50"
                  )}
                >
                  {child.label}
                </Link>
              ) : null
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      data-tina-field={tinaField(item, "label")}
      href={item.href || "#"}
      className={cn(
        "block text-white font-bold  px-3 py-2 rounded-md",
        router.asPath === item.href && "text-opacity-50"
      )}
    >
      {item.label}
    </Link>
  );
};

const Navbar: React.FC<NavbarProps> = ({ links, logoSrc }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="h-16 bg-gradient-to-r from-blue-500 to-green-500 ">
      <div className="container h-full mx-auto flex justify-between items-center">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt="Logo"
            width={200}
            height={60}
            style={{ transform: "translateY(-5px)" }}
            className="fill-black ml-4"
          />
        ) : null}

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 gap-4">
          {links.map((link, index) => (
            <NavItem key={index} item={link} />
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden mr-4">
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

          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4">
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
