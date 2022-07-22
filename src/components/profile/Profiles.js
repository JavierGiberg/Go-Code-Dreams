import "./Profile.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/ProdactContex";

function Profiles(props) {
  const { setSidePro } = useContext(UserContext);

  function x(e) {
    console.log(e);
    setSidePro(e);
  }

  return props.profile.map((props, index) => (
    <div className="profiles_container" key={index}>
      <Link to={props.path}>
        <div onClick={() => new Audio(props.sound).play() && x(props)}>
          <div className="profile_item_link">
            <div className="profile_item_pic-wrap">
              <img
                className="profile_item_img"
                alt="Image Status"
                src={props.src}
              />
            </div>

            <h5 className="profile_item_text">{props.text}</h5>
          </div>
        </div>
      </Link>
    </div>
  ));
}

export default Profiles;
