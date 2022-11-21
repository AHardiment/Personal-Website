import React from "react";

const Nav = () => {
  return (
    <div className="flex max-w-5xl mt-5 text-lg font-light items mx-auto">
      <div>
        <a
          className="group text-whitetransition-all duration-300 ease-in-out"
          href="#"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            AJH
          </span>
        </a>
      </div>
      <div className="mx-auto">
        <a className="hover:text-gray-300 pr-10" href="#">
          About
        </a>
        <a className="hover:text-gray-300" href="#">
          Projects
        </a>
      </div>
      <div>
        <a
          className="group text-whitetransition-all duration-300 ease-in-out"
          href="#"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
