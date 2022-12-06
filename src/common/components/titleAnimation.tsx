import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  title?: string;
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
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: -10,
      x: -20,
      rotate: "-12deg", 
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: "0deg",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],

      },
    },
  };
  if (!title ) {
    return null;
  }
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
              variants={wordAnimation}
              transition={{
                delayChildren:
                  index === 0
                    ? 0
                    : title.split(" ").slice(0, index).join(" ").length * 0.1,
                staggerChildren: 0.1,
              }}
            >
              {word.split("").map((character, index) => {
                return (
                  <motion.span
                    className="text-3xl text-gray  "
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
