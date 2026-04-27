"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return sessionStorage.getItem("portfolio-intro-seen") !== "true";
  });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    sessionStorage.setItem("portfolio-intro-seen", "true");

    const interval = window.setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => setIsLoading(false), 700);
          return 100;
        }

        return Math.min(100, prev + Math.floor(Math.random() * 8) + 3);
      });
    }, 50);

    return () => window.clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <>
          <motion.div
            key="top"
            className="fixed inset-x-0 top-0 z-100 h-1/2 bg-black"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          />
          <motion.div
            key="bottom"
            className="fixed inset-x-0 bottom-0 z-100 h-1/2 bg-black"
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          />
          <motion.div
            key="content"
            className="fixed inset-0 z-101 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6">
              <motion.h1
                className="text-6xl font-bold tracking-tight text-white md:text-8xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease }}
              >
                cankie<span className="text-primary">.</span>
              </motion.h1>
              <motion.span
                className="font-mono text-sm text-white/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {String(counter).padStart(3, "0")}
              </motion.span>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
