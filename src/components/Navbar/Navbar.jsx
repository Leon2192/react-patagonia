import React from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="header-container font-bold text-xl nav-text">
      <header className="p-4 text-center">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={`${process.env.PUBLIC_URL}/Brand/logo.png`}
              alt="Logo"
              width={50}
              height={50}
              className="imageLogo"
            />
          </div>

          <ul className="flex space-x-8">
            <li className="navItem">
              <a href="#OurStory">OUR STORY</a>
            </li>
            <li className="navItem">
              <a href="#OurFoods">OUR FOODS</a>
            </li>
            <li className="navItem">
              <a href="#PrivateLabel">PRIVATE LABEL</a>
            </li>
          </ul>
          <div className="flex items-center">
            <a className="btn-discover px-2 py-1 mr-3" href="/">
              <span className="flex items-center m-2">
                Lets talk! <BsFillChatLeftFill className="ml-2" />
              </span>
            </a>
            <img
              src={`${process.env.PUBLIC_URL}/Banderas/estadosunidos.png`}
              alt="Bandera 1"
              width={50}
              height={50}
              className="w-6 h-4 mr-2"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Banderas/espania.png`}
              alt="Bandera 2"
              width={50}
              height={50}
              className="w-6 h-4 mr-2"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
