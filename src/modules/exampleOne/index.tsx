import React, { useState } from "react";
import Section from "../../common/components/section";
import Animation from "../../common/components/animation";
import { motion } from "framer-motion";
import Title from "../../common/components/titleAnimation";

const topics = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
  "Nam sodales purus et consequat pulvinar.", 
  "Etiam semper risus vitae gravida posuere.", 
  "Vivamus id nisi non sem dignissim tincidunt..", 
  "Aliquam faucibus leo eu erat pellentesque ullamcorper.", 
  "Ed laoreet turpis sit amet sollicitudin fringilla.", 
  "Donec vel urna vel mi lobortis ultrices at quis ipsum.", 
  "Ras sit amet lorem fermentum, faucibus est vitae, dapibus eros.",
  "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingwill uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
]

const paragraphs = [
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
]
interface ExampleOneProps {
  children?: React.ReactNode;
}

const ExampleOne: React.FC<ExampleOneProps> = (): JSX.Element => {
  const [inView, setInView] = useState(false);
  return (
    <Section
      id="exampleOne"
      setIsInView={state => {
        setInView(state );
      }}
    >
      <div className="flex flex-col items-center gap-4 p-8 md:p-16">
        <Title title="Lorem Ipsum" triggerAnimation={inView}/>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
          {paragraphs.map((paragraph, i) => {
            return (
              <motion.p
                initial={{opacity:0}}
                animate={{opacity: 1, transition: {delay: 1 + i * 0.2}}}
                className="text-justify " 
                key={`paragraph-${i}`}
              >
                {paragraph}
              </motion.p>
            )
          })}
          </div>
          <ul className=" md:w-1/2 h-fit grid grid-cols-topics gap-4">
            {topics.map((topic, i) => {
              return (
                <motion.li
                  className={i === topics.length - 1 ? "lg:col-span-2": " "}
                  key={`topic-${i}`}
                  initial={{opacity: 0}}
                  animate={{ opacity: 1}}
                  transition={{
                    x: { stiffness: 1000 },                                                     
                    delay:                              
                    1.2 + 0.2 + i * 0.3,
                  }} 
                >                                                                                                                   
                <div className="flex items-start">
                <hr className="mr-2 mt-3 w-5 h-1 text-grayLight" />
                   {topic}
                   </div>
                 </motion.li>
              )
            })}
          </ul>
      </div>
      </div>
    </Section>
  );
};

export default ExampleOne;