import React from "react";

interface footerProps {
  children?: React.ReactNode;
}
const Footer: React.FC<footerProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <h1> Hello, footer!</h1>
      {children}
    </div>
  );
};

export default Footer;