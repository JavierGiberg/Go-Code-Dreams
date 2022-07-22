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

      <div className="sidebar_profile_img">
        <img className="sidebar_item_img" alt="Image" src={sidePro.src} />
      </div>
      <h5 className="sidebar_item_text">{sidePro.text}</h5>
      <div className="sidebar_item_detiles">
        <h4>Bank [{bank}$]</h4>
        <h4>package buy [{packabuy}]</h4>
        <h4>wish list [{wish}]</h4>
        <Button onClick={() => getSel(sidePro)}>Get My Sellery</Button>
      </div>

      <div className="sidebar_item_buy">
        <h1>Card</h1>
        {card.length ? <Card card={card} /> : <h1>Empty card</h1>}
      </div>
    </div>
  );
}

export default Sidebar;
