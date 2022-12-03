import React, { useState , useEffect } from "react";
import Section from "../../common/components/section";
import Animation from "../../common/components/animation";

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
        <h1>22222</h1>
      </Animation>

    </Section>
  );
};

export default ExampleTwo;