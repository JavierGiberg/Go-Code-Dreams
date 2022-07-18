import "./Card.css";
import { useContext } from "react";
import { UserContext } from "../context/ProdactContex";
import * as React from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Card(props) {
  const { setCard, card, bank, setBank, setpackabuy, packabuy } =
    useContext(UserContext);

  function deleteCard(e) {
    var toRemove = e;
    var index = card.indexOf(toRemove);
    if (index > -1) {
      card.splice(index, 1);
      setCard(card);
      setBank(bank + e.price);
      setpackabuy(packabuy - 1);
    }
  }
  return props.card.map((props, index) => (
    <div className="card_side" key={index}>
      <div className="item_img">
        <img src={props.image} />
      </div>
      <div className="item_title">
        <h3>{props.category}</h3>
      </div>
      <div className="">
        <Button
          onClick={() => deleteCard(props)}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Money Back
        </Button>
      </div>
    </div>
  ));
}
export default Card;
