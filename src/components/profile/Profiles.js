import "./Profile.css";
import { Link } from "react-router-dom";
function Profiles(props) {
  return props.profile.map((props, index) => (
    <div key={index}>
      <li className="cards_item">
        <Link className="cards_item_link" to={props.path}>
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
        </Link>
      </li>
    </div>
  ));
}

export default Profiles;
