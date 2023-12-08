import React, { useState } from "react";
import Logo from "../images/foodie.png";
import Cart from "../images/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-xanthous flex flex-row items-center justify-between md:justify-around">
      <div>
        <img className="h-14 " src={Logo} alt="" />
      </div>

      {/* Hamburger menu icon for small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="h-8 w-8 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
            />
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <div className={`md:flex ${showMenu ? "block" : "hidden"} md:mt-0`}>
        <ul className="flex flex-col md:flex-row md:items-center">
          <li className="md:mr-5 bg-tomato px-5 py-2 rounded-full">
            <Link to="/">Home</Link>
          </li>
          <li className="md:mr-5 bg-tomato px-5 py-2 rounded-full">
            <Link to="menu">Menu</Link>
          </li>
          <li className="md:mr-5 bg-tomato px-5 py-2 rounded-full">
            <Link to="get-started">Get Started</Link>
          </li>
        </ul>
      </div>

      <div>
        <img className="h-8 " src={Cart} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
