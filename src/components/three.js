import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import galaxy from "../assests/galaxy_phone/scene.glb";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect } from "react";
import gsap from "gsap";

function Three({ value, height , width }) {
  let clock;
  //Three.js load (if needed)

  function threeLoad(height, width) {
    console.log(height, width)
    const scene = new THREE.Scene();
    clock = new THREE.Clock();
    const mainRefHeight = height;
    const mainRefWidth = width;
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(
      75,
      mainRefWidth / mainRefHeight,
      0.1,
      1000
    );
    const loader = new GLTFLoader();
    const canvas = document.querySelector("canvas.webgl");
    const renderer = new THREE.WebGLRenderer({ canvas , alpha: true});
    renderer.setSize(mainRefWidth, mainRefHeight);
    renderer.setClearColor( 0x000000, 0 );
    console.log(scene);
    const controls = new OrbitControls(camera, canvas);
    controls.update();
    let mesh = null;
    loader.load(
      galaxy,
      (gltf) => {
        mesh = gltf.scene;
        scene.add(gltf.scene);
        gltf.scene.scale.set(2.6, 2.6, 2.6);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log("An error happened");
      }
    );
    const color = 0xFFFFFF;
    const intensity = 5;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);

    renderer.render(scene, camera);
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mesh) {
        mesh.rotation.y += delta * 0.8;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }

  useEffect(() => {
    if (value == 1) {
      gsap.fromTo(
        document.getElementsByClassName("webgl")[0],
        { autoAlpha: 0, scale: 0 },
        { autoAlpha: 1, scale: "1", duration: 1, ease: "power1.out" }
      );
      threeLoad(height, width);
    }
  }, [value]);

  return <canvas className="webgl"></canvas>;
}

export default Three;
