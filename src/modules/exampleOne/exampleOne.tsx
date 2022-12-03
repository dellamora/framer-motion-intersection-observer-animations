import React from "react";

interface ExampleOneProps {
  children?: React.ReactNode;
}
const ExampleOne: React.FC<ExampleOneProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <h1> Hello, ExampleOne!</h1>
      {children}
    </div>
  );
};

export default ExampleOne;