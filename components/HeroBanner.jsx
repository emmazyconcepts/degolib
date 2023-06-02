import { urlFor } from "@/lib/client";
import Link from "next/link";
import React, { useEffect } from "react";

import headimg from "../public/hair1.png";
import Image from "next/image";

const HeroBanner = ({ HeroBanner }) => {
  useEffect(() => {
    console.log(HeroBanner.buttonText);
  });
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{HeroBanner.smallText}</p>
        <h3>{HeroBanner.midText}</h3>
        <h1>{HeroBanner.largeText1}</h1>
        <Image
          src={headimg}
          alt="battery"
          className="hero-banner-image w-full h-full"
        />

        <div>
          <Link href={`/product/${HeroBanner.product}`}>
            <button>{HeroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{HeroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
