import React from "react";
import Buttons from "../components/Buttons";
import "./Recomended.css";

const Recomended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns">All Products</button>
          <button className="btns">Shtoorm</button>
          <button className="btns">Makita</button>
          <button className="btns">Bosh</button>
        </div>
      </div>
    </>
  );
};

export default Recomended;
