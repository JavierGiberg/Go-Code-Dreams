import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/ProdactContex";
import "./Products.css";
function Products() {
  const [Maindata, setMaindata] = useState([]);
  const { packabuy, setpackabuy, wish, setWish, bank, setBank } =
    useContext(UserContext);

  function buyPack(e) {
    if (e.price <= bank) {
      setpackabuy(packabuy + 1);
      setBank(bank - e.price);
    }
  }
  function putwish() {
    setWish(wish + 1);
  }

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((colle) => {
        setMaindata(colle);
      });
  }, []);

  return Maindata.map((Maindata, index) => {
    return (
      <div className="container_products" key={index}>
        <div>
          <div className="item_pic_products">
            <img src={Maindata.image} alt="image" className="image" />
          </div>
          <div className="details_main_products">
            <h4 className="dream_pack">Dream package [{Maindata.details}]</h4>
            <h4 className="price_products">Price {Maindata.price}$</h4>
            <h3
              className="buy_button_products"
              onClick={() => buyPack(Maindata)}
            >
              Buy package
            </h3>
            <h3 className="whish_button_products" onClick={() => putwish()}>
              Add to whish list
            </h3>
          </div>
        </div>
      </div>
    );
  });
}

export default Products;
