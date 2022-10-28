import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Merchandise = ({ merchandise: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/merchandise/${slug.current}`}>
        <div className="merchandise-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="merchandise-image"
          />
          <p className="merchandise-name">{name}</p>
          <p className="merchandise-price">£{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Merchandise;
