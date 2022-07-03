import Profiles from "../profile/Profiles";
import "./SideBar.css";
const bank = 500;
function Sidebar() {
  const profile = [
    {
      src: "student.jpg",
      text: "Explore",
      path: "/home",
      bank: "200$",
      freetime: "",
    },
  ];

  return (
    <div className="container_sidebar">
      <h1 className="item_titel">Status</h1>
      <div className="item_img">
        <Profiles profile={profile} />
      </div>
      <div className="item_data">
        <h3>Bank [{bank}$]</h3>
        <h3>Free time [0]</h3>
        <h3>Dreams [0]</h3>
      </div>
    </div>
  );
}

export default Sidebar;
