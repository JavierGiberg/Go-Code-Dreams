import "./Home.css";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
function Home() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <aside>
        <Sidebar />
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
