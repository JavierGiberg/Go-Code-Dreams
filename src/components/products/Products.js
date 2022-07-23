import { Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/ProdactContex";
import "./Products.css";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
function Products(props) {
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

  return props.Maindata.map((Maindata, index) => {
    return (
      <div className="container_products" key={index}>
        <div>
          <div className="item_pic_products">
            <img src={Maindata.image} alt="image" className="image_products" />
          </div>
          <div className="details_main_products">
            <h4 className="dream_pack">
              <b>Dream package </b> <small>[{Maindata.details}]</small>
            </h4>

            <h4 className="price_products">Price {Maindata.price}$</h4>
            <Button
              className="buy_button_products"
              onClick={() => buyPack(Maindata)}
            >
              Buy package
            </Button>
            <Button className="whish_button_products" onClick={() => putwish()}>
              Add to whish list
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
      </div>
    );
  });
}
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
export default Products;
