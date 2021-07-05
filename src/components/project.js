import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import "./project.css";
import gsap from "gsap";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";

function Project() {
  //Percentage For The Progress Bar
  const [percentage, setState] = useState(0);

  //Ref For Different Div's
  const progressBar = useRef(null);
  const rightLayoutChild = useRef(null);
  const priceAndButton = useRef(null);
  const mainDiv = useRef(null);

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
        { height: 0, visibility: "hidden" },
        { height: "100vh", duration: 0.4, visibility: "visible", delay: 1 }
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
    const header = mainDiv.current.children[0];
    const leftLayout = mainDiv.current.children[1].children[0];
    const rightLayout = leftLayout.nextSibling.children[0];
    const rightChild = rightLayoutChild.current;

    const leftLayoutChild2 =
      document.getElementsByClassName("leftLayoutChild2")[0];

    const innerText = document.getElementsByClassName("innerText")[0];

    var tl = gsap.timeline();
    tl.fromTo(
      header,
      {
        height: 0,
      },
      { height: 50, duration: 0.5, ease: "power1.out" }
    )
      .from(leftLayout, {
        duration: 0.5,
        width: 0,
        ease: "power1.out",
      })
      .fromTo(
        [leftLayoutChild2, innerText],
        { visibility: "hidden" },
        { duration: 0.5, ease: "power1.in", visibility: "visible", delay: 0.5 }
      )
      .from(rightLayout, {
        duration: 0.5,
        width: 0,
        left: "100%",
        ease: "power1.out",
      })
      .fromTo(
        rightChild.children[0],
        { scale: 0 },
        { scale: 1, duration: 0.5, delay: 0.5 }
      )
      .fromTo(
        rightChild.children[1],
        { scale: 0 },
        { scale: 1, duration: 0.5 }
      );
    return tl;
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
        <div className="headers"></div>

        {/* mainLayout Section */}
        <div className="mainLayout">
          {/* Left Layout Containing the Buttons and Price, buy option */}
          <LeftLayout priceAndButton={priceAndButton}></LeftLayout>

          {/* Right Layout Containing two sections -> one with images and one with information */}
          <RightLayout rightLayoutChild={rightLayoutChild}></RightLayout>
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
