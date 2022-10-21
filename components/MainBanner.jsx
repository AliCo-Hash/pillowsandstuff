import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="main-banner-container">
      <div>
        <p className="panda-pillow">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt="pillows" className="main-banner-image" />

        <div>
          <Link href="/merchandise/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
