"use client";

import { JSX, PropsWithChildren } from "react";

import { motion } from "framer-motion";

export default function AnimatedBlock({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
