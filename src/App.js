import "./App.css";
import Home from "./components/home/Home";
import { UserContext } from "./components/context/ProdactContex";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState([]); //State to => Profile && Home
  const [sidePro, setSidePro] = useState([]); // to => Home => Sidebar

  const [Maindata, setMain] = useState([]); //State to => Home = > Main && Products && Sidebar
  const [packabuy, setpackabuy] = useState(0); //State to => Home => Main && Products && Sidebar
  const [wish, setWish] = useState(0); //State to => Home => Main && Products && Sidebar
  const [bank, setBank] = useState(0); //State to => Home => Main && Products && Sidebar
  const [productTemp, setListTemp] = useState([]); //State to => Home => Main && Products && Sidebar
  const [selected, setSelected] = useState("All-Package"); //State to => Home => Main && Products && Navbar
  const [card, setCard] = useState([]); //State to => Home => Main && Products && Sidebar

  const [sortlist] = useState([
    //state for filter product & MainPro
    {
      collection: "All-Package",
    },
    {
      collection: "Student",
    },
    {
      collection: "Junior",
    },
    {
      collection: "Senior",
    },
    {
      collection: "Go Code",
    },
  ]);

  useEffect(() => {
    //fech from server
    fetch("http://localhost:8000/profile")
      .then((res) => res.json())
      .then((colle) => {
        setProfile(colle);
      });
  });

  useEffect(() => {
    //fech from server
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((colle) => {
        setMain(colle);
        setListTemp(colle);
      });
  }, []);

  function select(e) {
    //fuc for filter
    setSelected(e);
    Filter(e);
  }

  const Filter = (category) => {
    //fuc  filter
    let temp = productTemp;
    if (!(category === "All-Package")) {
      temp = productTemp.filter((pordu) => pordu.category === category);
      setMain(temp);
    } else {
      setMain(productTemp);
    }
  };
  return (
    <div className="app_container">
      <Router>
        <UserContext.Provider
          value={{
            sidePro,
            setSidePro,
            packabuy,
            setpackabuy,
            wish,
            setWish,
            bank,
            setBank,
            Maindata,
            setMain,
            card,
            setCard,
          }}
        >
          <Routes>
            <Route path="/" element={<Profile profile={profile} />} />
            <Route
              path="/home/*"
              element={
                <Home
                  sortlist={sortlist}
                  select={select}
                  selected={selected}
                  Maindata={Maindata}
                  card={card}
                  profile={profile}
                  setMain={setMain}
                />
              }
            />
            <Route path="/products" />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
