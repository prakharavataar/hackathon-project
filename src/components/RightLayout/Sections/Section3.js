import { useEffect } from "react";
import gsap from "gsap";

const array = [
  "Voice Assistant",
  "High contrast theme, font, keyboard, and Internet",
  "Color inversion, adjustment, lens",
  "Magnifier window, widget",
  "Sound detectors",
  "Hearing aid support",
  "Left/right sound balance",
  "Mono audio",
  "Mute all sounds",
  "Live Transcribe/Caption on Android",
  "Amplify ambient sound",
  "Universal switch",
  "Assistant menu",
  "Interaction control",
  "Touch settings",
  "Mouse and Physical keyboard",
  "Direct access",
  "Flash notificatio",
];


function Section3({ section3, buttonActive }) {
  //transition
  useEffect(() => {
    if (buttonActive === 3) {
      gsap.fromTo(
        section3.current,
        { autoAlpha: 0 },
        {
          duration: 1.25,
          autoAlpha: 1,
        }
      );
    }
  }, [buttonActive]);

  return (
    <div className="section3" ref={section3} >
      <ul
        style={{ width: "100%", backgroundColor: "#F7F7F7",overflow: "scroll",borderRadius:'15px',maxHeight:'225px'}}
      >
        {array.map((item,index) => {
            return <li key={index} className="section3Li">{item}.</li>
        })}
      </ul>
    </div>
  );
}

export default Section3;
