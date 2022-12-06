import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
type Props = {
  id: string;
  children: React.ReactNode;
  setIsInView?: (isInView: boolean) => void;
  className?: string;
};

export const Section = ({
  id,
  children,
  setIsInView,
  className,
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
      className={`min-h-[50vh] relative overflow-hidden p-[65px] flex justify-center items-center ${className}`}
      ref={ref}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
