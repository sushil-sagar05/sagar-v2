'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Github, Linkedin, Mail, Network } from 'lucide-react'
import { SiLangchain, SiFastapi, SiNextdotjs } from "react-icons/si";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { IoDocumentTextOutline } from "react-icons/io5";

const XIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

export function Hero() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || "#";
  return (
    <section className="min-h-screen flex items-center px-4 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:gap-12">
        
        <div className="w-full space-y-8 text-center md:w-3/5 md:space-y-10 md:text-left md:py-24">
          <RoughNotationGroup show={true}>
            
            <h1 className="text-4xl font-bold leading-tight md:text-6xl text-gray-900">
              Hi I'm, <span className="text-black">Sushil Sagar</span>
            </h1>

            <div className="space-y-8 font-serif leading-relaxed md:space-y-8 text-gray-700">
              <p className="text-2xl font-light md:text-3xl leading-normal">
                Full stack AI developer building
                <span className="whitespace-nowrap ml-2">
                  <RoughNotation type="highlight" color="#fef08a" iterations={1} multiline={true}>
                    <span className="text-black font-medium px-1">intelligent autonomous</span>
                  </RoughNotation>
                </span>
                {' '}
                <span className="whitespace-nowrap">
                  <RoughNotation type="highlight" color="#bfdbfe" iterations={1} multiline={true}>
                    <span className="text-black font-medium px-1">systems & webapps</span>
                  </RoughNotation>
                </span>
              </p>
              
              <div className="space-y-3">
                <p className='text-gray-400 text-sm font-sans uppercase tracking-wider font-semibold'>
                    Building AI applications using
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center">
                  
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
                    <span className="font-bold text-sm text-gray-800">Fastapi</span>
                  </div>
                  
                  <span className="text-gray-300 font-serif italic text-xl px-1">
                    &
                  </span>

                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#f1f1f1] border border-gray-300 rounded-xl transition-colors hover:bg-white hover:border-gray-400">
                    <SiNextdotjs className="w-4 h-4 text-black" />
                    <span className="font-bold text-sm text-gray-800">Next.js</span>
                  </div>
                </div>
              </div>

              <p className="px-3 py-1 text-gray-500 text-lg md:text-lg md:py-2 hidden md:block border-l-4 border-green-200 bg-gray-50 pl-4">
                focusing on 
                <RoughNotation type="underline" color="#4ade80" strokeWidth={2} padding={2} multiline={true}>
                    <span className="font-bold ml-2 text-xl text-black">AI/ML pipelines, AI Agents <span className='text-gray-400 font-normal'>and</span> Full-Stack Apps.</span>
                </RoughNotation>
              </p>

              <div className="flex flex-col items-center gap-6 pt-4 md:flex-row md:items-center">
                <span className="font-serif text-lg text-gray-500 md:text-lg italic">
                  currently open to new opportunities.
                </span>

                <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="h-12 px-8 text-lg rounded-full shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <Link href="#contact">Contact Me</Link>
                </Button>
  
                <Button 
                size="lg" 
    asChild 
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
              </div>

              <div className="hidden md:flex items-center justify-start gap-3 pt-2 text-gray-400">
                <Link href="https://x.com/noob_sagarr" target="_blank" className="hover:text-black hover:scale-110 transition-all">
                  <XIcon className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/sushil-sagar09/" target="_blank" className="hover:text-[#0077b5] hover:scale-110 transition-all">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/sushil-sagar05" target="_blank" className="hover:text-black hover:scale-110 transition-all">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="mailto:sagarsushil1403@gmail.com" className="hover:text-red-500 hover:scale-110 transition-all">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>

            </div>
          </RoughNotationGroup>
        </div>

        <div className="hidden md:flex w-full justify-center md:justify-end md:w-2/5">
          <div className="relative h-64 w-64 md:h-96 md:w-96 grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="/447.Productive.png"
              alt="Sushil Sagar working productively"
              fill
              className="rounded-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}