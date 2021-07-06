import ReactPlayer from "react-player";
import { useEffect } from "react";
import gsap from "gsap";

function Section0({ section0, buttonActive }) {

  //transition 
  useEffect(() => {
    if (buttonActive === 0) {
      gsap.fromTo(
        section0.current,
        { autoAlpha: 0 },
        {
          duration: 1.25,
          autoAlpha: 1,
        }
      );
    }

  }, [buttonActive]);

  return (
    <div ref={section0} className="section0">   
      <div className="youtubeVideo">
        <ReactPlayer
          className="video"
          url="https://www.youtube.com/watch?v=VTrMz9uBB34"
          width="100%"
          height="225px"
        />
      </div>
    </div>
  );
}

export default Section0;
