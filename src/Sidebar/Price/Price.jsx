import React from "react";
import "./Price.css";

const Price = () => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>500-1500р.
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>1500-5000р.
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>5000-15000р.
        </label>
      </div>
    </>
  );
};

export default Price;
