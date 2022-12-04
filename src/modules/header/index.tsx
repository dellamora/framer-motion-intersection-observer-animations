import Link from "next/link";
import React from "react";

const links = [
    { name: "Text Animations", to: "#exampleOne", id: 1},
    { name: "Image Animations", to: "#exampleTwo", id: 2 },
    { name: "Something weird", to: "#exampleThree", id: 3 },
  ];
interface HeaderProps {
  children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }): JSX.Element => {
    
  return (
    <div className="fixed overflow-hidden z-10">
        <nav className="shrink-0 w-screen flex p-4  text-gray items-center justify-between bg-primary ">
            <Link className="text-redLight font-semibold text-3xl" href="https://twitter.com/francidellamora"> Dellamora</Link>
            <div className="relative flex gap-3 items-center ">
             {links.map(({ name, to, id }) => (
                <a className="pl-0 px-2 text-gray" key={id} href={to}>
                    {name}
                </a>
             ))}
         </div>
        <Link  href="https://twitter.com/francidellamora" className="text-grayMedium font-thin"> view port: 33%</Link>
        </nav>
    </div>
  );
};

export default Header;