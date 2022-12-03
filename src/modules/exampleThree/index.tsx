import React from "react";

interface ExampleThreeProps {
  children?: React.ReactNode;
}
const ExampleThree: React.FC<ExampleThreeProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <h1> Hello, exampleThree!</h1>
      {children}
    </div>
  );
};

export default ExampleThree;