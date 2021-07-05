import React, { useEffect, useState } from "react";
import "./project.css";
// import THREE from "./three";
import samsung from "../assests/samsung.webp";
import fold from "../assests/fold.jpeg";
import camera from "../assests/camera.jpg";
import starRating from "../assests/starRating.png"
import gsap from "gsap";
import ReactPlayer from "react-player";
import 'font-awesome/css/font-awesome.min.css';

function RightLayout({ rightLayoutChild, imageDisplay }) {

  const [srcOfImage, setsrcOfImage] = useState(samsung);


  //Button actions
  useEffect(() => {
    const image = document.getElementsByClassName("samsung")[0];
    if (imageDisplay === 1) {
      setsrcOfImage(camera);
    } else if (imageDisplay === 2) {
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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="rightLayout">
      <div className="rightLayoutMain"></div>
      <div className="rightLayoutChild" ref={rightLayoutChild}>
        {/* First Section containing images, gif's or any other assests */}
        <div className="rightLayoutChild0">
          
          <img src= {starRating} alt="4.5/5" classsName="starRating" className="abc"></img><div className="ratingText">4.5/5 (533)</div>
          <img src={srcOfImage} alt="samsung" className="samsung"></img>
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
            <div className="youtubeVideo">
              <ReactPlayer
                className="video"
                url="https://www.youtube.com/watch?v=VTrMz9uBB34"
                width="100%"
                height="100%"
              />
            </div>
            <div className="contentMiddle">
              <div className="specs">
                <div className="specsLeft">Technical Specification</div>
                <div className="specsRight">&#62;</div>
              </div>
              <div className="specs">
                <div className="specsLeft">Reviews</div>
                <div className="specsRight">&#62;</div>
              </div>
              <div className="specs">
                <div className="specsLeft">What you'll love</div>
                <div className="specsRight">&#62;</div>
              </div>
              {/* <div className="specs">
                <div className="specsLeft">More about this devicea</div>
                <div className="specsRight">&#62;</div>
              </div> */}
            </div>
            {/* <div className="contentFooter"> */}
              <section className='footer-subscription'>
                <ul>
                    <button className="btn" onClick={() => openInNewTab('https://www.facebook.com/SamsungIndia')}><i className="fa fa-facebook-square" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://twitter.com/samsungindia')}><i className="fa fa-twitter-square" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://www.instagram.com/samsungindia/')}><i className="fa fa-instagram" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://www.youtube.com/user/Samsungmobileindia')}><i className="fa fa-youtube-play" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://www.linkedin.com/company/samsung-india')}><i className="fa fa-linkedin-square" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://api.whatsapp.com/send?phone=91180057267864&text=&source=&data=')}><i className="fa fa-whatsapp" style={{fontSize:24}}></i></button>
                </ul>
              </section>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightLayout;
