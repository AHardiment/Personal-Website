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
          I have always been adjacent to programming, with both my father and my
          brother having been software engineers. After many years pursuing a
          variety of careers, I decided to commit all of my energy to
          programming once more.
        </p>
        <p className="text-justify md:mt-3 md:text-2xl">
          This site is a glimpse at my journey.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default AboutDetails;
