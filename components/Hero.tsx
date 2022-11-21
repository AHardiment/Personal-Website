import React from "react";
import Image from "next/image";
import heroimg from "../public/hero-img.jpeg";

const Hero = () => {
  return (
    <div>
      <Image
        className="w-40 h-40 object-scale-down rounded-full ring-2 ring-white"
        src={heroimg}
        alt="hero"
      />
    </div>
  );
};

export default Hero;
