import React from "react";
import "./AddDreams.css";

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
            <ul>
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
              const a = document.getElementById("src").value;
              const b = document.getElementById("details").value;
              const c = document.getElementById("category").value;
              const d = document.getElementById("price").value;

              props.setMain([
                ...props.Maindata,
                {
                  image: a,
                  price: b,
                  category: c,
                  details: d,
                },
              ]);
              props.setAddToDreams(false);
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
