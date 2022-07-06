import "./Profile.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/ProdactContex";

function Profiles(props) {
  const { setProfile } = useContext(UserContext);

  function x(e) {
    setProfile([e]);
  }

  return props.profile.map((props, index) => (
    <div key={index}>
      <Link to={props.path}>
        <li
          className="cards_item"
          onClick={() => new Audio("Fail.mp4").play() && x(props)}
        >
          <div className="cards_item_link">
            <figure className="cards_item_pic-wrap">
              <img
                className="cards_item_img"
                alt="Travel Image"
                src={props.src}
              />
            </figure>
            <div className="cards_item_info">
              <h5 className="cards_item_text">{props.text}</h5>
            </div>
          </div>
        </li>
      </Link>
    </div>
  ));
}

export default Profiles;
