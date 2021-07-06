import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import "./project.css";
import gsap from "gsap";
import LeftLayout from "./LeftLayout/LeftLayout";
import RightLayout from "./RightLayout/RightLayout";
import Header from "./Header/Header";

function Project() {
  //Percentage For The Progress Bar
  const [percentage, setState] = useState(0);
  //Image number to display based on button press no
  const [imageDisplay, setImageDisplay] = useState(-1);

  //Ref For Different Div's
  const progressBar = useRef(null);
  const rightLayoutChild = useRef(null);
  const priceAndButton = useRef(null);
  const buttonSection = useRef(null);
  const mainDiv = useRef(null);
  const leftLayoutHeader = useRef(null);

  //Progress Bar Load On Init
  function load() {
    console.log("load");
    for (let index = 0; index < 100; index++) {
      setTimeout(() => {
        setState(index);
      }, 5 * (index + 1));
    }
  }

  //First Set Of Animations
  function first() {
    var tl = gsap.timeline();

    tl.to(progressBar.current, {
      visibility: "hidden",
      scale: 0,
    })
      .to(progressBar.current, {
        duration: 0.4,
        visibility: "visible",
        delay: 0.5,
        ease: "bounce",
        scale: 1,
      })
      .call(load, null, ">")
      .fromTo(
        mainDiv.current,
        { height: 0, autoAlpha: 0 },
        { height: "100vh", duration: 0.4, autoAlpha: 1, delay: 1 }
      )
      .to(progressBar.current, {
        duration: 0.4,
        y: 500,
        delay: -0.5,
        display: "none",
      });
    return tl;
  }

  //Second Set Of Animations
  function second() {
    const leftLayout = mainDiv.current.children[1].children[0];
    const rightLayout = leftLayout.nextSibling.children[0];
    const rightChild = rightLayoutChild.current;

    const leftLayoutChild2 =
      document.getElementsByClassName("leftLayoutChild2")[0];

    var tl = gsap.timeline();
    tl.from(leftLayout, {
      duration: 0.3,
      width: 0,
      ease: "power1.out",
    })
      .fromTo(
        [leftLayoutChild2],
        { autoAlpha: 0 },
        { duration: 0.3, ease: "power1.in", autoAlpha: 1, delay: 0.5 }
      )
      .fromTo(
        [buttonSection.current,leftLayoutHeader.current],
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3 }
      )
      .from(rightLayout, {
        duration: 0.4,
        width: 0,
        left: "100%",
        ease: "power1.out",
      })
      .fromTo(
        rightChild.children[0],
        { scale: 0 },
        { scale: 1, duration: 0.4, delay: 0.4 }
      )
      .fromTo(
        rightChild.children[1],
        { scale: 0 },
        { scale: 1, duration: 0.4 }
      );
    return tl;
  }

  function setbuttonValue(value) {
    console.log(value);
    setImageDisplay(value);
  }

  useEffect(() => {
    // Master timeline...
    var master = gsap.timeline();
    master.add(first()).add(second(), "+=.2");
  }, []);

  return (
    <>
      <div className="mainDiv" ref={mainDiv}>
        {/* Header Section */}
        <div className="headers">
          <Header></Header>
        </div>

        {/* mainLayout Section */}
        <div className="mainLayout">
          {/* Left Layout Containing the Buttons and Price, buy option */}
          <LeftLayout
            priceAndButton={priceAndButton}
            setbuttonValue={setbuttonValue}
            buttonSection={buttonSection}
            leftLayoutHeader={leftLayoutHeader}
          ></LeftLayout>

          {/* Right Layout Containing two sections -> one with images and one with information */}
          <RightLayout
            rightLayoutChild={rightLayoutChild}
            imageDisplay={imageDisplay}
          ></RightLayout>
        </div>
      </div>

      {/* Progress bar */}
      <ProgressBar
        strokeWidth="13"
        sqSize="150"
        percentage={percentage}
        reference={progressBar}
      />
    </>
  );
}

export default Project;
