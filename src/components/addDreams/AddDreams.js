import React from "react";
import "./AddDreams.css";
//Developed by Javier Giberg
function AddDreams(props) {
  return (
    <div className="AddDreams_Background">
      <div className="AddDreams_Container">
        <div className="AddDreams_titleCloseBtn">
          <button
            onClick={() => {
              props.setAddToDreams(false);
            }}
          >
            X
          </button>
        </div>
        <div className="AddDreams_title">
          <h3>Your Dream</h3>
          <div className="AddDreams_list">
            <ul className="AddDreams_list_ul">
              <li>
                *<input id="src" placeholder="Enter Url image"></input>
              </li>
              <br />
              <li>
                *<input id="details" placeholder="Enter details"></input>
              </li>
              <br />
              <li>
                *<input id="category" placeholder="Enter category"></input>
              </li>
              <br />
              <li>
                *<input id="price" placeholder="Enter price"></input>
              </li>
            </ul>
          </div>
        </div>

        <div className="AddDreams_footer">
          <button
            onClick={() => {
              props.setAddToDreams(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              const image = document.getElementById("src").value;
              const price = document.getElementById("price").value;
              const category = document.getElementById("category").value;
              const details = document.getElementById("details").value;
              if (!image || !price || !category || !details === null) {
                alert("You must fill in all fields");
              } else {
                props.setMain([
                  ...props.Maindata,
                  {
                    image: image,
                    price: price,
                    category: category,
                    details: details,
                  },
                ]);
                props.setAddToDreams(false);
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDreams;
