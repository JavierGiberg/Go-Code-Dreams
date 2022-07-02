import "./Profile.css";
import Profiles from "./Profiles";
function Profile() {
  const profile = [
    {
      src: "student.jpg",
      text: "Student",
      path: "/home",
    },
    {
      src: "student.jpg",
      text: "Junior",
      path: "/home",
    },
    {
      src: "student.jpg",
      text: "Senior",
      path: "/home",
    },
    {
      src: "student.jpg",
      text: "GoCode",
      path: "/home",
    },
  ];
  return (
    <div className="cards">
      <video src="/video-1.mp4" autoPlay loop muted />
      <h1 className="h1_items">Check out these EPIC Destinations!</h1>

      <ul className="cards_items">
        <Profiles profile={profile} />
      </ul>
    </div>
  );
}

export default Profile;
