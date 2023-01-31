import React, { useState } from "react";
import { Section } from "../../common/components/section";
import ButtonExample from "./button";
import { motion} from "framer-motion";


const buttons = [
  {name: "option 1", id: 1},
  {name: "option 2", id: 2}
]

const ExampleThree = (): JSX.Element => {
  const [inView, setInView] = useState(false);
  const [activeBtn, setActiveBtn] = useState(buttons[0].id);
  const animations = {
    hidden: {
      opacity: 0
    },
    view: {
      opacity: 1,
    }
   }
  return (
    <Section 
      className="min-h-[70vh]"
      id="exampleThree"
      setIsInView={state => {
        setInView(curr => state || curr);
      }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "view" : "hidden"}
        variants={animations}
        transition={{delay: 0.5}}
      >
       <div className="flex gap-8 md:gap-16 flex-col md:flex-row justify-center ">
        <div className="w-full md:w-1/2 flex md:flex-col justify-between">
        {buttons.map(({name, id}) => {
         return  (
          <ButtonExample
            key={`btn-${id}`}
            active={activeBtn === id}
            onClick={() => { setActiveBtn(id)}}
          >
            {name}
          </ButtonExample>
         )
        })}
       </div>
       </div>
       <h1 className="mt-20 w-full flex justify-center text-center text-sm text-grayMedium">
        Now you can create your own animations!<br/>or just stress yourself {`(:`}
       </h1>
      </motion.div>
    </Section>
  );
};

export default ExampleThree;