import "./Home.css";
import Footer from "../footer/Footer";
import { useContext, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import { UserContext } from "../context/ProdactContex";
function Home(props) {
  return (
    <div className="container">
      <video src="/video-1.mp4" autoPlay loop muted />
      <header>
        <Navbar />
      </header>
      <aside>
        <Sidebar profile={props.profile} />
      </aside>

      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
