import { useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useScroll } from "@/hooks/use-scroll";

interface ParallaxContainerProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export default function ParallaxContainer({
  children,
  offset = 0.5,
  className = "",
}: ParallaxContainerProps) {
  const { scrollY } = useScroll();

  const [{ transform }, api] = useSpring(() => ({
    transform: "translate3d(0, 0px, 0)",
    config: { tension: 300, friction: 30 },
  }));

  useEffect(() => {
    api.start({
      transform: `translate3d(0, ${scrollY * offset}px, 0)`,
    });
  }, [scrollY, offset, api]);

  return (
    <animated.div
      style={{ transform }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </animated.div>
  );
}
