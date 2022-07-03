import React, { useState, useEffect } from "react";
import "./Main.css";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Main = () => {
  const [Maindata, setMaindata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((colle) => {
        setMaindata(colle);
      });
  }, []);

  const [current, setCurrent] = useState(0);
  const length = Maindata.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Maindata) || Maindata.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {Maindata.map((Maindata, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img src={Maindata.image} alt="image" className="image" />
                <div className="details_main">
                  <h4 className="dream_pack">
                    Dream package [---------------------------]
                  </h4>
                  <h4 className="price">Price 2500$</h4>
                  <h3
                    className="buy_button"
                    onClick={() => new Audio("Fail.mp4").play()}
                  >
                    Buy package
                  </h3>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

function playAudio(url) {
  new Audio(url).play();
}
export default Main;
