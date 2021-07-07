import React, { useState, useEffect ,useRef} from "react";
import Button from "./LeftLayout/Button";
import flex from "../assests/flex.gif";
import multi from "../assests/multi.webp";
import camera from "../assests/camera.jpeg";
import performance from "../assests/performance.jpeg";
import design from "../assests/design.jpeg";
import battery from "../assests/battery.jpeg";
import gsap from "gsap"
import Three from "./three"

function MainLayoutMobile({zvalue}) {
  const [buttonActive, setButtonActive] = useState(-1);
  const [srcOfImage, setsrcOfImage] = useState(flex);
  const [value, setValue] = useState(0)
  const [modelAnimationValue, setmodelAnimationValue] = useState(0)

  function setButton(value) {
    setButtonActive(value);
  }
 
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    console.log('z value ---', zvalue)

    if(zvalue){
      document.getElementsByClassName("mobileSection2")[0].style.zIndex = -1
      document.getElementsByClassName("mobileSection1")[0].style.visibility = "hidden"
    }
    else{
     document.getElementsByClassName("mobileSection2")[0].style.zIndex = 1
     document.getElementsByClassName("mobileSection1")[0].style.visibility = "visible"
    }
    const image = document.getElementsByClassName("imageMobile")[0];
    if (buttonActive == -1) {
      setValue(1)
      ref1.current.style.display = "block";
      ref2.current.style.display = "none";
    } else {
      ref1.current.style.display = "none";
      ref2.current.style.display = "block";
    }

    if (buttonActive == 1) {
      setsrcOfImage(design);
    } else if (buttonActive == 2) {
      setsrcOfImage(multi);
    } else if (buttonActive == 3) {
      setsrcOfImage(performance);
    } else if (buttonActive == 4) {
      setsrcOfImage(battery);
    } else if (buttonActive == 5) {
      setsrcOfImage(camera);
    } else if (buttonActive == 0) {
      setsrcOfImage(flex);
    }

    gsap.fromTo(
      image,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: ".9", duration: 1, ease: "power1.out" }
    );
  }, [buttonActive,zvalue]);

  return (
    <div className="mainMobileContainer">
      <div className="mobileSection1">
        <div ref={ref1} className="mobileSection1Child">
          <Three value={value} height="500" width="400" modelAnimationValue={modelAnimationValue}></Three>
        </div>
        <div className="mobileSection1Child">
        <img src={srcOfImage} className="imageMobile" ref={ref2}></img>
        </div>
      </div>
      <div className="bottomThreeButtonsContainer" style={{display:buttonActive== -1? 'flex' : 'none'}}>
              <button
                onClick={() => setmodelAnimationValue(0)}
                className={
                  "bottomThreeButtonsChild " +
                  (modelAnimationValue === 0 ? "active" : "")
                }
              >
                Rotation
              </button>
              <button
                onClick={() => setmodelAnimationValue(1)}
                className={
                  "bottomThreeButtonsChild " +
                  (modelAnimationValue === 1 ? "active" : "")
                }
              >
                Flex Mode
              </button>
              <button
                onClick={() => setmodelAnimationValue(2)}
                className={
                  "bottomThreeButtonsChild " +
                  (modelAnimationValue === 2 ? "active" : "")
                }
              >
                Free Viewing
              </button>
      </div>
      <div className="mobileSection2">
        <Button
          buttonName="Experience"
          setButton={setButton}
          value="-1"
          buttonActive={buttonActive}
          iconClass="fa fa-laptop"
        />
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
  );
}

export default MainLayoutMobile;
