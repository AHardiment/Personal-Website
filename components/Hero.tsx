import React from "react";
import Image from "next/image";
import heroimg from "../public/hero-img.jpeg";
import { FaReact } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-details flex max-w-7xl items-center p-10 md:mx-auto">
      <section className="mx-auto mt-16">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="relative mb-4 max-w-2xl pr-10 text-5xl font-extrabold leading-none tracking-tight text-black dark:text-white md:text-6xl xl:text-8xl">
              Alex Hardiment
            </h1>
            <p className="mb-2 max-w-2xl font-light text-black dark:text-gray-200 md:mb-6 md:text-lg lg:mb-1 lg:text-xl">
              I am Alex, a full-stack web developer based in Manchester, UK ☔️
            </p>
            <p className="mb-10 max-w-2xl font-light text-black dark:text-gray-200 md:mb-6 md:text-lg lg:mb-8 lg:text-xl">
              I love building dynamic web apps in{" "}
              <span className=" font-medium text-blue-400">React</span>,{" "}
              <span className="font-medium text-green-400">NodeJS</span>,{" "}
              <span className=" font-medium text-blue-600">TypeScript</span> and{" "}
              <span className="font-medium text-blue-300">Tailwind</span>.
            </p>
            <div className="w-full">
              <Link
                href="/projects"
                className="my-work-arrow bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-xl font-medium text-black focus:ring-4 dark:text-white md:mr-3"
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
              </Link>
              <Link
                href="/contact"
                className="action-outline-btn inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-xl font-medium text-gray-900 hover:bg-blue-400 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-blue-600 dark:focus:ring-gray-800"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="relative ml-auto hidden justify-between lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              className=" w-96 animate-blob opacity-50 blur-2xl md:object-scale-down "
              src={heroimg}
              alt="hero"
            />
            <Image
              className="absolute w-96 object-scale-down "
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
