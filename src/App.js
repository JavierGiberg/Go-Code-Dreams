import "./App.css";
import Home from "./components/home/Home";
import { UserContext } from "./components/context/ProdactContex";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState([]);
  const [sidePro, setSidePro] = useState([]);

  const [Maindata, setMain] = useState([]);
  const [packabuy, setpackabuy] = useState(0);
  const [wish, setWish] = useState(0);
  const [bank, setBank] = useState(0);
  const [productTemp, setListTemp] = useState([]);
  const [selected, setSelected] = useState("All-collection");
  const [card, setCard] = useState([]);

  const [sortlist] = useState([
    {
      collection: "All-collection",
    },
    {
      collection: "extrem",
    },
    {
      collection: "100 starts",
    },
    {
      collection: "dreams",
    },
    {
      collection: "current",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/profile")
      .then((res) => res.json())
      .then((colle) => {
        setProfile(colle);
      });
  });

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((colle) => {
        setMain(colle);
        setListTemp(colle);
      });
  }, []);

  function select(e) {
    setSelected(e);
    Filter(e);
  }

  const Filter = (category) => {
    let temp = productTemp;
    if (!(category == "All-collection")) {
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
