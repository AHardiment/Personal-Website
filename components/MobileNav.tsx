import React from "react";
import { useState } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {menuOpen && (
        <div className="">
          <div className="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-50"></div>

          <div className="mobile-nav flex flex-col items-start justify-start">
            <div className="ml-auto pr-3 pt-3">
              <RiCloseFill
                className="h-12 w-12 hover:cursor-pointer"
                onClick={handleMobileNav}
              />
            </div>
            <div className="ml-5 flex flex-col justify-center">
              <Link className="nav-item" href="/">
                <span className="text-2xl">Home</span>
              </Link>
              <Link className="nav-item" href="/about">
                <span className="text-2xl">About</span>
              </Link>
              <Link className="nav-item" href="/projects">
                <span className="text-2xl">Projects</span>
              </Link>
              <Link className="nav-item" href="/blog">
                <span className="text-2xl">Blog</span>
              </Link>
              <Link className="nav-item" href="/contact">
                <span className="text-2xl">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <button onClick={handleMobileNav}>
        {!menuOpen ? (
          <div className="mt-4">
            <GiHamburgerMenu className="menu-icon-closed h-8 w-8" />
          </div>
        ) : (
          <div></div>
        )}
      </button>
    </div>
  );
};

export default MobileNav;
