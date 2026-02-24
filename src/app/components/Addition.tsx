'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

const videos = [
  {
    title: "Dev Circle",
    description: "A social platform concept designed exclusively for developers to share code snippets and connect.",
    src: "/demo/dev-circle.mp4",
    bgColor: "bg-pink-50/60 dark:bg-pink-950/20"
  },
  {
    title: "Food Delivery App",
    description: "A seamless UI interaction featuring a real-time order tracking map and fluid bottom-sheet animations.",
    src: "/demo/food-delivery.mp4",
    bgColor: "bg-purple-50/60 dark:bg-purple-950/20"
  },
];

export default function MoreWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <section className="relative w-full py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">

      {/* Light Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden pointer-events-none" />

      {/* Softer Dark Grid */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4">

        {/* Header */}
        <div className="mb-14 flex flex-col items-start gap-3">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-slate-500">
            Side Quests
          </span>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif text-gray-900 dark:text-gray-100">
            The{" "}
            <span className="dark:drop-shadow-[0_0_10px_rgba(244,114,182,0.4)]">
              <RoughNotation
                type="highlight"
                show={true}
                color={
                  theme === "dark"
                    ? "rgba(244, 114, 182, 0.35)"   // softer premium glow
                    : "#fbcfe8"
                }
                iterations={1}
                padding={6}
              >
                Playground
              </RoughNotation>
            </span>
          </h2>

          <p className="text-gray-500 dark:text-slate-400 max-w-xl font-medium text-[15px] leading-relaxed">
            Small experiments, UI interactions, and fun side quests built to learn new tools.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              {/* Hover Doodle */}
              <div className="absolute inset-0 pointer-events-none z-0 -m-2">
                <RoughNotation
                  type="box"
                  show={hoveredIndex === index}
                  color={theme === "dark" ? "#be185d" : "#f472b6"}
                  strokeWidth={2}
                  padding={8}
                  animationDuration={250}
                >
                  <div className="w-full h-full" />
                </RoughNotation>
              </div>

              {/* Card */}
              <Card className="group relative z-10 flex flex-col overflow-hidden rounded-[2rem] border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

                {/* Video Area */}
                <div className={`relative aspect-video p-5 overflow-hidden border-b border-gray-100 dark:border-slate-800 ${video.bgColor}`}>
                  
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-sm bg-black">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-8">
                  <h3 className="font-bold text-2xl text-gray-900 dark:text-gray-100 tracking-tight transition-colors group-hover:text-pink-500 dark:group-hover:text-pink-400">
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