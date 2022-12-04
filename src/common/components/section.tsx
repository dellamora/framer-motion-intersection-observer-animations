import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { triggerAsyncId } from "async_hooks";
type Props = {
  id: string;
  children: JSX.Element | JSX.Element[];
  setIsInView?: (isInView: boolean) => void;
};

export const Section = ({
  id,
  children,
  setIsInView,

}: Props): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    if (setIsInView) {
      setIsInView(inView);
    }
  }, [inView]);
  
  return (
    <section
      className="h-screen relative overflow-hidden p-[65px]"
      ref={ref}
      
    >
      <div id={id} className="absolute pointer-events-none "/>
      {children}
    </section>
  );
};

export default Section;
