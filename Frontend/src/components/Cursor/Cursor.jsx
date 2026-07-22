import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Cursor = () => {
  const [hover, setHover] = useState(false);

  // Motion Values (No React Re-render)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Spring
  const springX = useSpring(mouseX, {
    stiffness: 900,
    damping: 45,
    mass: 0.15,
  });

  const springY = useSpring(mouseY, {
    stiffness: 900,
    damping: 45,
    mass: 0.15,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll(
      "button, a, input, textarea, [data-cursor]"
    );

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: hover ? 50 : 34,
          height: hover ? 50 : 34,
        }}
        transition={{
          duration: 0.18,
        }}
        className="
        fixed
        top-0
        left-0
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-blue-400/70
        bg-blue-500/10
        backdrop-blur-md
        pointer-events-none
        z-99999
        "
      />

      {/* Dot */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="
        fixed
        top-0
        left-0
        h-2.5
        w-2.5
        rounded-full
        bg-blue-500
        -translate-x-1/2
        -translate-y-1/2
        pointer-events-none
        z-99999
        "
      />
    </>
  );
};

export default Cursor;