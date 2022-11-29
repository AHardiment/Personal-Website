import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import carouselImg2 from "../public/casual-img.jpg";

const AboutDetails = () => {
  return (
    <div className="about-details m-0 mx-auto h-full max-w-5xl md:mt-10">
      <div className="">
        <h1 className="mx-5 mt-3 text-3xl font-bold md:text-6xl">About Me:</h1>
        <p className="mx-5 mt-5 text-justify text-xl md:mt-5 md:text-2xl">
          My name is Alex Hardiment, and I am a full-stack web developer based
          in the UK.
        </p>
        <p className="mx-5 mt-3 text-justify text-xl md:mt-3 md:text-2xl">
          Earlier this year, I rediscovered my passion for software development
          and decided that this would be the moment I gave it my all.
        </p>
        <p className="mx-5 mt-3 text-justify text-xl md:mt-3 md:text-2xl">
          This site is a glimpse at that journey.
        </p>
      </div>
      <div>
        <Image
          src={carouselImg2}
          className="mx-auto mt-10 block aspect-auto w-11/12 rounded-lg md:hidden"
          alt="Picture of Alex at restaurant"
        />
      </div>
      <div className="mx-5 mt-10 hidden md:block">
        <Carousel />
      </div>
    </div>
  );
};

export default AboutDetails;
