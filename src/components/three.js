import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import galaxy from "../assests/galaxy_phone/scene1.glb";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect } from "react";
import gsap from "gsap";

function Three({ value, height, width, modelAnimationValue }) {
  let clock;
  let mixer;

  //Three.js load (if needed)

  function threeLoad(height, width, play, rotate) {
    console.log(height, width);
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
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(mainRefWidth, mainRefHeight);
    renderer.setClearColor(0x000000, 0);
    console.log(scene);
    const controls = new OrbitControls(camera, canvas);
    controls.update();
    let mesh = null;

    loader.load(
      galaxy,
      (gltf) => {
        mesh = gltf.scene;
        console.log(mesh);
        scene.add(gltf.scene);
        mixer = new THREE.AnimationMixer(mesh);
        if (play) {
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }
        gltf.scene.scale.set(30, 30, 30);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log("An error happened");
      }
    );
    const color = 0xffffff;
    const intensity = 8;
    const lightAmbient = new THREE.AmbientLight(color, intensity);
    scene.add(lightAmbient);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 0.5, 1);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-1, -0.5, -1);
    scene.add(directionalLight2);

    renderer.render(scene, camera);
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer && play) mixer.update(delta * 0.3);
      if (mesh && rotate) {
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
        { autoAlpha: 1, scale: 1, duration: 1, ease: "power1.out" }
      );
      let flex = 0;
      let rotate = 0;
      if (modelAnimationValue === 0) {
        rotate = 1;
        flex = 0;
      } else if (modelAnimationValue === 1) {
        rotate = 0;
        flex = 1;
      } else {
        rotate = 0;
        flex = 0;
      }
      threeLoad(height, width, flex, rotate);
    }
  }, [value, modelAnimationValue]);

  return <canvas className="webgl"></canvas>;
}

export default Three;
