import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsFillMoonStarsFill
          className="h-5 w-5 text-white "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="h-5 w-5 text-black "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div className="mx-auto mt-5 hidden max-w-5xl text-lg font-light sm:flex">
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
      <div className="mx-auto lg:ml-auto lg:mr-64">
        <Link className="p-10 hover:text-gray-300" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-300" href="/projects">
          Projects
        </Link>
        <Link className="p-10 hover:text-gray-300" href="/blog">
          Blog
        </Link>
      </div>
      <div className="mr">
        <Link
          className="group ml-auto text-white transition-all duration-300 ease-in-out"
          href="/contact"
        >
          <span className=" bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-medium transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
            Contact
          </span>
        </Link>
      </div>
      <div className="my-auto ml-5">
        {/* <BsFillMoonStarsFill /> */}
        {renderThemeChanger()}
      </div>
    </div>
  );
};

export default Nav;
