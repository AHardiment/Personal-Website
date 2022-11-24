import React from "react";

//footer disclaimer that site is work in progress

const Footer = () => {
  return (
    <div className=" mt-32 flex items-end justify-center">
      <p className="text-center text-xs text-gray-500 md:text-sm">
        This site was built with Next.JS, TypeScript and TailwindCSS. It is a
        work in progress so please bear with me as I continue to add content.
      </p>
    </div>
  );
};

export default Footer;
