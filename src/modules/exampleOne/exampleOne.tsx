import React, { useState } from "react";
import Section from "../../common/components/section";
import Animation from "../../common/components/animation";

interface ExampleOneProps {
  children?: React.ReactNode;
}
const ExampleOne: React.FC<ExampleOneProps> = ({ children }): JSX.Element => {
  const [inView, setInView] = useState(false);
  return (
    <Section
      id="exampleOne"
      setIsInView={state => {
        setInView(state);
      }}

    >
      <Animation inView={inView}>
        <h1>111111111111111111111</h1>
      </Animation>


    </Section>
  );
};

export default ExampleOne;