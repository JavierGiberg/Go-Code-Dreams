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
        <h1>Sell Dreams</h1>
        <div className="item_main_product">
          {x ? (
            <Main Maindata={props.Maindata} />
          ) : (
            <Products Maindata={props.Maindata} />
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
