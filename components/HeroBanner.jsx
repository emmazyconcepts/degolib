import { urlFor } from "@/lib/client";
import Link from "next/link";
import React, { useEffect } from "react";

import headimg from "../public/hair4.png";
import Image from "next/image";

const HeroBanner = ({ HeroBanner }) => {
  useEffect(() => {
    console.log(HeroBanner.buttonText);
  });
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo text-white ">Selected Products Only !</p>
        <h3 className=" text-[#ab9574]">Natural Human Hair Especially for</h3>
        <h1 className=" ml-[3px] sm:ml-0">Black Women</h1>
        {/* <Image
          src={headimg}s
          alt="battery"
          className="hero-banner-image h-full"
        /> */}
        <div>
          <Link href={`/product/${HeroBanner.product}`}>
            <button className="">{HeroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            {/* <p className="text-[#ab9574]">UPTO 20% OFF</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
