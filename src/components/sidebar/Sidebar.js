import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/ProdactContex";
import Card from "../card/Card";
import "./SideBar.css";

function Sidebar(props) {
  const { sidePro, card, packabuy, wish, bank, setBank } =
    useContext(UserContext);

  function getSel(e) {
    if (bank == 0) setBank(e.bank);
    console.log(props.card);
  }

  return (
    <div className="container_sidebar">
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
          <button
            className="item_button_selery"
            onClick={() => getSel(sidePro)}
          >
            Get My Sellery
          </button>
        </div>
      </div>
      <div className="item_card_buy">
        <h2>Card</h2>
        <Card card={card} />
      </div>
    </div>
  );
}

// return props.card.profile.map((props, index) => (
//   <div className="container_sidebar" key={index}>
//     <div className="item_card">
//       <li>
//         <figure className="cards_item_pic-wrap">
//           <img className="cards_item_img" alt="Image" src={props.src} />
//         </figure>
//         <div className="cards_item_info">
//           <h5 className="cards_item_text">{props.text}</h5>
//         </div>
//       </li>
//       <div className="item_detiles">
//         <h4 className="item_detiles1">Bank [{bank}$]</h4>
//         <h4 className="item_detiles2">package buy [{packabuy}]</h4>
//         <h4 className="item_detiles3">wish list [{wish}]</h4>
//         <button className="item_button_selery" onClick={() => getSel(props)}>
//           Get My Sellery
//         </button>
//       </div>
//     </div>
//     <div>
//       <Card card={props.card} />
//     </div>
//   </div>
// ));
// }

export default Sidebar;
