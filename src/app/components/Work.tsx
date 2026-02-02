'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; 
import { Github, ExternalLink,  PlayCircleIcon } from "lucide-react"; 
import Image from "next/image";
import { DialogDescription } from "@radix-ui/react-dialog";

import { RoughNotation } from "react-rough-notation";

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
  SiExpress,
} from "react-icons/si";

const QdrantIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <title>Qdrant</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zm-1.636 4.364v8.727h3.273v-8.727h-3.273zm-3.273 0v8.727h1.636v-8.727H7.091zm8.182 0v8.727h1.636v-8.727h-1.636z" />
  </svg>
);

const projects = [
  {
    title: "Nyaynetra",
    description: "AI-powered platform revolutionizing legal document analysis with NLP/ML.",
    image: "/projects/nyaynetra.png",
    live: "https://nyaynetra-ai.vercel.app/",
    code: "https://github.com/sushil-sagar05/nyaynetra.ai",
    video: "https://www.youtube.com/embed/njpeEyhRlCo", 
    techStack: [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiLangchain, name: "LangChain", color: "#1C3C3C" },
      { icon: QdrantIcon, name: "Qdrant", color: "#CC2b5E" },
    ],
  },
  {
    title: "Math Agent",
    description: "Advanced AI Math Tutor with LangGraph workflow and DSPy symbolic processing.",
    image: "/projects/math-agent.png",
    live: "https://github.com/sushil-sagar05/Ai-Math-Tutor-Agent",
    code: "https://github.com/sushil-sagar05/Ai-Math-Tutor-Agent",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    techStack: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiLangchain, name: "LangGraph", color: "#1C3C3C" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: QdrantIcon, name: "Qdrant", color: "#CC2b5E" },
    ],
  },
  {
    title: "MovieMeter",
    description: "Personalized movie discovery platform using content-based recommendations.",
    image: "/projects/moviemeter.png",
    live: "https://movie-meter-fullstack.onrender.com/",
    code: "https://github.com/sushil-sagar05/Movie-Meter",
    video: "", 
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
    techStack: [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiTypescript, name: "TS", color: "#3776AB" },
    ],

  },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [1, 0.9, 0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.95, 0.95, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, y, opacity }}
      transition={{ type: "spring", stiffness: 120, damping: 22 }}
      className="relative mx-auto max-w-7xl px-4 py-24 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
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

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
          >
            
            <div className="relative aspect-video border-b-2 border-black bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <CardHeader className="p-6">
              <div className="flex justify-between items-start mb-2">
                 <CardTitle className="font-bold text-2xl">{project.title}</CardTitle>
                 
                 {project.video && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className=" transition-transform">
                        <PlayCircleIcon className="w-8 h-8 cursor-pointer" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-black p-0 border-0 rounded-none">
                       <DialogHeader className="sr-only">
                         <DialogTitle>Demo</DialogTitle>
                         <DialogDescription/>
                       </DialogHeader>
                      <div className="relative aspect-video">
                        <iframe src={project.video} className="absolute inset-0 h-full w-full" allowFullScreen />
                      </div>
                    </DialogContent>
                  </Dialog>
                 )}
              </div>
              <CardDescription className="text-gray-600 text-base leading-relaxed font-medium">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="mt-auto flex flex-col gap-6 p-6 pt-0">
              
                 
              <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <div 
                        key={i} 
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-gray-200 bg-gray-50 text-xs font-bold text-gray-700 hover:border-black hover:bg-white transition-colors cursor-default"
                    >
                        <tech.icon className="w-3.5 h-3.5" style={{ color: tech.color }} />
                        {tech.name}
                    </div>
                  ))}
              </div>

              <div className="flex gap-4 w-full">
                <Button 
                    asChild 
                    className="flex-1 bg-black text-white border-2 border-black rounded-lg hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
                >
                  <Link href={project.live} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live
                  </Link>
                </Button>

                <Button 
                    asChild 
                    variant="outline"
                    className="flex-1 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
                >
                  <Link href={project.code} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              </div>

            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}