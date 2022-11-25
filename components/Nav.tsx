import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSunFill
          className="h-5 w-5 text-white hover:rotate-6"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="h-5 w-5 text-black hover:rotate-6"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div>
      <div className="flex justify-end">
        <div className="my-auto mr-auto pt-4 pl-5 font-medium md:hidden">
          <Link href="/">
            <span className="text-xl">AJH</span>
          </Link>
        </div>
        <GiHamburgerMenu className="mr-4 mt-3 h-8 w-8 hover:rotate-6 dark:text-white md:hidden" />
      </div>
      <div className="app-top-lvl mx-auto hidden pt-5 text-lg font-light sm:max-w-xl md:flex md:max-w-2xl lg:max-w-4xl">
        <div>
          <Link className="group text-black dark:text-white" href="/">
            <span className="bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-medium transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-white dark:to-white">
              AHardiment
            </span>
          </Link>
        </div>
        <div className="mx-auto">
          <Link
            className="p-10 text-black dark:text-white dark:hover:text-gray-300"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-black dark:text-white dark:hover:text-gray-300"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="p-10 text-black dark:text-white dark:hover:text-gray-300"
            href="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="mr">
          <Link
            className="group ml-auto text-black dark:text-white"
            href="/contact"
          >
            <span className=" bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-medium transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-white dark:to-white">
              Contact
            </span>
          </Link>
        </div>
        <div className="my-auto ml-5">
          {/* <BsFillMoonStarsFill /> */}
          {renderThemeChanger()}
        </div>
      </div>
    </div>
  );
};

export default Nav;
