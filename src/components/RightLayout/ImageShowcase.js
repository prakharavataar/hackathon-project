import React from "react";
import samsungspecs1 from "../../assests/samsungspecs1.jpg"
import samsungspecs6 from "../../assests/samsungspecs6.png"
import samsungspecs3 from "../../assests/samsungspecs3.png"
import samsungspecs4 from "../../assests/samsungspecs4.png"
import samsungspecs5 from "../../assests/samsungspecs5.png"

function ImageShowcase({width, changeImage,imageShowcaseRef}) {
  return (
    <div className="imageShowcase" style={{width:width}} ref={imageShowcaseRef}>
      <div>
        {" "}
        <img src={samsungspecs1} onClick={()=>changeImage(samsungspecs1)}></img>
      </div>
      <div>
        {" "}
        <img src={samsungspecs6} onClick={()=>changeImage(samsungspecs6)}></img>
      </div>{" "}
      <div>
        {" "}
        <img src={samsungspecs3} onClick={()=>changeImage(samsungspecs3)}></img>
      </div>{" "}
      <div>
        {" "}
        <img src={samsungspecs4} onClick={()=>changeImage(samsungspecs4)}></img>
      </div>{" "}
      <div>
        {" "}
        <img src={samsungspecs5} onClick={()=>changeImage(samsungspecs5)}></img>
      </div>{" "}
    </div>
  );
}

export default ImageShowcase;
