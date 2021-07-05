import React,{ useState} from "react";
import "./project.css";

function LeftLayout({ priceAndButton, setbuttonValue }) {

  const [buttonActive, setbuttonActive] = useState(0)

  function setButton(value){
      setbuttonActive(value)
      setbuttonValue(value)
  }

  return (
    <div className="leftLayout">
      {/* first sectiong of left layout */}
      <div className="leftLayoutChild0"></div>

      {/* Section section of left layout */}
      <div className="leftLayoutChild1">
        {/* Z-fold written in absolute positioning */}
        <p className="innerText">Z-FOLD</p>
        {/* Button Section will be added here --> 3 button's in a Row -> total 2 Rows */}
        <div className="mainButtons">
          <div className="mainButtonsChild">
            <button onClick={()=>setButton(0)}  className={buttonActive === 0 ? 'buttonActive': null}>default</button>
          </div>
          <div className="mainButtonsChild">
            <button onClick={()=>setButton(1)}  className={buttonActive === 1 ? 'buttonActive': null}>camera</button>
          </div>
          <div className="mainButtonsChild">
            <button onClick={()=>setButton(2)} className={buttonActive === 2 ? 'buttonActive': null} >fold</button>
          </div>
        </div>
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
