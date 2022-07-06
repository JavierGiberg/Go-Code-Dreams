import { useContext, useState } from "react";
import { UserContext } from "../context/ProdactContex";

import "./SideBar.css";

function Sidebar(props) {
  const { setProfile, packageg, setPackage, wish, setWish } =
    useContext(UserContext);
  const [pro] = useState(props.profile);
  const [bank, setBank] = useState(0);

  function getSel(e) {
    setBank(e.bank);
  }

  return pro.map((props, index) => (
    <div className="container_sidebar" key={index}>
      <div className="item_card">
        <li>
          <figure className="cards_item_pic-wrap">
            <img className="cards_item_img" alt="Image" src={props.src} />
          </figure>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{props.text}</h5>
          </div>
        </li>
        <div className="item_detiles">
          <h4 className="item_detiles1">Bank [{bank}$]</h4>
          <h4 className="item_detiles2">package buy [{packageg}]</h4>
          <h4 className="item_detiles3">wish list [{wish}]</h4>
          <button className="item_button_selery" onClick={() => getSel(props)}>
            Get My Sellery
          </button>
        </div>
      </div>
    </div>
  ));
}

export default Sidebar;
