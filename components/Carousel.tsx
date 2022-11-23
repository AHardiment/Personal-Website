import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Image from "next/image";
import carouselImg1 from "../public/hero-img.jpeg";
import carouselImg2 from "../public/casual-img.jpg";
import carouselImg3 from "../public/disney-img.jpeg";

import { useState } from "react";

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={5}
      visibleSlides={3}
      infinite={true}
      isPlaying={true}
      interval={5000}
    >
      <Slider className="h-72 md:mb-2 md:mt-10">
        <Slide index={0}>
          <Image src={carouselImg1} alt="Image of Alex" className="w-72" />
        </Slide>
        <Slide index={1}>
          <Image src={carouselImg2} alt="Image of Alex" className="w-72" />
        </Slide>
        <Slide index={2}>
          <Image src={carouselImg3} alt="Image of Alex" className="w-72" />
        </Slide>
      </Slider>
      <ButtonBack className="mt-3 mr-3 rounded-xl border border-black p-2 outline-1 hover:bg-black hover:text-white hover:duration-200  hover:ease-in dark:border-white dark:hover:bg-white dark:hover:text-black">
        ← Back
      </ButtonBack>
      <ButtonNext className="mt-3 mr-3 rounded-xl border border-black p-2 outline-1 hover:bg-black hover:text-white  hover:duration-200 hover:ease-in dark:border-white dark:hover:bg-white dark:hover:text-black">
        Next →
      </ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
