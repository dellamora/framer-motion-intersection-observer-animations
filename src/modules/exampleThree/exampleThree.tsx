import React, { useState } from "react";
import { Section } from "../../common/components/section";

interface ExampleThreeProps {
  children?: React.ReactNode;
}
const ExampleThree: React.FC<ExampleThreeProps> = ({ children }): JSX.Element => {
  const [inView, setInView] = useState(false);
  return (
    <Section 
      id="exampleThree"
      setIsInView={state => {
        setInView(state);
      }}
    >

      <h1>Yes, that was the cool animation</h1>
    </Section>
  );
};

export default ExampleThree;