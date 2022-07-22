import "./Profile.css";
import Profiles from "./Profiles";

function Profile(props) {
  return (
    <div className="profile_container">
      <h1 className="profile_h1_items">Choose you'r status</h1>

      <div className="profile_item">
        <Profiles profile={props.profile} />
      </div>
    </div>
  );
}

export default Profile;
