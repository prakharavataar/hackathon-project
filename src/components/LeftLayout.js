import React from "react";
import "./project.css";

function LeftLayout({ priceAndButton }) {
  return (
    <div className="leftLayout">
      {/* first sectiong of left layout */}
      <div className="leftLayoutChild0"></div>

      {/* Section section of left layout */}
      <div className="leftLayoutChild1">
        {/* Z-fold written in absolute positioning */}
        <p className="innerText">Z-FOLD</p>
        {/* Button Section will be added here --> 3 button's in a Row -> total 2 Rows */}
      </div>

      {/* third section of left layout */}
      <div className="leftLayoutChild2" ref={priceAndButton}>
        <div className="price p">
          <div className="price-title">Price</div>
          <div className="price-amount">$1000</div>
        </div>
        <div className="buy p">
          <button className="buyButton">+ Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default LeftLayout;
