'use client';

import Link from "next/link";
import Image from "next/image";
import {
  Card,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; 
import { DialogDescription } from "@radix-ui/react-dialog";
import { Github, PlayCircle, ArrowRight, ExternalLink } from "lucide-react"; 

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  SiNextdotjs,
  SiDocker,
  SiFastapi,
  SiMongodb,
  SiLangchain,
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import { RoughNotation } from "react-rough-notation";

const QdrantIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <title>Qdrant</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zm-1.636 4.364v8.727h3.273v-8.727h-3.273zm-3.273 0v8.727h1.636v-8.727H7.091zm8.182 0v8.727h1.636v-8.727h-1.636z" />
  </svg>
);

const projects = [
  {
    title: "Nyaynetra",
    description: "A production-ready RAG-powered document intelligence platform that enables users to upload legal documents, chat with them, and extract key legal insights ,risk terms instantly.",
    image: "/projects/nyaynetra.png",
    live: "https://nyaynetra-ai.vercel.app/",
    code: "https://github.com/sushil-sagar05/nyaynetra.ai",
    video: "https://www.youtube.com/embed/njpeEyhRlCo", 
    bgColor: "bg-indigo-50", // Added dynamic background color
    techStack: [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: QdrantIcon, name: "Qdrant", color: "#CC2b5E" },
      { icon: SiLangchain, name: "LangChain", color: "#1C3C3C" },
    ],
  },
  {
    title: "Math Agent",
    description: "Advanced AI Math Tutor with LangGraph workflow and DSPy symbolic processing. Generates personalized step-by-step solutions to complex problems.",
    image: "/projects/math-agent.png",
    live: "https://github.com/sushil-sagar05/Ai-Math-Tutor-Agent",
    code: "https://github.com/sushil-sagar05/Ai-Math-Tutor-Agent",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    bgColor: "bg-indigo-50", // Added dynamic background color
    techStack: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiLangchain, name: "LangGraph", color: "#1C3C3C" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: QdrantIcon, name: "Qdrant", color: "#CC2b5E" },
    ],
  },
    {
    title: "MovieMeter",
    description: "MovieMeter is a full-stack web application where users can discover, rate, review, and discuss movies. Authenticated users receive personalized movie recommendations via a content-based recommendation system built with Flask and Python, integrated into a MERN",
    image: "/projects/moviemeter.png",
    live: "https://movie-meter-fullstack.onrender.com/",
    code: "https://github.com/sushil-sagar05/Movie-Meter",
    video: "", 
    bgColor: "bg-indigo-50", // Added dynamic background color
    techStack: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiPython, name: "Flask", color: "#3776AB" },
    ],
  },
  {
    title: "Complaint Hub",
    description: "Modern grievance tracking system with real-time automation and secure access.",
      image: "/projects/complaint-hub.png",
    live: "https://complain-management-mu.vercel.app/",
    code: "https://github.com/sushil-sagar05/complain-management",
    video: "", 
    bgColor: "bg-indigo-50", // Added dynamic background color
    techStack: [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiTypescript, name: "TS", color: "#3776AB" },
    ],

  }
];

export default function Work() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      
      {/* Header */}
      <div className="mb-16 max-w-xl">
        <h2 className="text-4xl font-black tracking-tight mb-4 font-serif text-gray-900">
          Featured{' '}
          <RoughNotation type="highlight" show={true} color="#fef08a" iterations={1} padding={2}>
            Work
          </RoughNotation>
        </h2>
        <p className="mt-3 text-lg text-gray-600 font-medium">
          Solving real problems with code.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            
            {/* Image Area with Dynamic Background */}
            <div className={`relative aspect-[16/10] p-4 sm:p-6 overflow-hidden border-b border-gray-100 ${project.bgColor || 'bg-gray-50'}`}>
              {project.image && (
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-grow p-6">
              
              {/* Title & Top Right Icons */}
              <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold text-2xl text-gray-900 tracking-tight">{project.title}</h3>
                 
                 <div className="flex items-center gap-3 text-gray-400">
                    <TooltipProvider delayDuration={100}>
                      {/* Live Link */}
                      {project.live && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={project.live} target="_blank" className="hover:text-gray-900 transition-colors">
                              <ExternalLink className="w-[22px] h-[22px]" />
                              <span className="sr-only">Live Site</span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="bg-gray-900 text-white text-xs border-none font-medium">
                            Live Site
                          </TooltipContent>
                        </Tooltip>
                      )}
                      
                      {/* Source Code Link */}
                      {project.code && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={project.code} target="_blank" className="hover:text-gray-900 transition-colors">
                              <Github className="w-[22px] h-[22px]" />
                              <span className="sr-only">Source Code</span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="bg-gray-900 text-white text-xs border-none font-medium">
                            Source Code
                          </TooltipContent>
                        </Tooltip>
                      )}

                      {/* Video Dialog */}
                      {project.video && (
                        <Dialog>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <DialogTrigger asChild>
                                <button className="hover:text-gray-900 transition-colors">
                                  <PlayCircle className="w-[22px] h-[22px]" />
                                  <span className="sr-only">Watch Video Intro</span>
                                </button>
                              </DialogTrigger>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" className="bg-gray-900 text-white text-xs border-none font-medium">
                              Watch Demo
                            </TooltipContent>
                          </Tooltip>
                          
                          <DialogContent className="max-w-4xl bg-black p-0 border-0 rounded-none">
                            <DialogHeader className="sr-only">
                              <DialogTitle>Demo of {project.title}</DialogTitle>
                              <DialogDescription/>
                            </DialogHeader>
                            <div className="relative aspect-video">
                              <iframe src={project.video} className="absolute inset-0 h-full w-full" allowFullScreen />
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </TooltipProvider>
                 </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>

              {/* Technologies & View Details Container */}
              <div className="mt-auto flex justify-between gap-6">
                
                {/* Tech Stack */}
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-3">Technologies</p>
                  <TooltipProvider delayDuration={100}>
                    <div className="flex flex-wrap gap-2.5 items-center">
                      {project.techStack.map((tech, i) => (
                        <Tooltip key={i}>
                          <TooltipTrigger asChild>
                            <div className="cursor-default hover:scale-110 transition-transform">
                              <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="bg-gray-900 text-white text-xs border-none font-medium">
                            {tech.name}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </div>

                {/* View Details Button (Bottom Left aligned) */}
                <div className="flex items-center">
                  <Link 
                    href={project.live || project.code || "#"} 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors group/btn"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>

              </div>
            </div>

          </Card>
        ))}
      </div>

    </section>
  );
}