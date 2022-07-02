import Profiles from "../profile/Profiles";
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
      <h1>Status</h1>
      <Profiles profile={profile} />
      <h3>Bank [{bank}$]</h3>
      <h3>Free time [0]</h3>
      <h3>Dreams [0]</h3>
    </div>
  );
}

export default Sidebar;
