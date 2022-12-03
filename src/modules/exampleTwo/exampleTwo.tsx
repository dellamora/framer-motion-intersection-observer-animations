import React from "react";

interface ExampleTwoProps {
  children?: React.ReactNode;
}
const ExampleTwo: React.FC<ExampleTwoProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <h1> Hello, exampleTwo!</h1>
      {children}
    </div>
  );
};

export default ExampleTwo;