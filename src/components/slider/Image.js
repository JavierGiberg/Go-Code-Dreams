import React, { useContext } from "react";
import "./Slider.css";
//Developed by Javier Giberg
import { UserContext } from "../context/ProdactContex";

function Image() {
  const { Maindata } = useContext(UserContext);

  return Maindata.map((Maindata, index) => {
    return <img src={Maindata.image} key={index} alt="Images Slide"></img>;
  });
}

export default Image;
