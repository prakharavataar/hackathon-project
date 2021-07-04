import * as THREE from 'three';


window.THREE = THREE; // THREE.NRRDLoader expects THREE to be a global object
require("three/examples/jsm/loaders/GLTFLoader.js");


export default window.THREE;
