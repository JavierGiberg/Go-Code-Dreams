import React from "react";
import "./Slider.css";
import Image from "./Image";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="slider_container">
      <div className="silder_trak">
        <div className="slider_slide">
          <Image />
        </div>
      </div>
    </div>
  );
}

export default Slider;
