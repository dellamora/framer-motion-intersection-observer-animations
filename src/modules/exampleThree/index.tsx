import { motion } from "framer-motion";
import React, { useState } from "react";
import { Section } from "../../common/components/section";
import CompanyButton from "./button";
import Animation from "../../common/components/animation";


const buttons = [
  {name: "option 1", id: 1},
  {name: "option 2", id: 2}
]


const ExampleThree = (): JSX.Element => {
  const [inView, setInView] = useState(false);
  const [activeBtn, setActiveBtn] = useState(buttons[0].id);

  return (
    <Section 
      className="min-h-[70vh] flex-col p-0 gap-20  flex justify-center items-center "
      id="exampleThree"
      setIsInView={state => {
        setInView(curr => state || curr);
      }}
    >
     <Animation inView={inView}>
      <div className="flex flex-col justify-center ">
      {buttons.map(({name, id}) => {
        return  (
          <CompanyButton
          key={`btn-${id}`}
          active={activeBtn === id}
          inView={inView}
          onClick={() => { setActiveBtn(id)}}
          >
            {name}
          </CompanyButton>
        )
      })}
       <h1 className="mt-20 w-full flex justify-center text-sm text-grayMedium"></h1>
       </div>
    </Animation>
    </Section>
  );
};

export default ExampleThree;