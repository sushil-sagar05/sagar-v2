'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Network } from 'lucide-react'
import { SiLangchain, SiFastapi, SiNextdotjs } from "react-icons/si";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { IoDocumentTextOutline } from "react-icons/io5";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
  isEmail?: boolean;
}

const XIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

export function Hero() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || "#";

  const socialLinks: SocialLink[] = [
    { name: 'X (Twitter)', href: 'https://x.com/noob_sagarr', icon: <XIcon className="h-6 w-6" />, hoverColor: 'hover:text-black dark:hover:text-white' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sushil-sagar09/', icon: <Linkedin className="h-6 w-6" />, hoverColor: 'hover:text-[#0077b5] dark:hover:text-[#3b82f6]' },
    { name: 'GitHub', href: 'https://github.com/sushil-sagar05', icon: <Github className="h-6 w-6" />, hoverColor: 'hover:text-black dark:hover:text-white' },
    { name: 'Email', href: 'mailto:sagarsushil1403@gmail.com', icon: <Mail className="h-6 w-6" />, hoverColor: 'hover:text-red-500', isEmail: true }
  ];

  return (
    <section className="relative flex items-center px-4 py-20 bg-white dark:bg-black overflow-hidden">

      {/* Light Mode Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden pointer-events-none" />

      {/* Dark Mode Grid (softer + premium) */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-5xl flex flex-col items-center text-center md:items-start md:text-left gap-6">

        {/* Avatar */}
        <Image
          src="/447.Productive.png"
          alt="Sushil Sagar"
          width={96}
          height={96}
          className="size-24 rounded-full bg-gray-50 dark:bg-slate-800 object-cover shadow-sm border border-gray-200 dark:border-slate-700"
          priority
        />

        {/* Text Area */}
        <div className="flex flex-col gap-4">
          <RoughNotationGroup show={true}>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 tracking-tight leading-tight">
              Hi, I'm Sushil Sagar
              <span className="text-gray-300 dark:text-slate-700 font-normal hidden sm:inline-block mx-2">|</span>
              <span className="block sm:inline text-2xl md:text-4xl text-gray-500 dark:text-slate-300 mt-2 sm:mt-0 font-medium">
                Full Stack AI Developer
              </span>
            </h1>

            <div className="mt-4 text-xl md:text-2xl font-serif leading-relaxed text-gray-700 dark:text-slate-200 max-w-3xl space-y-6">
              <p>
                Building{' '}
                <span className="relative whitespace-nowrap">

                  {/* Light Mode */}
                  <span className="dark:hidden">
                    <RoughNotation
                      type="highlight"
                      color="#fef08a"
                      iterations={1}
                      multiline
                    >
                      <span className="text-black font-medium px-1">
                        intelligent autonomous systems
                      </span>
                    </RoughNotation>
                  </span>

                  {/* Dark Mode */}
                  <span className="hidden dark:inline">
                    <RoughNotation
                      type="highlight"
                      color="rgba(250, 204, 21, 0.85)"
                      iterations={1}
                      multiline
                    >
                      <span className="text-slate-100 font-medium px-1">
                        intelligent autonomous systems
                      </span>
                    </RoughNotation>
                  </span>
                </span>{' '}
                and{' '}
                <span className="relative whitespace-nowrap">

                  {/* Light Mode */}
                  <span className="dark:hidden">
                    <RoughNotation
                      type="highlight"
                      color="#bfdbfe"
                      iterations={1}
                      multiline
                    >
                      <span className="text-black font-medium px-1">
                        webapps
                      </span>
                    </RoughNotation>
                  </span>

                  {/* Dark Mode */}
                  <span className="hidden dark:inline">
                    <RoughNotation
                      type="highlight"
                      color="rgba(96, 165, 250, 0.85)"
                      iterations={1}
                      multiline
                    >
                      <span className="text-slate-100 font-medium px-1">
                        webapps.
                      </span>
                    </RoughNotation>
                  </span>
                </span>
              </p>

              {/* Tech Focus */}
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-slate-300 text-lg flex flex-wrap justify-center md:justify-start items-center gap-2 font-sans">
                  Focusing on AI/ML pipelines, Agents, and Full-Stack Apps using:
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 font-sans">
                  {[
                    { name: 'Langgraph', icon: Network, color: 'text-gray-700 dark:text-slate-200' },
                    { name: 'Langchain', icon: SiLangchain, color: 'text-gray-700 dark:text-slate-200' },
                    { name: 'FastAPI', icon: SiFastapi, color: 'text-[#009688]' },
                    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-[#f8f8f8] dark:bg-slate-900/70 border border-gray-200 dark:border-slate-700 rounded-xl transition-all hover:bg-white dark:hover:bg-slate-800 hover:border-gray-400 dark:hover:border-slate-500 shadow-sm"
                    >
                      <skill.icon className={`w-4 h-4 ${skill.color}`} />
                      <span className="font-bold text-sm text-gray-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RoughNotationGroup>
        </div>

        {/* Availability */}
        <span className="font-serif text-lg text-gray-400 dark:text-slate-400 italic">
          currently open to new opportunities.
        </span>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <Button
            size="lg"
            asChild
            className="h-12 px-8 text-lg rounded-full shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-gray-100"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>

          <Button
            size="lg"
            asChild
            variant="outline"
            className="h-12 px-8 text-lg bg-white dark:bg-transparent text-black dark:text-white border border-gray-200 dark:border-slate-700 rounded-full hover:border-black dark:hover:border-white transition-all hover:-translate-y-1"
          >
            <Link href={resumeLink} className="flex items-center gap-2">
              <IoDocumentTextOutline className="w-5 h-5" />
              Resume
            </Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center md:justify-start gap-5 pt-3 text-slate-400 dark:text-slate-400">
          <TooltipProvider>
            {socialLinks.map((link) => (
              <Tooltip key={link.name} delayDuration={100}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    target={link.isEmail ? undefined : "_blank"}
                    className={`${link.hoverColor} transition-all hover:scale-110`}
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="bg-gray-900 dark:bg-white text-white dark:text-black border-none font-bold"
                >
                  <p className="text-xs">{link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

      </div>
    </section>
  )
}