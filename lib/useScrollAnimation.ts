import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return { ref, isInView };
}
