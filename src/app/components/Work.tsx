'use client';

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
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
  SiFastapi,
  SiMongodb,
  SiLangchain,
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

const QdrantIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <title>Qdrant</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zm-1.636 4.364v8.727h3.273v-8.727h-3.273zm-3.273 0v8.727h1.636v-8.727H7.091zm8.182 0v8.727h1.636v-8.727h-1.636z" />
  </svg>
);

const projects = [
  {
    title: "Nyaynetra",
    slug: "nyaynetra-ai",
    description:
      "A production-ready RAG-powered document intelligence platform that enables users to upload legal documents, chat with them, and extract key legal insights, risk terms instantly.",
    image: "/projects/nyaynetra.png",
    live: "https://nyaynetra-ai.vercel.app/",
    code: "https://github.com/sushil-sagar05/nyaynetra.ai",
    video: "https://www.youtube.com/embed/njpeEyhRlCo",
    bgColor: "bg-indigo-50 dark:bg-[#111827]",
    techStack: [
      { icon: SiNextdotjs, name: "Next.js", color: "currentColor" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: QdrantIcon, name: "Qdrant", color: "#CC2b5E" },
      { icon: SiLangchain, name: "LangChain", color: "#1C3C3C" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    title: "Math Agent",
    slug: "math-agent",
    description:
      "Advanced AI Math Tutor with LangGraph workflow and DSPy symbolic processing. Generates personalized step-by-step solutions to complex problems.",
    image: "/projects/math-agent.png",
    live: "https://github.com/sushil-sagar05/Ai-Math-Tutor-Agent",
    code: "https://github.com/sushil-sagar05/Ai-Math-Tutor-Agent",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    bgColor: "bg-indigo-50 dark:bg-[#111827]",
    techStack: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiLangchain, name: "LangGraph", color: "#1C3C3C" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: QdrantIcon, name: "Qdrant", color: "#CC2b5E" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
    ],
  },
  {
    title: "MovieMeter",
    slug: "moviemeter",
    description:
      "Full-stack movie discovery platform with personalized recommendations built using Flask + MERN architecture.",
    image: "/projects/moviemeter.png",
    live: "https://movie-meter-fullstack.onrender.com/",
    code: "https://github.com/sushil-sagar05/Movie-Meter",
    video: "",
    bgColor: "bg-indigo-50 dark:bg-[#111827]",
    techStack: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiPython, name: "Flask", color: "#3776AB" },
    ],
  },
  {
    title: "Complaint Hub",
    slug: "complaint-hub",
    description:
      "Modern grievance tracking system with real-time automation and secure access.",
    image: "/projects/complaint-hub.png",
    live: "https://complain-management-mu.vercel.app/",
    code: "https://github.com/sushil-sagar05/complain-management",
    video: "",
    bgColor: "bg-indigo-50 dark:bg-[#111827]",
    techStack: [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiTypescript, name: "TS", color: "#3776AB" },
    ],
  },
];

export default function Work() {
  const { theme } = useTheme();

  return (
    <section className="relative w-full py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      
      {/* Light Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden pointer-events-none" />

      {/* Dark Grid (softer) */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 font-serif text-gray-900 dark:text-slate-100">
          Featured{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color={
              theme === "dark"
                ? "rgba(96, 165, 250, 0.85)"
                : "#fef08a"
            }
            iterations={1}
            padding={3}
          >
            Work
          </RoughNotation>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-[2rem]
              border border-gray-200 dark:border-slate-700
              bg-white
              dark:bg-[#111827]
              shadow-sm dark:shadow-xl dark:shadow-black/40
              transition-all duration-300
              hover:shadow-2xl dark:hover:shadow-black/60"
            >
              <div className={`relative aspect-[16/10] p-4 sm:p-6 overflow-hidden border-b border-gray-100 dark:border-slate-800 ${project.bgColor}`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-600 shadow-sm bg-white dark:bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-grow p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-2xl text-gray-900 dark:text-slate-100 tracking-tight">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3 text-gray-400 dark:text-slate-400">
                    <TooltipProvider delayDuration={100}>
                      {project.live && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={project.live} target="_blank">
                              <ExternalLink className="w-5 h-5 hover:text-gray-900 dark:hover:text-white transition-colors" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="bg-slate-900 dark:bg-white text-white dark:text-black">
                            Live Site
                          </TooltipContent>
                        </Tooltip>
                      )}
                      {project.code && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={project.code} target="_blank">
                              <Github className="w-5 h-5 hover:text-gray-900 dark:hover:text-white transition-colors" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="bg-slate-900 dark:bg-white text-white dark:text-black">
                            Source Code
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </TooltipProvider>
                  </div>
                </div>

                <p className="text-gray-500 dark:text-slate-300 text-[15px] leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-between gap-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-slate-400 mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      {project.techStack.map((tech, i) => (
                        <TooltipProvider key={i} delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="cursor-default hover:scale-110 transition-transform dark:brightness-110">
                                <tech.icon
                                  className={`w-6 h-6 ${
                                    tech.name === "Next.js"
                                      ? "text-black dark:text-white"
                                      : ""
                                  }`}
                                  style={
                                    tech.name !== "Next.js"
                                      ? { color: tech.color }
                                      : undefined
                                  }
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-slate-900 dark:bg-white text-white dark:text-black font-bold">
                              {tech.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/btn"
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
      </div>
    </section>
  );
}