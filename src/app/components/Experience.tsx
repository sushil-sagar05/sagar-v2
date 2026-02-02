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

const experiences = [
  {
    id: "exp-1",
    role: "Full Stack Developer Intern",
    company: "Raizzify",
    companyShort: "Raizzify",
    logo: "/logos/raizzify.png",
    duration: "Sep 2025 – Dec 2025",
    points: [
      "Built an interactive AI-based quiz application with adaptive questions using React.js, Node.js, and Express.js.",
      "Designed and implemented backend logic for quiz flow, user scoring, and progress tracking",
      "Engineered a secure authentication flow by integrating Twilio 2FA and Nodemailer; reduced bot-driven login failures by 40% while ensuring seamless user onboarding.",
    ],
  },
  {
    id: "exp-2",
    role: "Open Source Contributor",
    company: "Hacktoberfest",
    companyShort: "Hacktoberfest",
    logo: "/logos/hacktoberfest2024.png",
    duration: "Oct 2024",
    points: [
      "Contributed to open-source projects during Hacktoberfest 2024, focusing on bug fixes and feature enhancements.",
      "Collaborated with maintainers to improve ui of web apps.",
    ],
  },
];

export default function Experience() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight inline-block font-serif text-gray-900">
          <RoughNotation
            type="highlight"
            show={true}
            color="#fef08a"
            iterations={1}
            padding={4}
            multiline={true}
          >
            Work Experience
          </RoughNotation>
        </h2>
        <p className="mt-4 text-gray-500 font-light">Professional timeline and contributions.</p>
      </div>

      <Accordion type="single" collapsible className="space-y-6 max-w-3xl">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative"
            onMouseEnter={() => setHoveredId(exp.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
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

            <AccordionItem
              value={exp.id}
              className="relative z-10 rounded-xl border border-gray-200 bg-white px-5 shadow-sm transition-all duration-300 hover:border-gray-300 data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="hover:no-underline py-6 group">
                <div className="flex w-full items-center justify-between gap-4 text-left">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 md:hidden">
                      <span className="font-mono text-xs font-medium text-gray-500 uppercase tracking-wider">{exp.company}</span>
                    </div>
                  </div>

                  <div className="hidden items-center gap-3 text-sm md:flex">
                    {exp.logo && (
                      <div className="relative h-8 w-8 overflow-hidden rounded border border-gray-100 bg-gray-50 p-0.5">
                        <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                      </div>
                    )}
                    <span className="font-mono text-sm font-medium text-gray-600 uppercase tracking-tight">{exp.company}</span>
                  </div>

                  <div className="text-xs font-mono font-medium text-gray-400 min-w-fit bg-gray-50 px-2 py-1 rounded">{exp.duration}</div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="pb-6 pt-2 pl-2 md:pl-4 border-t border-gray-100 mt-2">
                  <ul className="space-y-4">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-sm leading-relaxed text-gray-600 font-light">
                        <span className="mt-1.5 h-3 w-3 shrink-0 rounded-none border border-blue-400 bg-transparent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </section>
  );
}