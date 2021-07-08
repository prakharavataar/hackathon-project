import React, { useEffect, useState, useRef } from "react";
import "../project.css";
import samsung from "../../assests/samsung.webp";
import gsap from "gsap";
import Section0 from "./Sections/Section0";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import ContentMiddle from "./ContentMiddle";
import Rating from "./Rating";
import MainContent from "./MainContent";
import ContentFooter from "./ContentFooter";
import ImageShowcase from "./ImageShowcase";
import flex from "../../assests/flex.gif";
import multi from "../../assests/multi.webp";
import camera from "../../assests/camera.jpeg";
import performance from "../../assests/performance.jpeg";
import design from "../../assests/design.jpeg";
import battery from "../../assests/battery.jpeg";
import Three from "../three";
import vr from "../../assests/ar.png";
import Popup from "./popup.js";
import qr from "../../assests/qr.jpeg"

function RightLayout({ rightLayoutChild, imageDisplay }) {
  //main Refs
  const section0 = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const imageShowcaseRef = useRef(null);
  const ratingRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const popup = useRef(null)

  //main states
  const [srcOfImage, setsrcOfImage] = useState(samsung);
  const [width, setWidth] = useState(300);
  const [buttonActive, setButtonActive] = useState(0);
  const [value, setValue] = useState(0);
  const [height, setHeight] = useState(600);
  const [modelAnimationValue, setmodelAnimationValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  const togglePopup = () => {
    const t1 = gsap.timeline();
    if(isOpen)
    t1.fromTo(popup.current, {autoAlpha:1},{autoAlpha:0,duration:.5,ease:"power1.in"}).call(open)
    else
    open()
 
  };

  function open(){
    setIsOpen(!isOpen);
  }

  function transition(value) {
    setButtonActive(value);
  }

  //change image from bottom slider
  function changeImage(value) {
    const image = document.getElementsByClassName("samsung")[0];
    setsrcOfImage(value);
    image.style.bottom = 175 + "px";
    gsap.fromTo(
      image,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: ".75", duration: 1, ease: "power1.out" }
    );
  }

  //set display of rightmost layout
  function sectionDisplay() {
    if (buttonActive === 0) {
      return (
        <Section0 section0={section0} buttonActive={buttonActive}></Section0>
      );
    } else if (buttonActive === 1) {
      return (
        <Section1 section1={section1} buttonActive={buttonActive}></Section1>
      );
    } else if (buttonActive === 2) {
      return (
        <Section2 section2={section2} buttonActive={buttonActive}></Section2>
      );
    } else {
      return (
        <Section3 section3={section3} buttonActive={buttonActive}></Section3>
      );
    }
  }

  //Button actions from left will change this sections images/models/gifs
  useEffect(() => {
    if (imageDisplay == -1) {
      ref1.current.style.display = "none";
      ref2.current.style.display = "block";
      setValue(1);
    } else {
      ref1.current.style.display = "block";
      ref2.current.style.display = "none";
    }

    if (imageDisplay == 1) {
      setsrcOfImage(design);
    } else if (imageDisplay == 2) {
      setsrcOfImage(multi);
    } else if (imageDisplay == 3) {
      setsrcOfImage(performance);
    } else if (imageDisplay == 4) {
      setsrcOfImage(battery);
    } else if (imageDisplay == 5) {
      setsrcOfImage(camera);
    } else if (imageDisplay == 0) {
      setsrcOfImage(flex);
    }

    const mainHeight = rightLayoutChild.current.children[0].offsetHeight;
    const heightImageShowcase = imageShowcaseRef.current.offsetHeight;
    const heightRating = ratingRef.current.offsetHeight;
    const heightOfSamsung = mainHeight - (heightImageShowcase + heightRating);
    const mainWidth = rightLayoutChild.current.children[0].offsetWidth;

    setWidth(mainWidth);
    setHeight(mainHeight);

    console.log(heightOfSamsung + "----" + mainWidth);
    const image = document.getElementsByClassName("samsung")[0];
    image.style.maxWidth = mainWidth - 200 + "px";
    image.style.maxHeight = heightOfSamsung + "px";
    image.style.bottom = 225 + "px";
    console.log("image display value --->" + imageDisplay);

    gsap.fromTo(
      image,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: ".9", duration: 1, ease: "power1.out" }
    );
  }, [imageDisplay]);

  return (
    <div className="rightLayout">
      <div className="rightLayoutMain"></div>
      <div className="rightLayoutChild" ref={rightLayoutChild}>
        {/* First Section containing images, gif's or any other assests */}
        <div className="rightLayoutChild0">
          <div style={{ display: "none" }} ref={ref1}>
            <Rating ratingRef={ratingRef}></Rating>
            <img src={srcOfImage} alt="samsung" className="samsung"></img>
            <ImageShowcase
              width={width}
              changeImage={changeImage}
              imageShowcaseRef={imageShowcaseRef}
            ></ImageShowcase>
          </div>
          <div style={{ display: "none" }} ref={ref2}>
            <div
              className="vrBox"
              data-toggle="tooltip"
              data-placement="top"
              title="AR - Mode"
              onClick={togglePopup}
            >
              <img src={vr} className="vr"></img>
            </div>
            <Three
              value={value}
              height={height - 200}
              width={width - 100}
              modelAnimationValue={modelAnimationValue}
            ></Three>
            <div className="bottomThreeButtonsContainer">
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
          </div>
        </div>
        {isOpen && (
          <Popup
            popup = {popup}
            content={
              <>
               <img src={qr} className="qr"></img>
              </>
            }
            handleClose={togglePopup}
          />
        )}

        <div className="rightLayoutChild1">
          {/* Second Section that remains constant throughout the view   */}
          <div className="first">
            <MainContent></MainContent>
            {sectionDisplay()}
            <ContentMiddle
              buttonActive={buttonActive}
              transition={transition}
            ></ContentMiddle>
            <ContentFooter></ContentFooter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightLayout;
