'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Network } from 'lucide-react'
import { SiLangchain, SiFastapi, SiNextdotjs } from "react-icons/si";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { IoDocumentTextOutline } from "react-icons/io5";

// Import Tooltip components (adjust path if your shadcn components are located elsewhere)
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const XIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

export function Hero() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || "#";

  // Array to map through social links cleanly
  const socialLinks = [
    { name: 'X (Twitter)', href: 'https://x.com/noob_sagarr', icon: <XIcon className="h-6 w-6" />, hoverColor: 'hover:text-black' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sushil-sagar09/', icon: <Linkedin className="h-6 w-6" />, hoverColor: 'hover:text-[#0077b5]' },
    { name: 'GitHub', href: 'https://github.com/sushil-sagar05', icon: <Github className="h-6 w-6" />, hoverColor: 'hover:text-black' },
    { name: 'Email', href: 'mailto:sagarsushil1403@gmail.com', icon: <Mail className="h-6 w-6" />, hoverColor: 'hover:text-red-500', isEmail: true }
  ];
  
  return (
    <section className="min-h-screen flex items-center px-4 py-20 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      
      {/* Container: Centered on mobile, left-aligned on md+ screens */}
      <div className="mx-auto w-full max-w-5xl flex flex-col items-center text-center md:items-start md:text-left gap-6">
        
        {/* Avatar Area */}
        <Image
          src="/447.Productive.png"
          alt="Sushil Sagar"
          width={96}
          height={96}
          className="size-24 rounded-full bg-gray-50 object-cover shadow-sm border border-gray-200"
          priority
        />

        {/* Text Area */}
        <div className="flex flex-col gap-4">
          <RoughNotationGroup show={true}>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Hi, I'm Sushil Sagar <span className="text-gray-300 font-normal hidden sm:inline-block mx-2">|</span> <span className="block sm:inline text-2xl md:text-4xl text-gray-500 mt-2 sm:mt-0 font-medium">Full Stack AI Developer</span>
            </h1>

            <div className="mt-4 text-xl md:text-2xl font-serif leading-relaxed text-gray-700 max-w-3xl space-y-6">
              <p>
                Building{' '}
                <span className="whitespace-nowrap">
                  <RoughNotation type="highlight" color="#fef08a" iterations={1} multiline={true}>
                    <span className="text-black font-medium px-1">intelligent autonomous systems</span>
                  </RoughNotation>
                </span>
                {' '}and{' '}
                <span className="whitespace-nowrap">
                  <RoughNotation type="highlight" color="#bfdbfe" iterations={1} multiline={true}>
                    <span className="text-black font-medium px-1">webapps</span>
                  </RoughNotation>
                </span>.
              </p>

              <div className="space-y-4">
                <p className="text-gray-500 text-lg flex flex-wrap justify-center md:justify-start items-center gap-2 font-sans">
                  Focusing on AI/ML pipelines, Agents, and Full-Stack Apps using:
                </p>

                {/* Skills Row: Centered items on mobile */}
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 font-sans">
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#f1f1f1] border border-gray-300 rounded-xl transition-colors hover:bg-white hover:border-gray-400">
                    <Network className="w-4 h-4 text-gray-700" />
                    <span className="font-bold text-sm text-gray-800">Langgraph</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#f1f1f1] border border-gray-300 rounded-xl transition-colors hover:bg-white hover:border-gray-400">
                    <SiLangchain className="w-4 h-4 text-gray-700" /> 
                    <span className="font-bold text-sm text-gray-800">Langchain</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#f1f1f1] border border-gray-300 rounded-xl transition-colors hover:bg-white hover:border-gray-400">
                    <SiFastapi className="w-4 h-4 text-[#009688]" /> 
                    <span className="font-bold text-sm text-gray-800">FastAPI</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#f1f1f1] border border-gray-300 rounded-xl transition-colors hover:bg-white hover:border-gray-400">
                    <SiNextdotjs className="w-4 h-4 text-black" />
                    <span className="font-bold text-sm text-gray-800">Next.js</span>
                  </div>
                </div>
              </div>
            </div>
          </RoughNotationGroup>
        </div>

        {/* Availability */}
        <span className="font-serif text-lg text-gray-400 italic">
          currently open to new opportunities.
        </span>

        {/* Buttons: Centered on mobile */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <Button size="lg" asChild className="h-12 px-8 text-lg rounded-full shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <Link href="#contact">Contact Me</Link>
          </Button>
  
          <Button 
            size="lg" 
            asChild 
            variant="outline"
            className="h-12 px-8 text-lg bg-white text-black border border-gray-200 rounded-full hover:border-black hover:bg-gray-50 transition-all hover:-translate-y-1"
          >
            <Link 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IoDocumentTextOutline className="w-5 h-5" />
              Resume
            </Link>
          </Button>
        </div>

        {/* Social Links with Tooltips: Centered on mobile */}
        <div className="flex items-center justify-center md:justify-start gap-5 pt-3 text-gray-400">
          <TooltipProvider>
            {socialLinks.map((link) => (
              <Tooltip key={link.name} delayDuration={100}>
                <TooltipTrigger asChild>
                  <Link 
                    href={link.href} 
                    target={link.isEmail ? undefined : "_blank"} 
                    className={`${link.hoverColor} hover:scale-110 transition-all`}
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-gray-900 text-white border-none">
                  <p className="text-xs font-medium">{link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

      </div>
    </section>
  )
}