import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/ProdactContex";
import Card from "../card/Card";
import "./SideBar.css";
import Button from "@mui/material/Button";
function Sidebar(props) {
  const { sidePro, card, packabuy, wish, bank, setBank } =
    useContext(UserContext);

  function getSel(e) {
    if (bank == 0) setBank(e.bank);
  }

  return (
    <div className="container_sidebar">
      <h1>Profile</h1>
      <div className="item_card">
        <li>
          <figure className="cards_item_pic-wrap">
            <img className="cards_item_img" alt="Image" src={sidePro.src} />
          </figure>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{sidePro.text}</h5>
          </div>
        </li>
        <div className="item_detiles">
          <h4 className="item_detiles1">Bank [{bank}$]</h4>
          <h4 className="item_detiles2">package buy [{packabuy}]</h4>
          <h4 className="item_detiles3">wish list [{wish}]</h4>
          <Button
            className="item_button_selery"
            onClick={() => getSel(sidePro)}
          >
            Get My Sellery
          </Button>
        </div>
      </div>
      <div className="item_card_buy">
        <h1>Card</h1>
        {card.length ? <Card card={card} /> : <h1>Empty card</h1>}
      </div>
    </div>
  );
}

export default Sidebar;
