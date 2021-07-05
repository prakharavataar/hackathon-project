import React from "react";
import "./project.css";
// import THREE from "./three";
import samsung from "../assests/samsung.webp";

function RightLayout({ rightLayoutChild }) {


  //Three.js load (if needed)
  //   function threeLoad() {
  //     const scene = new THREE.Scene();
  //     const mainRefHeight = rightLayoutChild.current.children[1].offsetHeight;
  //     const mainRefWidth = rightLayoutChild.current.children[1].offsetWidth;
  //     scene.background = new THREE.Color("white");
  //     const camera = new THREE.PerspectiveCamera(
  //       75,
  //       mainRefWidth / mainRefHeight,
  //       0.1,
  //       1000
  //     );
  //     const canvas = document.querySelector("canvas.webgl");
  //     const renderer = new THREE.WebGLRenderer({ canvas });
  //     renderer.setSize(mainRefWidth, mainRefHeight);

  //     const spotLight = new THREE.SpotLight({ color: 0xffffff });
  //     spotLight.position.set(100, 1000, 100);
  //     spotLight.castShadow = true;
  //     spotLight.shadow.mapSize.width = 1024;
  //     spotLight.shadow.mapSize.height = 1024;

  //     spotLight.shadow.camera.near = 500;
  //     spotLight.shadow.camera.far = 4000;
  //     spotLight.shadow.camera.fov = 30;

  //     scene.add(spotLight);

  //     renderer.render(scene, camera);
  //     camera.position.z = 5;
  //     const animate = function () {
  //       requestAnimationFrame(animate);
  //       renderer.render(scene, camera);
  //     };
  //     animate();
  //   }

  return (
    <div className="rightLayout">
      <div className="rightLayoutMain"></div>
      <div className="rightLayoutChild" ref={rightLayoutChild}>
        {/* First Section containing images, gif's or any other assests */}
        <div className="rightLayoutChild0">
          <img src={samsung} alt="samsung" className="samsung"></img>
        </div>
        <div className="rightLayoutChild1">
          {/* Second Section that remains constant throughout the view   */}
          {/* <canvas className="webgl"></canvas> */}
          <div className="first">
            <div className="contentHeader">Samsung Galaxy</div>
            <div className="contentDesc">
              Meet the phone that's changing the shape of the future.This
              cutting-edge smartphone puts powerful performance and a large
              immersive display all in the palm of your hand
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
  );
}

export default RightLayout;
