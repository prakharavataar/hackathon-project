import React from "react";
import samsung from "../../assests/mainlogo.png";
function MainContent() {
  return (
    <>
      <div className="contentHeader">
        <img src={samsung} />
      </div>
      <div className="contentDesc">
        This cutting-edge smartphone puts powerful performance and a large
        immersive display all in the palm of your hand
      </div>
    </>
  );
}

export default MainContent;
