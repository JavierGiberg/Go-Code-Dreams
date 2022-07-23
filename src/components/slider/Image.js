import React, { useContext } from "react";
import "./Slider.css";

import { Link } from "react-router-dom";
import { UserContext } from "../context/ProdactContex";

function Image() {
  const { Maindata } = useContext(UserContext);

  return Maindata.map((Maindata, index) => {
    return <img src={Maindata.image}></img>;
  });
}

export default Image;
