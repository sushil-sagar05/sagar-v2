'use client'

import { useState } from "react";
import {
  Card,
} from "@/components/ui/card";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
const videos = [
  {
    title: "Dev Circle",
    description: "A social platform concept designed exclusively for developers to share code snippets and connect.",
    src: "/demo/dev-circle.mp4",
    // Refined colors for dual-mode compatibility
    bgColor: "bg-pink-50/50 dark:bg-pink-950/10"
  },
  {
    title: "Food Delivery App",
    description: "A seamless UI interaction featuring a real-time order tracking map and fluid bottom-sheet animations.",
    src: "/demo/food-delivery.mp4",
    bgColor: "bg-purple-50/50 dark:bg-purple-950/10"
  },
];

export default function MoreWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
const { theme } = useTheme();
  return (
    /* FIX: Full-width background container */
 <section className="relative w-full py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">

  {/* Light Mode Grid */}
  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden pointer-events-none" />

  {/* Dark Mode Grid (softer + premium) */}
  <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

  <div className="relative mx-auto max-w-5xl px-4">
        
        {/* Premium Header */}
        <div className="mb-12 flex flex-col items-start gap-2">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-slate-500 flex items-center gap-2">
            Side Quests
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 font-serif text-gray-900 dark:text-gray-100">
  The{" "}
  <RoughNotation
    type="highlight"
    show={true}
    color={
      theme === "dark"
        ? "rgba(251, 207, 232, 0.65)"   // Soft blue glow for dark mode
        : "#fbcfe8"  // Original yellow for light
    }
    iterations={1}
    padding={2}
  >
    Playground
  </RoughNotation>
</h2>
          <p className="mt-4 text-gray-500 dark:text-slate-400 max-w-xl font-medium text-[15px] leading-relaxed">
            Small experiments, UI interactions, and fun side quests built to learn new tools.
          </p>
        </div>
      
        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {videos.map((video, index) => (
            <div 
              key={video.title} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Box Hover Doodle Effect */}
              <div className="absolute inset-0 pointer-events-none z-0 -m-2">
                 <RoughNotation 
                    type="box" 
                    show={hoveredIndex === index} 
                    color="#f472b6" 
                    strokeWidth={2}
                    iterations={1}
                    padding={0}
                    animationDuration={300}
                 >
                   <div className="w-full h-full" />
                 </RoughNotation>
              </div>

              {/* Main Premium Card */}
              <Card className="group relative z-10 flex flex-col overflow-hidden rounded-[2rem] border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-gray-300 dark:hover:border-slate-600">
                
                {/* Video Area with Dynamic BG */}
                <div className={`relative aspect-video p-4 sm:p-5 overflow-hidden border-b border-gray-100 dark:border-slate-800 ${video.bgColor}`}>
                  
                  {/* Inner Video Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-sm bg-black">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="flex flex-col flex-grow p-8">
                  <h3 className="font-bold text-2xl text-gray-900 dark:text-gray-100 tracking-tight group-hover:text-pink-500 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 dark:text-slate-400 text-[15px] leading-relaxed mt-3">
                    {video.description}
                  </p>
                </div>

              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}