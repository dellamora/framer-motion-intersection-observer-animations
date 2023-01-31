/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React from "react";

type Props = {
  onClick: () => void;
  active: boolean;
  children: string;
};
const ButtonExample = ({
  onClick,
  active,
  children,
}: Props): JSX.Element => {
  return (
    <div className="relative w-full">
      <button
        className={` w-full flex relative font-Inter items-center text-xl  py-2 md:px-6 px-4 z-20 
        ${active ? "text-redLight" : "text-grayMedium"}  `}
        onClick={onClick}
      >
        {children}
      </button>
      {active && (
        <motion.div
          className=" rounded absolute top-0 bottom-0 left-0 right-0 bg-whiteBasic  z-10 flex justify-end"
          layoutId="buttonBg"
        />
      )}
    </div>
  );          
};

export default ButtonExample;