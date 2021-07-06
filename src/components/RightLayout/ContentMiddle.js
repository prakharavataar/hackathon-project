import React from "react";

function ContentMiddle({ transition, buttonActive }) {
  return (
    <>
      <div className="contentMiddle">
        <div
          onClick={() => transition(0)}
          className={
            "specs " + (buttonActive === 0 ? "specsButtonActive" : null)
          }
        >
          <div className="specsLeft">What you'll love</div>
          <div className="specsRight">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <div
          onClick={() => transition(1)}
          className={
            "specs " + (buttonActive === 1 ? "specsButtonActive" : null)
          }
        >
          <div className="specsLeft">Technical Specification</div>
          <div className="specsRight">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <div
          onClick={() => transition(2)}
          className={
            "specs " + (buttonActive === 2 ? "specsButtonActive" : null)
          }
        >
          <div className="specsLeft">Reviews</div>
          <div className="specsRight">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <div
          onClick={() => transition(3)}
          className={
            "specs " + (buttonActive === 3 ? "specsButtonActive" : null)
          }
        >
          <div className="specsLeft">More about this device</div>
          <div className="specsRight">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentMiddle;
