import React, { useState, useContext } from "react";
import "./Main.css";
import Button from "@mui/material/Button";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { UserContext } from "../context/ProdactContex";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

function Main(props) {
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
    } else {
      props.setPop(true);
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
              <div className="container_main_map" key={index}>
                <div className={index === current ? "slide active" : "slide"}>
                  {index === current && (
                    <div>
                      <div className="main_item_pic">
                        <img
                          src={Maindata.image}
                          alt="image"
                          className="image"
                        />
                      </div>
                      <div className="details_main">
                        <h4 className="main_dream_pack">
                          Dream package [{Maindata.details}]
                        </h4>
                        <h6 className="price">Price {Maindata.price}$</h6>

                        <Button
                          variant="outlined"
                          onClick={() => buyPack(Maindata)}
                        >
                          Buy package
                        </Button>

                        <Button variant="outlined" onClick={() => putwish()}>
                          add to whish list
                        </Button>

                        <Typography component="legend">Rating</Typography>
                        <StyledRating
                          name="customized-color"
                          defaultValue={2}
                          getLabelText={(value: number) =>
                            `${value} Heart${value !== 1 ? "s" : ""}`
                          }
                          precision={0.5}
                          icon={<FavoriteIcon fontSize="inherit" />}
                          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
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
}
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
export default Main;
//() => new Audio("Fail.mp4").play() &&
