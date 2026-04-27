"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const hasMovedRef = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 24, mass: 0.35 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 24, mass: 0.35 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointer.matches) {
      return;
    }

    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        setHasMoved(true);
      }
    };

    const updateHoverState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      setHovered(Boolean(element?.closest("a, button, [data-cursor]")));
    };

    const handlePointerOver = (event: PointerEvent) => {
      updateHoverState(event.target);
    };

    const handlePointerOut = (event: PointerEvent) => {
      updateHoverState(event.relatedTarget);
    };

    const handleBlur = () => setHovered(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", handleBlur);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="custom-cursor pointer-events-none fixed z-200 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
        style={{ left: mouseX, top: mouseY }}
        animate={{ opacity: hasMoved ? 1 : 0 }}
      />
      <motion.div
        className="custom-cursor pointer-events-none fixed z-199 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 mix-blend-difference transition-all duration-200"
        style={{ left: ringX, top: ringY }}
        animate={{
          opacity: hasMoved ? 1 : 0,
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          backgroundColor: hovered ? "rgba(255,255,255,0.1)" : "transparent",
        }}
      />
    </>
  );
}
