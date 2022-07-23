import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Footer() {
  return (
    <div className="footer_container">
      <h2>Link to Code</h2>
      <Button href="https://github.com/JavierGiberg/Go-Code-Dreams.git">
        Git Hub
      </Button>
      <h2>Link to LinkeDin</h2>
      <Button href="https://www.linkedin.com/in/javier-alejandro-giberg-7165ab223/">
        LinkeDin
      </Button>
      <br />
      <small className="">© 2022 | Developed by Javier Giberg</small>
    </div>
  );
}

export default Footer;
