import { motion } from "framer-motion";
import React, { useState,useEffect } from "react";
import Section from "../../common/components/section";
import Animation from "../../common/components/animation";
interface ExampleThreeProps {
  children?: React.ReactNode;
}
const ExampleThree: React.FC<ExampleThreeProps> = ({ children }): JSX.Element => {
  const [inView, setInView] = useState(false);
  useState(() => {
    console.log("oi")
  })
  return (
    <Section
      id="exampleThree"
      setIsInView={state => {
        setInView(state);
      }}
    >
      <Animation inView={inView}>
        <h1>3333</h1>
      </Animation>

    </Section>
  );
};

export default ExampleThree;