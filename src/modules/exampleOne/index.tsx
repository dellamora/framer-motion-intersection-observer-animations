import React, { useState } from "react";
import Section from "../../common/components/section";
import Animation from "../../common/components/animation";
import { motion } from "framer-motion";
import Title from "../../common/components/titleAnimation";

const paragraphs = [
  {id:1, paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec fringilla tellus. Suspendisse viverra, augue vel commodo finibus, magna velit fermentum tortor, vitae molestie felis dui id ex. Aenean eleifend consectetur sodales. Cras ac consectetur tortor. Proin magna libero, viverra a aliquam sit amet, luctus eu ligula. Mauris euismod ut sem id eleifend. Donec laoreet interdum elit non interdum. Mauris auctor, justo id pharetra dignissim, risus tellus pretium libero, ac blandit nunc neque nec est. Suspendisse varius vestibulum ante, ut malesuada nunc iaculis eu. Sed dui velit, posuere vel ex ut, pretium luctus orci. Ut eget purus at tortor euismod gravida. Nullam quis nisl eget nisl finibus molestie. Cras gravida at arcu nec luctus."},
  {id:2, paragraph:"Fusce auctor maximus massa, sed molestie libero finibus eleifend. Suspendisse potenti. Mauris feugiat a orci quis congue. Integer eros sapien, malesuada eget risus aliquet, venenatis imperdiet turpis. Nulla ornare ligula in tellus convallis, sit amet lacinia nisi congue. Nunc et dictum purus. Sed non ullamcorper ante. Vestibulum vestibulum quam id justo finibus, eu rutrum urna venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque non bibendum mi. Duis sed ante eu orci malesuada feugiat non sit amet est."},
  {id:3, paragraph:"Donec in tellus in sapien pulvinar facilisis. Sed tempus ante et dapibus posuere. Suspendisse potenti. Etiam in scelerisque nibh, id pharetra urna. Ut euismod neque varius purus commodo, eget imperdiet sem porta. Duis ante tortor, rutrum at purus in, scelerisque gravida quam. In vel enim bibendum, auctor eros a, sagittis metus. Sed sit amet porta tortor, quis porta quam. Nulla vitae nunc dictum, rutrum risus quis, rhoncus eros. Proin luctus lobortis ipsum id placerat." },
  {id:4, paragraph:"Fusce sollicitudin eleifend nibh, quis sodales magna tristique in. Etiam nisi justo, posuere vel convallis at, tincidunt faucibus justo. Nullam dictum at mauris at tincidunt. Mauris sit amet laoreet ex. Morbi nec cursus quam, et commodo nibh. Aenean dapibus pellentesque ex, eget consequat leo accumsan a. Nunc in turpis sollicitudin, euismod sapien eu, feugiat ante. Duis et ligula in libero consequat fringilla. Nam vitae massa eget mi sagittis tempor. Quisque at mi elementum nulla vehicula feugiat a ut massa. Fusce ultrices, justo eu tempor condimentum, dui lectus feugiat ante, quis lobortis nisi elit quis leo. Vivamus velit nunc, tincidunt non libero et, ullamcorper dignissim libero. Duis vel elit et massa pharetra tempor in interdum nulla. Etiam vehicula rutrum eleifend. Phasellus eros arcu, lacinia in massa ac, dictum hendrerit sem."},
]
interface ExampleOneProps {
  children?: React.ReactNode;
}
const ExampleOne: React.FC<ExampleOneProps> = ({ children }): JSX.Element => {
  const [inView, setInView] = useState(false);
  return (
    <Section
      id="exampleOne"
      setIsInView={state => {
        setInView(state);
      }}

    >
      <div className="flex flex-col items-center gap-2">
        <Title title="Lorem Ipsum" triggerAnimation={inView}/>
          {paragraphs.map((p, i) => {
            return (
              <motion.p
                key={`paragraph-${i}`}
                initial={{opacity: 0}}
                animate={{ opacity: 1}}

                transition={{
                  x: { stiffness: 1000 },
                  delay:
                  1.2 + 0.2 + i * 0.4,
                }} 
                >
                {p.paragraph}
              </motion.p>
            )
          })}
      </div>
    </Section>
  );
};

export default ExampleOne;