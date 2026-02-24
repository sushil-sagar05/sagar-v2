'use client'

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RoughNotation } from "react-rough-notation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTwilio,
  SiMongodb,
  SiJavascript,
  SiGithub
} from "react-icons/si";

import { useTheme } from "next-themes";

const experiences = [
  {
    id: "exp-1",
    role: "Full Stack Developer Intern",
    company: "Raizzify",
    logo: "/logos/raizzify.png",
    duration: "Sep 2025 – Dec 2025",
    categories: [
      {
        title: "Project Work: AI Quiz App",
        points: [
          "Built an interactive AI-based quiz application with adaptive questions.",
          "Designed and implemented complex backend logic for quiz flow, user scoring, and real-time progress tracking.",
        ]
      },
      {
        title: "Internal Infrastructure",
        points: [
          "Collaborated with the internal engineering team to redesign and secure the authentication flow.",
          "Integrated Twilio 2FA and Nodemailer, reducing bot-driven login failures by 40% while ensuring seamless user onboarding.",
        ]
      }
    ],
    techStack: [
      { icon: SiReact, name: "React.js", color: "#61DAFB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express.js", color: "#000000" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiTwilio, name: "Twilio", color: "#F22F46" },
    ],
  },
  {
    id: "exp-2",
    role: "Open Source Contributor",
    company: "Hacktoberfest",
    logo: "/logos/hacktoberfest2024.png",
    duration: "Oct 2024",
    points: [
      "Contributed to open-source projects during Hacktoberfest 2024, focusing on bug fixes and feature enhancements.",
      "Collaborated with maintainers to improve the UI and accessibility of various web apps.",
    ],
    techStack: [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiGithub, name: "GitHub", color: "#181717" },
    ],
  },
];

export default function Experience() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { theme } = useTheme();

  return (
    <section className="relative w-full py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">

      {/* Light Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden pointer-events-none" />

      {/* Dark Grid (softer + premium) */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 font-serif text-gray-900 dark:text-gray-100">
          <span className="dark:drop-shadow-[0_0_10px_rgba(250,204,21,0.45)]">
            <RoughNotation
              type="highlight"
              show={true}
              color={
                theme === "dark"
                  ? "rgba(250, 204, 21, 0.35)"   // softer premium glow
                  : "#fef08a"
              }
              iterations={1}
              padding={6}
            >
              Experience
            </RoughNotation>
          </span>
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-6 w-full">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative w-full"
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >

              {/* Hover Doodle Box */}
              <div className="absolute inset-0 pointer-events-none z-0 -m-1">
                <RoughNotation
                  type="box"
                  show={hoveredId === exp.id}
                  color={theme === "dark" ? "#475569" : "#94a3b8"}
                  strokeWidth={2}
                  padding={6}
                  animationDuration={250}
                >
                  <div className="w-full h-full" />
                </RoughNotation>
              </div>

              <AccordionItem
                value={exp.id}
                className="relative z-10 rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md px-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <AccordionTrigger className="hover:no-underline py-6 group">
                  <div className="flex w-full items-center justify-between gap-4 text-left">

                    <div className="flex-1 space-y-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider md:hidden">
                        {exp.company}
                      </span>
                    </div>

                    {/* Desktop Logo */}
                    <div className="hidden md:flex items-center gap-3">
                      {exp.logo && (
                        <div className="relative h-10 w-10 rounded-xl border border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 p-1">
                          <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                        </div>
                      )}
                      <span className="font-mono text-sm font-semibold text-gray-600 dark:text-slate-300 uppercase tracking-wider">
                        {exp.company}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-gray-500 dark:text-slate-400 bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 px-3 py-1.5 rounded-full">
                      {exp.duration}
                    </div>

                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="pb-8 pt-6 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-6">

                    {/* Content */}
                    {exp.categories ? (
                      exp.categories.map((category, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-xs font-black uppercase tracking-widest bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-200 inline-block px-2 py-1 rounded">
                            {category.title}
                          </h4>
                          <ul className="space-y-3">
                            {category.points.map((point, ptIdx) => (
                              <li key={ptIdx} className="flex gap-4 text-[15px] leading-relaxed text-gray-600 dark:text-slate-400">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-slate-600" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <ul className="space-y-4">
                        {exp.points?.map((point, idx) => (
                          <li key={idx} className="flex gap-4 text-[15px] leading-relaxed text-gray-600 dark:text-slate-400">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-slate-600" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack */}
                    {exp.techStack && (
                      <div className="pt-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
                          Tech Used
                        </p>

                        <TooltipProvider delayDuration={100}>
                          <div className="flex flex-wrap gap-3">
                            {exp.techStack.map((tech, i) => (
                              <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:scale-110 transition-all cursor-default">
                                    <tech.icon className="w-4 h-4" style={{ color: tech.color }} />
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-slate-900 text-white dark:bg-white dark:text-black font-semibold">
                                  {tech.name}
                                </TooltipContent>
                              </Tooltip>
                            ))}
                          </div>
                        </TooltipProvider>

                      </div>
                    )}

                  </div>
                </AccordionContent>

              </AccordionItem>
            </div>
          ))}
        </Accordion>

      </div>
    </section>
  );
}