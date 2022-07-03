import { useState, useEffect } from "react";

function Products() {
  const [Maindata, setMaindata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((colle) => {
        setMaindata(colle);
      });
  }, []);

  return Maindata.map((Maindata, index) => {
    return (
      <div className="" key={index}>
        (
        <div>
          <img src={Maindata.image} alt="image" className="image" />
          <h6>XXXXXXXXXXXXX</h6>
        </div>
        )
      </div>
    );
  });
}

export default Products;
