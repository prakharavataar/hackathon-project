import React from "react";

function Button({ buttonName, setButton, value, buttonActive, iconClass }) {
  function set(value) {
    setButton(value);
  }

  return (
    <div className="container">
      <a
        href="#"
        className={
          "btnLeftLayout btn " + (buttonActive == value ? "buttonActive" : "")
        }
        onClick={() => set(value)}
      >
        <div className="icon">
          {iconClass != "" ? (
            <i className={iconClass} aria-hidden="true"></i>
          ) : (
            ""
          )}
        </div>
        <div>{buttonName}</div>
      </a>
    </div>
  );
}

export default Button;
