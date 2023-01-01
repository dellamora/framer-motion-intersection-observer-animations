import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  className?: string;
  triggerAnimation: boolean;
};

const Title = ({
  title,
  triggerAnimation,
}: Props): JSX.Element => {
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    setTriggered(curr => triggerAnimation || curr)
  },[triggerAnimation])


  const characterAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
      <div className="flex items-center">
        {title.split(" ").map((word, index) => {
          return (
            <motion.span
              className="mr-2"
              aria-hidden="true"
              key={`key-${word}-${index}`}
              initial="hidden"
              animate={triggered ? "visible" : "hidden"}
              transition={{
                staggerChildren: 0.1,
                delayChildren:
                  index === 0
                    ? 0
                    : title.split(" ").slice(0, index).join(" ").length * 0.1,
              }}
            >
              {word.split("").map((character, index) => {
                return (
                  <motion.span
                    className="text-2xl md:text-3xl text-gray  "
                    aria-hidden="true"
                    key={`key-${character}-${index}`}
                    variants={characterAnimation}
                  >
                    {character}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </div>
  );
};

export default Title;
