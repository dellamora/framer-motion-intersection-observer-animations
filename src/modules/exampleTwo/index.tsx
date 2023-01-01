import React, { useState } from "react";
import Section from "../../common/components/section";
import { motion } from "framer-motion";
import Title from "../../common/components/titleAnimation";


interface ExampleTwoProps {
  children?: React.ReactNode;
}
const ExampleTwo: React.FC<ExampleTwoProps> = (): JSX.Element => {
  const [inView, setInView] = useState(false);
  const animations = {
    hidden: {
      opacity: 0
    },
    view: {
      opacity: 1,
    }
   }
  const firstGirl = {
    hidden: {
      y: 0, 
      x: -200, 
      rotate: "12deg"
    },
    view: {
      y:0, 
      x:-55, 
      rotate: "30deg", 
      transition: {
        type: "spring", 
        stiffness: 50
      }
    }
  }
  const secondGirl = {
    hidden: {
      y: 0, 
      x: 200, 
      rotate: "12deg"
    },
    view: {
      y:0, 
      x:15, 
      rotate: 0,
      transition: {
        type: "spring", 
        stiffness: 50
      }
    }
  }
  const thirdGirl = {
    hidden: {
      y: 0, 
      x: -200, 
      rotate: "-24deg"
    },
    view: {
      y:0, 
      x:-10, 
      rotate: 0, 
      transition: {
        type: "spring", 
        stiffness: 50
      }
    }
  }
  const forthGirl = {
    hidden: {
      y: 0, 
      x: 200, 
      rotate: "6deg"
    },
    view: {
      y:0, 
      x:15, 
      rotate: "-6deg",
      transition: {
        type: "spring", 
        stiffness: 50
      }
    }
  }
  return (
    <Section
      id="exampleTwo"
      setIsInView={state => {
        setInView(state);
      }}
      className="min-h-screen flex justify-center items-center"
      >
      <Title title="Yes, that was the cool animation" triggerAnimation={inView}/>
      <motion.div
        className="flex flex-col"
        initial="hidden"
        animate={inView ? "view" : "hidden"}
        variants={animations}  
        transition={{staggerChildren: 0.5}}
      >
        <motion.img
          variants={firstGirl}
          src="/firstGirl.png"
          className=" absolute top-3 left-0  h-[21rem] lg:h-[25rem]"
        />
          <motion.img
            variants={secondGirl}
            src="/secondGirl.png"
            className=" absolute top-0 -right-20 lg:-right-[94px] h-[25rem] lg:h-[30rem]"
        />
       <motion.img
          variants={thirdGirl}
          src="/thirdGirl.png"
          className=" absolute bottom-0 left-0  h-[25rem] lg:h-[35rem]"
        />
      <motion.img
        variants={forthGirl}
        src="/forthGirl.png"
        className=" absolute bottom-0  -right-[185px] md:-right-80 lg:-right-96 h-[18rem] md:h-[25rem] lg:h-[30rem] "
    />
      </motion.div>
    </Section>
  );
};

export default ExampleTwo;