'use client'

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, ChevronRight, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Footer from "@/app/components/Footer"; 
import { projectsData } from "@/data/Project"; 

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const 
    } 
  }
};

export default function ProjectDetailsTemplate({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projectData = projectsData[slug as keyof typeof projectsData];

  if (!projectData) return notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-[#000000] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pt-24 pb-12 transition-colors duration-500">
      
      <article className="mx-auto max-w-4xl px-4">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-10">
          
          {/* Main Display Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-xl p-2 sm:p-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-black border border-slate-100 dark:border-white/5">
              <Image src={projectData.heroImage || ""} alt={projectData.title} fill className="object-cover" priority />
            </div>
          </div>

          <RoughNotationGroup show={true}>
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
                {projectData.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-400 leading-relaxed font-light italic">
                {projectData.tagline}
              </p>
            </div>

            {/* Premium Metadata Bar */}
            {projectData.meta && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-200/60 dark:border-white/10 my-10">
                {[
                  { label: "Timeline", value: projectData.meta.timeline },
                  { label: "Role", value: projectData.meta.role },
                  { label: "Team", value: projectData.meta.team },
                  { label: "Status", value: projectData.meta.status, highlight: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-zinc-500">{item.label}</span>
                    <span className="font-bold text-slate-900 dark:text-zinc-200 leading-tight">
                      {item.highlight ? (
                        <RoughNotation type="highlight" color="rgba(34, 197, 94, 0.2)" show={true} padding={4}>
                          <span className="dark:text-green-400">{item.value}</span>
                        </RoughNotation>
                      ) : item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Fixed Action Buttons */}
            <div className="flex flex-wrap items-center gap-10 pt-16 relative">

              {/* LIVE DEMO */}
              {projectData.liveUrl && (
                <div className="relative group/live">
                  <div className="absolute -top-28 left-0 pointer-events-none hidden sm:block">
                    <div className="flex flex-col items-start">
                      <motion.span
                        initial={{ y: 4 }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="font-serif text-blue-600 dark:text-blue-400 font-bold italic text-xl mb-3 whitespace-nowrap"
                      >
                        Try it out!
                      </motion.span>
                      <svg width="110" height="90" viewBox="0 0 110 90" className="text-slate-400 dark:text-zinc-700 fill-none stroke-current stroke-[3]">
                        <motion.path d="M10 10 C 10 60, 80 50, 80 75" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
                        <motion.path d="M70 65 L 80 75 L 90 65" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1 }} />
                      </svg>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="h-14 px-10 rounded-full shadow-lg bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-zinc-200 text-lg font-bold" asChild>
                      <Link href={projectData.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              )}

              {/* SOURCE */}
              {projectData.githubUrl && (
                <div className="relative group/source">
                  <div className="absolute -top-20 -right-6 pointer-events-none hidden sm:block">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 mb-2">
                        <span className="font-serif text-rose-500 dark:text-rose-400 font-semibold italic text-sm whitespace-nowrap">Star it</span>
                        <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-sm">⭐</motion.span>
                      </div>
                      <svg width="80" height="70" viewBox="0 0 80 70" className="text-slate-400 dark:text-zinc-700 fill-none stroke-current stroke-[2]">
                        <motion.path d="M70 5 C 85 35, 20 30, 35 60" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                        <motion.path d="M28 52 L 35 60 L 42 52" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.8 }} />
                      </svg>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-2 border-slate-200 dark:border-white/20 hover:border-slate-900 dark:hover:border-white text-slate-900 dark:text-white bg-transparent text-lg font-bold" asChild>
                      <Link href={projectData.githubUrl} target="_blank">
                        <Github className="mr-2 h-5 w-5" /> Source Code
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              )}
            </div>
          </RoughNotationGroup>
        </motion.div>

        {/* Content Sections */}
        <div className="mt-32 space-y-24">
          
          {/* Tech Stack */}
          {projectData.techStack && (
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500 mb-8 flex items-center gap-3">
                <LayoutTemplate className="w-4 h-4" /> Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {projectData.techStack.map((tech) => (
                  <span key={tech} className="px-5 py-2.5 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-2xl text-sm font-bold text-slate-700 dark:text-zinc-300 hover:border-slate-400 dark:hover:border-white/30 transition-all cursor-default shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Features Grid */}
          {projectData.features && (
            <section>
              <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-white mb-10">Architecture Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projectData.features.map((feature, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-950 p-8 rounded-[2rem] border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all group/card">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4 group-hover/card:scale-110 transition-transform" />
                    <h4 className="font-bold text-xl text-slate-900 dark:text-zinc-100 mb-3">{feature.title}</h4>
                    <p className="text-slate-500 dark:text-zinc-400 leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Impact/Challenges Section */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-rose-50/30 dark:bg-rose-950/20 p-10 rounded-[2.5rem] border border-rose-100/50 dark:border-rose-900/30">
              <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-rose-300 dark:decoration-rose-500 underline-offset-8">Challenges</h3>
              <ul className="space-y-4">
                {projectData.challenges?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-zinc-300 text-[15px] font-medium leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50/30 dark:bg-blue-950/20 p-10 rounded-[2.5rem] border border-blue-100/50 dark:border-blue-900/30">
              <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-blue-300 dark:decoration-blue-500 underline-offset-8">Key Outcomes</h3>
              <ul className="space-y-4">
                {projectData.learnings?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-zinc-300 text-[15px] font-medium leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        {projectData.nextProject && (
          <div className="mt-40 pt-16 border-t border-slate-200 dark:border-white/10">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-500 mb-4 block">Next Project</span>
            <Link href={`/projects/${projectData.nextProject.slug}`} className="group flex items-center gap-4">
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{projectData.nextProject.name}</h2>
              <ChevronRight className="w-10 h-10 text-slate-300 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        )}

      </article>

      <div className="mt-24"><Footer /></div>
    </main>
  );
}