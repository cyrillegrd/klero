"use client";

import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-[100px] h-[400px] w-[400px] rounded-full bg-purple-300/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-100px] top-[300px] h-[350px] w-[350px] rounded-full bg-blue-300/30 blur-3xl"
      />
    </>
  );
}