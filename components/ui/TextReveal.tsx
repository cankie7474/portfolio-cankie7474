"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

const ease = [0.76, 0, 0.24, 1] as const;

export default function TextReveal({
  text,
  className,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(" ");

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap gap-x-2 overflow-hidden ${className ?? ""}`}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={isInView ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.7,
              delay: delay + index * 0.06,
              ease,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
