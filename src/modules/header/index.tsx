import React from "react";

interface HeaderProps {
  children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <h1> Hello, Header!</h1>
      {children}
    </div>
  );
};

export default Header;