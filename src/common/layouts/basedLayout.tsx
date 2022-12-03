// import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Footer from "../../modules/footer";
import Header from "../../modules/header";
const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//   container: containerRef
//   });
  return (
    <div className="h-screen w-screen overflow-y-hidden">
    <div id="modal-root"/>
    <div className="h-screen flex flex-col bg-[#FBFAFF] overflow-auto "  >
      <Header />
      <div className="mt-[64px]">{children}</div>
      <Footer/>
    </div>
    </div>
  );
};

export default BaseLayout;
