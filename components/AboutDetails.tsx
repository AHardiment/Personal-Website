import React from "react";
import Carousel from "./Carousel";

const AboutDetails = () => {
  return (
    <div className="about-details m-0 mx-auto h-full max-w-5xl md:mt-10">
      <div className="">
        <h1 className="font-bold md:text-6xl">About Me:</h1>
        <p className="text-justify md:mt-5 md:text-2xl">
          My name is Alex Hardiment, and I am a full-stack web developer based
          in the UK.
        </p>
        <p className="text-justify md:mt-3 md:text-2xl">
          Earlier this year, I rediscovered my passion for web development and
          decided that this would be the moment I gave it my all.
        </p>
        <p className="text-justify md:mt-3 md:text-2xl">
          This site is a glimpse at that journey.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default AboutDetails;
