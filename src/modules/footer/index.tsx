import React from "react";

interface footerProps {
  children?: React.ReactNode;
}
const Footer: React.FC<footerProps> = ({ children }): JSX.Element => {
  return (
    <footer className="text-grayMedium bg-primary flex items-center justify-between p-6 ">
    <div className="flex flex-col items-start">
    <span className="text-sm  sm:text-center text-grayMedium ">
      © 2022
      <a
        href="https://twitter.com/francidellamora"
        className="m-1 hover:underline"
      >
        - Dellamora
      </a>
    </span>
    <div>    
      <span className="text-sm  sm:text-center text-grayMedium ">
        Big Thanks to
      </span>
      <a
        href="https://twitter.com/yungbzz"
        className="m-1 hover:underline text-sm  sm:text-center text-grayMedium "
      >
        @yungbzz
      </a>
    </div>

    </div>
    <ul className="flex flex-wrap items-center mt-3 text-sm   sm:mt-0">
      <li>
        <a
          href="https://discord.gg/Xxu2raVxs5"
          className="hover:underline mr-6 "
        >
          Discord Server
        </a>
      </li>
      <li>
        <a
          href="https://www.buymeacoffee.com/dellamora"
          className="hover:underline mr-6"
        >
          Buy Me A Coffee!
        </a>
      </li>
    </ul>
  </footer>
  );
};

export default Footer;