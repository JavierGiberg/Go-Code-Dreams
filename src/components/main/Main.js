import React, { useState, useContext } from "react";
import "./Main.css";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { UserContext } from "../context/ProdactContex";

const Main = (props) => {
  const { setCard, card, packabuy, setpackabuy, wish, setWish, bank, setBank } =
    useContext(UserContext);

  function buyPack(e) {
    if (e.price <= bank) {
      setpackabuy(packabuy + 1);
      setBank(bank - e.price);
      setCard([
        ...card,
        {
          image: e.image,
          price: e.price,
          category: e.category,
          details: e.details,
        },
      ]);
      console.log(card);
    }
  }
  function putwish() {
    setWish(wish + 1);
  }

  const [current, setCurrent] = useState(0);
  const length = props.Maindata.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.Maindata) || props.Maindata.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        <div>
          {props.Maindata.map((Maindata, index) => {
            return (
              <div key={index}>
                <div className={index === current ? "slide active" : "slide"}>
                  {index === current && (
                    <div>
                      <div className="item_pic">
                        <img
                          src={Maindata.image}
                          alt="image"
                          className="image"
                        />
                      </div>
                      <div className="details_main">
                        <h4 className="dream_pack">
                          Dream package [{Maindata.details}]
                        </h4>
                        <h4 className="price">Price {Maindata.price}$</h4>
                        <h3
                          className="buy_button"
                          onClick={() => buyPack(Maindata)}
                        >
                          Buy package
                        </h3>
                        <h3 className="whish_button" onClick={() => putwish()}>
                          Add to whish list
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Main;
//() => new Audio("Fail.mp4").play() &&
