import "./Profile.css";
import Profiles from "./Profiles";

function Profile(props) {
  return (
    <div className="cards">
      <video src="/video-1.mp4" autoPlay loop muted />
      <h1 className="h1_items">Check out these EPIC Destinations!</h1>

      <ul className="cards_items">
        <Profiles profile={props.profile} />
      </ul>
    </div>
  );
}

export default Profile;
