import React from "react";
import Image from "next/image";
import heroimg from "../public/hero-img.jpeg";

const Hero = () => {
  return (
    <div className="hero-details mx-auto h-full max-w-6xl items-center">
      {/* <div className="left-50 absolute top-64 h-72 w-72 rounded-full bg-blue-400 opacity-70 blur-2xl filter"></div> */}
      {/* <div className="absolute top-64 left-96 h-72 w-72 rounded-full bg-blue-400 opacity-70 blur-2xl filter"></div> */}
      {/* <div className="absolute left-72 top-80 h-72 w-72 rounded-full bg-orange-500 opacity-70 blur-2xl filter"></div> */}
      <section className="relative mt-32 h-full">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="relative mb-4 max-w-2xl text-8xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-8xl">
              Alex Hardiment
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-200 md:text-lg lg:mb-8 lg:text-xl">
              I am Alex, a full-stack web developer based in Manchester, UK ☔️
              I love building dynamic web apps in{" "}
              <span className=" text-blue-400">React</span>,{" "}
              <span className="text-green-400">NodeJS</span>,{" "}
              <span className=" text-blue-600">TypeScript</span> and{" "}
              <span className="text-blue-200">Tailwind</span>.
            </p>
            <a
              href="#"
              className="my-work-arrow bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            >
              My work
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="action-outline-btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-blue-400 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-blue-600 dark:focus:ring-gray-800"
            >
              Get in Touch
            </a>
          </div>
          <div className="hidden justify-end lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              className=" w-96 object-scale-down "
              src={heroimg}
              alt="hero"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
