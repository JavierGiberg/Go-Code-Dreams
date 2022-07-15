import "./Card.css";
import { useContext } from "react";
import { UserContext } from "../context/ProdactContex";
function Card(props) {
  const { setCard, card, bank, setBank } = useContext(UserContext);

  function deleteCard(e) {
    var toRemove = e;
    var index = card.indexOf(toRemove);
    if (index > -1) {
      card.splice(index, 1);
      setCard(card);
      setBank(bank + e.price);
    }
  }
  return props.card.map((props, index) => (
    <div className="card_side" key={index}>
      <div className="item_img">
        <img src={props.image} />
      </div>
      <div className="item_title">
        <h3>{props.category}</h3>
      </div>

      <button onClick={() => deleteCard(props)} className="item_btn">
        Delete
      </button>
    </div>
  ));
}
export default Card;
