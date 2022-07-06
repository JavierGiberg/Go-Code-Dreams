import "./App.css";
import Home from "./components/home/Home";
import { UserContext } from "./components/context/ProdactContex";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState([
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
  ]);

  return (
    <Router>
      <UserContext.Provider value={{ setProfile }}>
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
