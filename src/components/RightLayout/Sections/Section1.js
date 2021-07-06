import { useEffect} from "react";
import gsap from "gsap";
import samsung1 from "../../../assests/samsung1.png"
import samsung2 from "../../../assests/samsung2.png"
import samsung3 from "../../../assests/samsung3.png"

function Section1({ section1, buttonActive }) {

  //transition
  useEffect(() => {
    if (buttonActive === 1) {
      gsap.fromTo(
        section1.current,
        { autoAlpha: 0 },
        {
          duration: 1.25,
          autoAlpha: 1,
        }
      );
    }
  }, [buttonActive]);

  return (
    <div className="contentButtons sections1" ref={section1}>
      <div className="section1">
        <img src={samsung1} alt='samsung1'></img>
        <img src={samsung2} alt='samsung1'></img>
        <img src={samsung3} alt='samsung1'></img>
        <p>Click here to show all the specifications</p>
      </div>

    </div>
  );
}

export default Section1;
