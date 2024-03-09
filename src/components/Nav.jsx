import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TbMessageCircle } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-30 w-max px-3 py-2 z-40 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-2 rounded-full backdrop-blur-md">
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={`flex items-center justify-center w-12 h-12 text-white rounded-full ${
          activeNav === "#" ? "bg-primary" : ""
        }`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={`flex items-center justify-center w-12 h-12 text-white rounded-full ${
          activeNav === "#about" ? "bg-primary" : ""
        }`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#project"
        onClick={() => {
          setActiveNav("#project");
        }}
        className={`flex items-center justify-center w-12 h-12 text-white rounded-full ${
          activeNav === "#project" ? "bg-primary" : ""
        }`}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={`flex items-center justify-center w-12 h-12 text-white rounded-full ${
          activeNav === "#contact" ? "bg-primary" : ""
        }`}
      >
        <TbMessageCircle />
      </a>
    </nav>
  );
};

export default Nav;
