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
      className="min-h-[60vh]"
      id="exampleThree"
      setIsInView={state => {
        setInView(curr => state || curr);
      }}
    >
     <Animation inView={inView}>
      <div className="flex gap-8 md:gap-16 flex-col md:flex-row justify-center ">
        <div className="w-full md:w-1/2 flex md:flex-col justify-between">
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
      </div>
       </div>
       <h1 className="mt-20 w-full flex justify-center text-center text-sm text-grayMedium">
        Now you can create your own animations!<br/>or just stress yourself {`(:`}
       </h1>
    </Animation>
    </Section>
  );
};

export default ExampleThree;