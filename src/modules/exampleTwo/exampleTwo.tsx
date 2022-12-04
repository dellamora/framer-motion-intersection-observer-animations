import React, { useState , useEffect } from "react";
import Section from "../../common/components/section";
import Animation from "../../common/components/animation";
import { motion } from "framer-motion";

interface ExampleTwoProps {
  children?: React.ReactNode;
}
const ExampleTwo: React.FC<ExampleTwoProps> = ({ children }): JSX.Element => {
  const [inView, setInView] = useState(false);

  return (
    <Section
      id="exampleTwo"
      setIsInView={state => {
        setInView(state);
      }}
    >
      <Animation inView={inView}>
      <motion.img

        src="/leftGirl.png"
        className=" absolute top-0 left-0 w-[21rem] h-[25rem]"
      />
     <motion.img
      src="/leftDownGirl.png"
      className=" absolute bottom-0 left-0 w-[21rem] h-[25rem]"
      />
      <h1 className="text-3xl">somethuing idiot here</h1>
      <motion.img
      src="/rightGirl.png"
      className=" absolute top-0 -right-28 w-[21rem] h-[25rem]"
    />
      <motion.img
      src="/l.png"
      className=" absolute bottom-0 -right-0 w-80 "
    />
      </Animation>

    </Section>
  );
};

export default ExampleTwo;