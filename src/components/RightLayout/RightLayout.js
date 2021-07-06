import React, { useEffect, useState, useRef } from "react";
import "../project.css";
import samsung from "../../assests/samsung.webp";
import fold from "../../assests/fold.jpeg";
import camera from "../../assests/camera.jpg";
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


function RightLayout({ rightLayoutChild, imageDisplay }) {
  //main Refs
  const section0 = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const [srcOfImage, setsrcOfImage] = useState(fold);
  const [width, setWidth] = useState(300)
  const [buttonActive, setButtonActive] = useState(0);

  function transition(value) {
    setButtonActive(value);
  }

  function changeImage(value){
    const image = document.getElementsByClassName("samsung")[0];
    // if(value == 0)
    // setsrcOfImage(samsung);
    // else if (value == 1)
    // setsrcOfImage(camera);
    // else if (value == 2)
    // setsrcOfImage(fold)
    // else
    // setsrcOfImage(samsung)
    setsrcOfImage(samsung)
    gsap.fromTo(
      image,
      { visibility: "hidden", scale: 0 },
      { visibility: "visible", scale: ".8", duration: 1, ease: "power1.out" }
    );
  }

  function sectionDisplay() {
    if (buttonActive === 0) {
      return (
        <Section0
          section0={section0}
          buttonActive={buttonActive}
        ></Section0>
      );
    } else if (buttonActive === 1) {
      return (
        <Section1
          section1={section1}
          buttonActive={buttonActive}
        ></Section1>
      );
    } else if (buttonActive === 2) {
      return (
        <Section2
          section2={section2}
          buttonActive={buttonActive}
        ></Section2>
      );
    } else {
      return (
        <Section3
          section3={section3}
          buttonActive={buttonActive}
        ></Section3>
      );
    }
  }


  //Button actions from left will change this sections images/models/gifs
  useEffect(() => {
    const width = document.getElementsByClassName("rightLayoutChild0")[0].offsetWidth;
    setWidth(width)
    const image = document.getElementsByClassName("samsung")[0];
    console.log('image display value --->'+ imageDisplay)
    if (imageDisplay == 1) {
      setsrcOfImage(camera);
    } else if (imageDisplay == 2) {
      setsrcOfImage(fold);
    } else {
      setsrcOfImage(samsung);
    }

    gsap.fromTo(
      image,
      { visibility: "hidden", scale: 0 },
      { visibility: "visible", scale: ".8", duration: 1, ease: "power1.out" }
    );

  }, [imageDisplay]);

  return (
    <div className="rightLayout">
      <div className="rightLayoutMain"></div>
      <div className="rightLayoutChild" ref={rightLayoutChild}>
        {/* First Section containing images, gif's or any other assests */}
        <div className="rightLayoutChild0">
          <Rating></Rating>
          <img src={srcOfImage} alt="samsung" className="samsung"></img>
          <ImageShowcase width={width} changeImage={changeImage}></ImageShowcase>
        </div>
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
