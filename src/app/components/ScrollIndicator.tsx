'use client'

import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Modern Framer Motion way to listen to scroll changes for the percentage
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setPercent(Math.round(latest * 100));
  });

  // Map to 'top' position instead of 'y' transform
  const topPos = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    // Removed "hidden md:flex" and adjusted the right spacing for mobile
    <div className="fixed right-5 md:right-6 top-24 bottom-24 z-50 flex flex-col items-center pointer-events-none">
      
      {/* The gray background track line */}
      <div className="relative h-full w-[2px] bg-gray-200 dark:bg-slate-700 rounded-full">
        
        {/* The active black fill line */}
        <motion.div
  className="absolute top-0 left-0 w-full bg-gray-900 dark:bg-yellow-300 rounded-full"
  style={{ height: topPos }}
/>
        
        {/* The Traveling Avatar & Percentage */}
        <motion.div
          className="absolute left-1/2 flex items-center justify-center whitespace-nowrap"
          style={{ 
            top: topPos,  // Tracks parent container height
            x: "-50%",    // Centers the avatar horizontally on the line
            y: "-50%",    // Centers the avatar vertically on the tip of the line
          }}
        >
          {/* Avatar Bubble */}
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-slate-700 border-2 border-gray-900 dark:border-slate-200 rounded-full shadow-md z-10 overflow-hidden">
            <Image
              src="/447.Productive.png"
              width={48}
              height={48}
              alt="Sushil Sagar"
              className="object-cover"
            />
          </div>

          {/* Percentage Text Box */}
          <div className="absolute right-full mr-2 md:mr-3 flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] md:text-[11px] font-bold px-2 py-1 rounded transition-opacity duration-300">
            {percent}%
            {/* Little triangle pointer */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-gray-900 dark:border-l-white" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}