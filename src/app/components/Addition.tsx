'use client'
  import { useState } from "react";
  import {
    Card,
    CardContent,
  } from "@/components/ui/card";
  import { RoughNotation } from "react-rough-notation";

  const videos = [
    {
      title: "Dev Circle",
      description: "Social platform for developers",
      src: "/demo/dev-circle.mp4",
    },
    {
      title: "Food Delivery App",
      description: "Real-time tracking demo",
      src: "/demo/food-delivery.mp4",
    },
  ];

  export default function MoreWork() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <section className="mx-auto max-w-7xl px-4 py-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight inline-block text-gray-900 font-serif">
            The{' '}
            <RoughNotation type="highlight" show={true} color="#fbcfe8" iterations={1} padding={4}>
              Playground
            </RoughNotation>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl font-light">Small experiments, UI interactions, and fun side quests.</p>
        </div>
      
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {videos.map((video, index) => (
            <div 
              key={video.title} 
              className="relative p-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 pointer-events-none z-0">
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

              <Card className="group relative z-10 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-md hover:border-gray-300">
                <CardContent className="p-0">
                
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-5 flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">{video.title}</h3>
                      <p className="text-sm text-gray-500 mt-1 font-light">{video.description}</p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    );
  }