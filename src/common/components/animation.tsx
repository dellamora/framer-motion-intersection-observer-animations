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
      transition={{staggerChildren: 1}}
    >
        {children}
    </motion.div>
  );
};

export default Animation;