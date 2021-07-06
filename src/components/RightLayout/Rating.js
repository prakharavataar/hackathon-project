import React from "react";
import starRating from "../../assests/starRating.png";

function Rating({ratingRef}) {
  return (
    <>
      <div className="ratingDiv" ref={ratingRef}>
        <div className="ratingDivLeft">
          <img
            src={starRating}
            alt="4.5/5"
            classsName="starRating"
            className="abc"
          ></img>
          <p className="ratingText">4.5/5 (533)</p>
        </div>
        <div className="ratingDivright">
          <div className="colorCircle bronze"></div>
          <div className="colorCircle black"></div>
        </div>
      </div>
    </>
  );
}

export default Rating;
