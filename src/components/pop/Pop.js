import React from "react";
import "./Pop.css";
//Developed by Javier Giberg
function Pop(props) {
  return (
    <div className="Pop_Background">
      <div className="Pop_Container">
        <div className="Pop_titleCloseBtn">
          <button
            onClick={() => {
              props.setPop(false);
            }}
          >
            X
          </button>
        </div>
        <div className="Pop_title">
          <h2>Go to profile and withdraw your salary</h2>
        </div>

        <div className="Pop_footer">
          <button
            onClick={() => {
              props.setPop(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              props.setPop(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pop;
