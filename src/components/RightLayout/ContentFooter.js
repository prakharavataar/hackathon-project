import React from "react";
import "font-awesome/css/font-awesome.min.css";
function ContentFooter() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <div className="footer-subscription">
        <ul>
          <button
            className="rightLayoutFooterButton"
            onClick={() =>
              openInNewTab("https://www.facebook.com/SamsungIndia")
            }
          >
            <i className="fa fa-facebook-square" style={{ fontSize: 24 }}></i>
          </button>
          <button
            className="rightLayoutFooterButton"
            onClick={() => openInNewTab("https://twitter.com/samsungindia")}
          >
            <i className="fa fa-twitter-square" style={{ fontSize: 24 }}></i>
          </button>
          <button
            className="rightLayoutFooterButton"
            onClick={() =>
              openInNewTab("https://www.instagram.com/samsungindia/")
            }
          >
            <i className="fa fa-instagram" style={{ fontSize: 24 }}></i>
          </button>
          <button
            className="rightLayoutFooterButton"
            onClick={() =>
              openInNewTab("https://www.youtube.com/user/Samsungmobileindia")
            }
          >
            <i className="fa fa-youtube-play" style={{ fontSize: 24 }}></i>
          </button>
          <button
            className="rightLayoutFooterButton"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/company/samsung-india")
            }
          >
            <i className="fa fa-linkedin-square" style={{ fontSize: 24 }}></i>
          </button>
        </ul>
      </div>
    </>
  );
}

export default ContentFooter;
