import React from "react";
import Logo from "./HeaderLogo";
import { NavLink } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="IconMobile">
          <GiHamburgerMenu />
        </div>
        <div className="logo">
          <NavLink to="/">
             <Logo /> {/*Logo imported from a .jsx file to get all details from the logo */}
          </NavLink>
        </div>
        <div className="IconMobile">
          <svg
            width="40"
            height="30"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.61905" cy="7.61905" r="7.11905" stroke="black" />
            <path
              d="M13.3337 12.3811L19.167 17.279"
              stroke="black"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="search">
          <form className="search-form">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.61905" cy="7.61905" r="7.11905" stroke="black" />
                <path
                  d="M13.3337 12.3811L19.167 17.279"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </nav>
      <div className="Navbar">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
