import { useEffect } from "react";
import gsap from "gsap";
import "./reviews.css";
import "font-awesome/css/font-awesome.min.css";
function Section2({ section2, buttonActive }) {
  //transition
  useEffect(() => {
    if (buttonActive === 2) {
      gsap.fromTo(
        section2.current,
        { autoAlpha: 0 },
        {
          duration: 1.25,
          autoAlpha: 1,
        }
      );
    }

    const progressDone = document.querySelectorAll(".progress-done");

    progressDone.forEach((progress) => {
      progress.style.width = progress.getAttribute("data-done") + "%";
    });


  }, [buttonActive]);

  return (
    <div ref={section2}>
      <div className="reviews-container">
        <h2>Reviews</h2>
        <div className="review">
          <span className="icon-container">
            5 <i className="fa fa-star"></i>
          </span>
          <div className="progress">
            <div className="progress-done" data-done="45"></div>
          </div>
          <span className="percent">45%</span>
        </div>
        <div className="review">
          <span className="icon-container">
            4 <i className="fa fa-star"></i>
          </span>
          <div className="progress">
            <div className="progress-done" data-done="70"></div>
          </div>
          <span className="percent">50%</span>
        </div>
        <div className="review">
          <span className="icon-container">
            3 <i className="fa fa-star"></i>
          </span>
          <div className="progress">
            <div className="progress-done" data-done="5"></div>
          </div>
          <span className="percent">5%</span>
        </div>
        <div className="review">
          <span className="icon-container">
            2 <i className="fa fa-star"></i>
          </span>
          <div className="progress">
            <div className="progress-done" data-done="3"></div>
          </div>
          <span className="percent">3%</span>
        </div>
        <div className="review">
          <span className="icon-container">
            1 <i className="fa fa-star"></i>
          </span>
          <div className="progress">
            <div className="progress-done" data-done="7"></div>
          </div>
          <span className="percent">7%</span>
        </div>
      </div>
    </div>
  );
}

export default Section2;
