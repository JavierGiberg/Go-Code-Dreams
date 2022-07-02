import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };
  return (
    <div>
      <nav className="nav">
        <h6 className="nav-brand">GoCode Dreams</h6>

        <ul className={active}>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>
        <form className="search-bar">
          <img
            className="img-bar"
            src="https://images.quik.co.il/general-assets/imgs/mobile/search_icon.svg"
          />
          <input type="search" placeholder="Search Dream" />
        </form>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
