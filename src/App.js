import "./App.css";
import Home from "./components/home/Home";
import { UserContext } from "./components/context/ProdactContex";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState([]);
  const [packageg, setPackage] = useState(0);
  const [wish, setWish] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/profile")
      .then((res) => res.json())
      .then((colle) => {
        setProfile(colle);
      });
  });

  return (
    <Router>
      <UserContext.Provider
        value={{ setProfile, packageg, setPackage, wish, setWish }}
      >
        <Routes>
          <Route path="/" element={<Profile profile={profile} />} />
          <Route path="/home/*" element={<Home profile={profile} />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
