import React, { useEffect } from "react";

function Button({ buttonName, setButton, value, buttonActive, iconClass }) {
  useEffect(() => {
    console.log(buttonActive + "----" + value);
  }, [buttonActive, value]);

  return (
    <div className="container">
      <a
        href="#"
        className={
          "btnLeftLayout btn " +
          (buttonActive === value ? "buttonActive" : "")
        }
        onClick={() => setButton(value)}
      >
        <div className="icon">
          <i className={iconClass} aria-hidden="true"></i>
        </div>
        <div>{buttonName}</div>
      </a>
    </div>
  );
}

export default Button;
