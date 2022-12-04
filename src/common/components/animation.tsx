import { motion } from "framer-motion";
import React from "react";

interface AnimationProps {
  children?: React.ReactNode;
  inView: boolean
}
const Animation: React.FC<AnimationProps> = ({ children,inView }): JSX.Element => {
  return (
    <motion.div 
        className="flex flex-col"
        initial="hidden"
        animate={inView ? "view" : "hidden"}  
    >
    <motion.div
      variants={{
        hidden: {opacity: 0}, 
        view: {opacity: 1,}
      }}  
    >
        {children}
    </motion.div>
  </motion.div>
  );
};

export default Animation;