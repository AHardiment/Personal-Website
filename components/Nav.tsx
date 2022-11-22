import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="mx-auto mt-5 flex max-w-5xl text-lg font-light">
      <div>
        <Link
          className="group text-white transition-all duration-300 ease-in-out"
          href="/"
        >
          <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-medium transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] ">
            AJH
          </span>
        </Link>
      </div>
      <div className="mx-auto">
        <Link className="pr-10 hover:text-gray-300" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-300" href="/projects">
          Projects
        </Link>
        <Link className="pl-10 hover:text-gray-300" href="/blog">
          Blog
        </Link>
      </div>
      <div>
        <Link
          className="text-whitetransition-all group duration-300 ease-in-out"
          href="/contact"
        >
          <span className=" bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-medium transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
