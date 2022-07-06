import { useContext, useState, useEffect } from "react";

import "./SideBar.css";
const bank = 500;

function Sidebar(props) {
  const [pro] = useState(props.profile);

  return pro.map((props, index) => (
    <div key={index}>
      <li className="cards_item">
        <figure className="cards_item_pic-wrap">
          <img className="cards_item_img" alt="Travel Image" src={props.src} />
        </figure>
        <div className="cards_item_info">
          <h5 className="cards_item_text">{props.text}</h5>
        </div>
      </li>
    </div>
  ));
}

export default Sidebar;
