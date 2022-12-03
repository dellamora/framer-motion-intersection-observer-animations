import { motion } from "framer-motion";
import React from "react";

interface AnimationProps {
  children?: React.ReactNode;
  inView: boolean
}
const Animation: React.FC<AnimationProps> = ({ children,inView }): JSX.Element => {
  return (
    <motion.div 
        className="flex flex-col gap-3"
        initial="hidden"
        animate={inView ? "view" : "hidden"}  
    >
    <motion.div
      initial="hidden"
      animate="view"
      variants={{
        hidden: {opacity: 0}, 
        view: {opacity: 1,
          transition:{delay: 2}}
      }}  
    >
        {children}
    </motion.div>
  </motion.div>
  );
};

export default Animation;