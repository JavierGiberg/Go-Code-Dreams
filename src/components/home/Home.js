import "./Home.css";
import Slider from "../slider/Slider";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import Products from "../products/Products";
import AddDreams from "../addDreams/AddDreams";
import { useState } from "react";
import Pop from "../pop/Pop";
import { Button } from "@mui/material";
import Icon from "@mui/material/Icon";

function Home(props) {
  const [css, setCss] = useState(true);
  const [pop, setPop] = useState(false);
  const [addToDreams, setAddToDreams] = useState(false);

  function AddDreamsFun(e) {
    setAddToDreams(true);
  }

  return (
    <div className="container">
      {addToDreams && (
        <AddDreams
          setMain={props.setMain}
          Maindata={props.Maindata}
          setAddToDreams={setAddToDreams}
        />
      )}
      {pop && <Pop setPop={setPop} />}
      <div className="header">
        <Navbar
          sortlist={props.sortlist}
          select={props.select}
          selected={props.selected}
          setCss={setCss}
          css={css}
        />
      </div>
      <div className="aside">
        <Sidebar card={props.card} profile={props.profile} />
      </div>
      <div className="main">
        <div className="main_title">
          <h1 className="main_title_h1">Sell Dreams</h1>

          <Button
            className="main_title_btn"
            onClick={() => {
              AddDreamsFun();
            }}
          >
            Add you Dreams <Icon color="primary">add_circle</Icon>
          </Button>
        </div>
        <div className="item_main_product">
          {css ? (
            <Main Maindata={props.Maindata} setPop={setPop} />
          ) : (
            <Products Maindata={props.Maindata} setPop={setPop} />
          )}
        </div>
      </div>
      <div className="slider">
        <Slider />
      </div>
    </div>
  );
}

export default Home;
