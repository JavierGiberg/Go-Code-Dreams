import React, { useState, useEffect, useCallback, useContext } from "react";
import "./Main.css";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { UserContext } from "../context/ProdactContex";

const Main = () => {
  const {
    setProfile,
    packabuy,
    setpackabuy,
    wish,
    setWish,
    bank,
    setBank,
    setMain,
  } = useContext(UserContext);

  const [Maindata, setMaindata] = useState([]);

  function buyPack(e) {
    if (e.price <= bank) {
      setpackabuy(packabuy + 1);
      setBank(bank - e.price);
    }
  }
  function putwish() {
    setWish(wish + 1);
  }

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((colle) => {
        setMaindata(colle);
        setMain(colle);
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
                    Dream package [{Maindata.details}]
                  </h4>
                  <h4 className="price">Price {Maindata.price}$</h4>
                  <h3 className="buy_button" onClick={() => buyPack(Maindata)}>
                    Buy package
                  </h3>
                  <h3 className="whish_button" onClick={() => putwish()}>
                    Add to whish list
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

export default Main;
//() => new Audio("Fail.mp4").play() &&
