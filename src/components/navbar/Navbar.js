import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
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
  function x() {
    props.setx(false);
  }
  function y() {
    props.setx(true);
  }
  return (
    <div>
      <nav className="nav">
        <h6 className="nav-brand">GoCode Dreams</h6>

        <ul className={active}>
          <li className="nav-item">
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => x()} className="nav-link">
              Dream List 1
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => y()} className="nav-link">
              Dream List 2
            </a>
          </li>
        </ul>
        <select
          className="search-bar"
          onChange={(e) => props.select(e.target.value)}
        >
          <Filter filter={props.sortlist} />
        </select>
        {/* <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line3"></div>
        </div> */}
      </nav>
    </div>
  );
}

function Filter(props) {
  return props.filter.map((colle, index) => (
    <option key={index} value={colle.title}>
      {colle.collection}
    </option>
  ));
}

export default Navbar;
