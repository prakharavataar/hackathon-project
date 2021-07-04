import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import "./project.css";
import gsap from "gsap";
import THREE from "./three";
import logo from "../assests/samsung.gif";

function Project() {
  const [percentage, setState] = useState(0);
  const progressBar = useRef(null);
  const rightLayoutChild = useRef(null);
  const priceAndButton = useRef(null);
  const mainDiv = useRef(null);
  function load() {
    console.log("load");
    for (let index = 0; index < 100; index++) {
      setTimeout(() => {
        setState(index);
      }, 5 * (index + 1));
    }
  }

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

  function second() {
    const header = mainDiv.current.children[0];
    const leftLayout = mainDiv.current.children[1].children[0];
    const rightLayout = leftLayout.nextSibling.children[0];
    const rightChild = rightLayoutChild.current;
    const leftLayoutChild2 =
      document.getElementsByClassName("leftLayoutChild2")[0];
    const innerText = document.getElementsByClassName("innerText")[0];
    console.log(leftLayoutChild2);
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

  function third() {
    const scene = new THREE.Scene();
    const mainRefHeight = rightLayoutChild.current.children[1].offsetHeight;
    const mainRefWidth = rightLayoutChild.current.children[1].offsetWidth;
    scene.background = new THREE.Color("white");
    const camera = new THREE.PerspectiveCamera(
      75,
      mainRefWidth / mainRefHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector("canvas.webgl");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(mainRefWidth, mainRefHeight);

    const spotLight = new THREE.SpotLight({ color: 0xffffff });
    spotLight.position.set(100, 1000, 100);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    scene.add(spotLight);

    renderer.render(scene, camera);
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }

  useEffect(() => {
    // Master timeline...
    console.log(THREE);
    var master = gsap.timeline();
    master.add(first()).add(second(), "+=.2");
  }, []);

  return (
    <>
      <div className="mainDiv" ref={mainDiv}>
        <div className="headers"></div>
        <div className="mainLayout">
          <div className="leftLayout">
            <div className="leftLayoutChild0"></div>
            <div className="leftLayoutChild1">
              <p className="innerText">Z-FOLD</p>
            </div>
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
          <div className="rightLayout">
            <div className="rightLayoutMain">
              {/* <img src={logo} alt="loading..."  /> */}
            </div>
            <div className="rightLayoutChild" ref={rightLayoutChild}>
              <div className="rightLayoutChild0"></div>
              <div className="rightLayoutChild1">
                {/* <canvas className="webgl"></canvas> */}
                <div className="first">
                  <div className="contentHeader">Samsung Galaxy</div>
                  <div className="contentDesc">
                    Meet the phone that's changing the shape of the future.This
                    cutting-edge smartphone puts powerful performance and a
                    large immersive display all in the palm of your hand
                  </div>
                  <div className="contentButtons">
                    <div className="contentButton">Design</div>
                    <div className="contentButton">Flex mode</div>
                    <div className="contentButton">Camera</div>
                    <div className="contentButton">Performance</div>
                  </div>
                  <div className="contentFooter"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
