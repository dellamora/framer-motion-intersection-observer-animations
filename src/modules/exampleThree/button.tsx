/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React from "react";

type Props = {
  onClick: () => void;
  active: boolean;
  inView: boolean;
  children: string;
};
const CompanyButton = ({
  onClick,
  active,
  inView,
  children,
}: Props): JSX.Element => {
  return (
    <motion.div 
      className="relative w-full"
      animate={inView ?  {opacity: 1,transition:{delay: 1}} : {opacity: 0}} 
    >
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
    </motion.div>
  );          
};

export default CompanyButton;