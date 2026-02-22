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

// Import Tooltip components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Import Tech Stack Icons
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTwilio,
  SiMongodb,
  SiJavascript,
  SiGithub
} from "react-icons/si";

const experiences = [
  {
    id: "exp-1",
    role: "Full Stack Developer Intern",
    company: "Raizzify",
    companyShort: "Raizzify",
    logo: "/logos/raizzify.png",
    duration: "Sep 2025 – Dec 2025",
    // Grouped points for a cleaner breakdown of responsibilities
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
    // Added Tech Stack for badges
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
    companyShort: "Hacktoberfest",
    logo: "/logos/hacktoberfest2024.png",
    duration: "Oct 2024",
    // Fallback standard points for experiences without categories
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

  return (
    <section className="mx-auto max-w-5xl px-4 py-24 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      
      {/* Header */}
      <div className="mb-12 flex flex-col items-start gap-2">
       <RoughNotation
            type="highlight"
            show={true}
            color="#fef08a"
            iterations={1}
            padding={4}
            multiline={true}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Experience
            </h2>
          </RoughNotation>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-6 w-full">
        <Accordion type="single" collapsible className="space-y-6 w-full">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative w-full"
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Box Hover Effect */}
              <div className="absolute inset-0 pointer-events-none z-0 -m-1">
                <RoughNotation
                  type="box"
                  show={hoveredId === exp.id}
                  color="#94a3b8"
                  strokeWidth={2}
                  iterations={1}
                  padding={4}
                  animationDuration={300}
                >
                  <div className="w-full h-full" />
                </RoughNotation>
              </div>

              {/* Accordion Card */}
              <AccordionItem
                value={exp.id}
                className="relative z-10 rounded-2xl border border-gray-200 bg-white px-6 shadow-sm transition-all duration-300 hover:border-gray-300 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="hover:no-underline py-6 group">
                  <div className="flex w-full items-center justify-between gap-4 text-left">
                    
                    {/* Role & Mobile Company */}
                    <div className="flex-1 space-y-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 md:hidden">
                        <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    {/* Desktop Company Logo & Name */}
                    <div className="hidden items-center gap-3 text-sm md:flex">
                      {exp.logo && (
                        <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-1 shadow-sm">
                          <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                        </div>
                      )}
                      <span className="font-mono text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        {exp.company}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="text-xs font-mono font-semibold text-gray-500 min-w-fit bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                      {exp.duration}
                    </div>

                  </div>
                </AccordionTrigger>

                {/* Content Area */}
                <AccordionContent>
                  <div className="pb-8 pt-4 pl-2 md:pl-4 border-t border-gray-100 mt-2 flex flex-col gap-6">
                    
                    {/* Render Categories if they exist (e.g., Raizzify) */}
                    {exp.categories ? (
                      <div className="space-y-6">
                        {exp.categories.map((category, idx) => (
                          <div key={idx} className="space-y-3">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50 inline-block px-2 py-1 rounded">
                              {category.title}
                            </h4>
                            <ul className="space-y-3">
                              {category.points.map((point, ptIdx) => (
                                <li key={ptIdx} className="flex items-start gap-4 text-[15px] leading-relaxed text-gray-600 font-medium">
                                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full border-2 border-gray-400 bg-transparent" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Render standard points if no categories exist (e.g., Hacktoberfest) */
                      <ul className="space-y-4">
                        {exp.points?.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-[15px] leading-relaxed text-gray-600 font-medium">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full border-2 border-gray-400 bg-transparent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack Badges */}
                    {exp.techStack && (
                      <div className="pt-4 mt-2">
                        <p className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</p>
                        <TooltipProvider delayDuration={100}>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, i) => (
                              <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 border border-gray-100 transition-colors hover:bg-gray-100 cursor-default">
                                    <tech.icon className="w-4 h-4" style={{ color: tech.color }} />
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