import React from "react";

import "./project.css";

function ProgressBar({ sqSize, strokeWidth, percentage,reference }) {

  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox} className="ok" ref={reference}>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <image
        href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Samsung_Galaxy_wordmark.svg/1024px-Samsung_Galaxy_wordmark.svg.png"
        height="150"
        width="80"
        x="40"
        className="svg-image"
      />
    </svg>
  );
}

ProgressBar.defaultProps = {
  sqSize: 100,
  percentage: 25,
  strokeWidth: 5,
};

export default ProgressBar;
