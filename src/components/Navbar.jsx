import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import EmailSection from "./EmailSection";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed w-full border border-[#33353F] top-0 left-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container px-4 py-2 mx-auto lg:py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl md:text-5xl text-white font-semibold">
            Logo
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
          <div
            className={`md:flex md:items-center md:w-auto ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 md:m-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
};

export default Navbar;
