import "./Home.css";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import Products from "../products/Products";
import { useState } from "react";

function Home(props) {
  const [x, setx] = useState(true);

  return (
    <div className="container">
      <header>
        <Navbar
          sortlist={props.sortlist}
          select={props.select}
          selected={props.selected}
          setx={setx}
        />
      </header>
      <aside>
        <Sidebar card={props.card} profile={props.profile} />
      </aside>
      <main className="main">
        {x ? <Main Maindata={props.Maindata} /> : <Products />}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
