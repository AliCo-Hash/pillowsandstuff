import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const MainBanner = ({ mainBanner }) => {
  return (
    <div className="main-banner-container">
      <div>
        <p className="sale-pillow">{mainBanner.smallText}</p>
        <h3>{mainBanner.midText}</h3>
        <h1>{mainBanner.largeText1}</h1>
        <img
          src={urlFor(mainBanner.image)}
          alt="pillows"
          className="main-banner-image"
        />

        <div>
          <Link href={`/merchandise/${mainBanner.merchandise}`}>
            <button type="button">{mainBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{mainBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
