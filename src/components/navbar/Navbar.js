import React, { useState } from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
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
  function f() {
    props.setCss(false);
  }
  function t() {
    props.setCss(true);
  }
  return (
    <div>
      <nav className="nav">
        <h6 className="nav-brand">GoCode Dreams</h6>

        <ul className={active}>
          <li className="nav-item">
            <Button href="/" className="nav-link">
              Chacnge Status
            </Button>
          </li>
          <li className="nav-item">
            <Button onClick={() => f()} className="nav-link">
              css 1
            </Button>
          </li>
          <li className="nav-item">
            <Button onClick={() => t()} className="nav-link">
              css 2
            </Button>
          </li>
        </ul>
        <select
          className="search-bar"
          onChange={(e) => props.select(e.target.value)}
        >
          <Filter filter={props.sortlist} />
        </select>
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
