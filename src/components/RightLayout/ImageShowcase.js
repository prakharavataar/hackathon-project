import React from "react";
import samsung from "../../assests/samsung.webp";
import fold from "../../assests/fold.jpeg";
import camera from "../../assests/camera.jpg"

function ImageShowcase({width, changeImage}) {
  return (
    <div className="imageShowcase" style={{width:width}}>
      <div>
        {" "}
        <img src={samsung} onClick={()=>changeImage(0)}></img>
      </div>
      <div>
        {" "}
        <img src={camera} onClick={()=>changeImage(1)}></img>
      </div>{" "}
      <div>
        {" "}
        <img src={fold} onClick={()=>changeImage(2)}></img>
      </div>{" "}
      <div>
        {" "}
        <img src={samsung} onClick={()=>changeImage(3)}></img>
      </div>{" "}
      <div>
        {" "}
        <img src={camera} onClick={()=>changeImage(4)}></img>
      </div>{" "}
    </div>
  );
}

export default ImageShowcase;
