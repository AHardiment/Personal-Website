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
      <ButtonBack className="mt-3 mr-3 rounded-xl border p-2 outline-1">
        ← Back
      </ButtonBack>
      <ButtonNext className=" rounded-xl border p-2 outline-1">
        Next →
      </ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
