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
    threshold: 0.4,
  });
  
  useEffect(() => {
    if (setIsInView) {
      setIsInView(inView);
    }
  }, [inView, setIsInView]);

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      ref={ref}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
