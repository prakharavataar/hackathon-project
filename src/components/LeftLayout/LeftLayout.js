import React, { useState } from "react";
import Button from "./Button";
import logo from "../../assests/mainlogo.png";
import "../project.css";


function LeftLayout({
  priceAndButton,
  setbuttonValue,
  buttonSection,
  leftLayoutHeader,
}) {
  const [buttonActive, setbuttonActive] = useState("-1");

  function setButton(value) {
    console.log("value---leftLayout", value);
    setbuttonActive(value);
    setbuttonValue(value);
  }

  return (
    <div className="leftLayout">
      {/* first sectiong of left layout */}
      <div className="leftLayoutChild0" ref={leftLayoutHeader}>
        <img src={logo}></img>
      </div>

      {/* Section section of left layout */}
      <div className="leftLayoutChild1" ref={buttonSection}>
        {/* Z-fold written in absolute positioning */}
        <p className="innerText">Z-FOLD</p>
        {/* Button Section will be added here --> 3 button's in a Row -> total 2 Rows */}
        <div className="mainButtons">
          <div className="buttonContainer0">
            <Button
              buttonName="Experience"
              setButton={setButton}
              value="-1"
              buttonActive={buttonActive}
            />
          </div>
          <div className="buttonContainer1">
            <Button
              buttonName="Flex Mode"
              setButton={setButton}
              value="0"
              buttonActive={buttonActive}
              iconClass="fa fa-laptop"
            />
            <Button
              buttonName="Design"
              setButton={setButton}
              value="1"
              buttonActive={buttonActive}
              iconClass="fa fa-paint-brush"
            />
            <Button
              buttonName="Multitasking"
              setButton={setButton}
              value="2"
              buttonActive={buttonActive}
              iconClass="fa fa-window-restore"
            />
          </div>

          <div className="buttonContainer2">
            <Button
              buttonName="Performance"
              setButton={setButton}
              value="3"
              buttonActive={buttonActive}
              iconClass="fa fa-rocket"
            />
            <Button
              buttonName="Battery"
              setButton={setButton}
              value="4"
              buttonActive={buttonActive}
              iconClass="fa fa-battery-full"
            />
            <Button
              buttonName="Camera"
              setButton={setButton}
              value="5"
              buttonActive={buttonActive}
              iconClass="fa fa-camera"
            />
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
