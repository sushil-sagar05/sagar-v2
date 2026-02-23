'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Calendar, X } from "lucide-react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import Footer from "./Footer";

const XIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function ContactSection() {
  const { theme } = useTheme();
  return (
    <section
  id="contact"
  className="relative w-full py-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden"
>

  {/* Light Mode Grid */}
  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden pointer-events-none" />

  {/* Dark Mode Grid (softer + premium) */}
  <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

  <div className="relative mx-auto max-w-3xl px-4 text-center space-y-8 z-10 w-full">

        {/* Title */}
        <h2 className="font-serif text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
          <RoughNotation
    type="highlight"
    show={true}
    color={
      theme === "dark"
        ? "rgba(187, 247, 208, 0.75)"  // Soft blue glow for dark mode
        : "#bbf7d0"  // Original yellow for light
    }
    iterations={1}
    padding={2}
  >
    Get in Touch
  </RoughNotation>
        </h2>

        <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-slate-400 leading-relaxed font-medium">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="relative pt-20 pb-6 flex flex-col gap-16 sm:gap-6 sm:flex-row justify-center items-center">

          {/* Book Meeting Section */}
          <div className="relative flex flex-col items-center">
            {/* Desktop Doodle */}
            <div className="absolute -top-16 -left-12 md:-left-20 hidden sm:flex flex-col items-center rotate-[-12deg] z-20 pointer-events-none">
              <span className="font-serif text-blue-500 dark:text-blue-400 font-bold italic text-xl whitespace-nowrap">
                Coffee is on me!
              </span>
              <svg width="40" height="40" viewBox="0 0 100 100" className="text-slate-300 dark:text-white mt-1 ml-6 fill-none stroke-current stroke-[3]">
                <path d="M10 10 Q 50 10, 80 80" strokeLinecap="round" />
                <path d="M50 80 L 80 80 L 75 55" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Mobile Doodle (RESTORED) */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-14 left-1/2 -translate-x-1/2 sm:hidden flex flex-col items-center pointer-events-none"
            >
              <span className="font-serif text-blue-500 dark:text-blue-400/90 font-bold italic text-sm mb-1">
                Coffee?
              </span>
              <svg width="35" height="30" viewBox="0 0 100 100" className="stroke-current text-slate-300 dark:text-white fill-none stroke-[3]">
                <path d="M20 20 Q 50 10, 80 60" strokeLinecap="round" />
                <path d="M70 55 L 80 60 L 75 45" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            <Dialog>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-black dark:hover:bg-slate-100 font-bold">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Meeting
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] h-[85vh] max-h-[650px] p-0 overflow-hidden bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-0 [&>button]:hidden">
                <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                  <DialogTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Book a Meeting</DialogTitle>
                  <DialogClose asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-white hover:bg-slate-100 dark:hover:bg-slate-800">
                      <X className="h-5 w-5" />
                    </Button>
                  </DialogClose>
                </div>
                <div className="flex-1 overflow-hidden relative">
                  <iframe src="https://cal.com/sushil-sagar?theme=light" className="w-full h-full border-none" title="Book a meeting" />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <span className="font-serif italic text-slate-300 dark:text-slate-700 hidden sm:block">or</span>

          {/* Email Section */}
          <div className="relative flex flex-col items-center">
            {/* Desktop Doodle */}
            <div className="absolute -top-16 -right-12 md:-right-20 hidden sm:flex flex-col items-center rotate-[10deg] z-20 pointer-events-none">
              <span className="font-serif text-pink-500 dark:text-pink-400 font-bold italic text-xl whitespace-nowrap">
                Drop a text!
              </span>
              <svg width="40" height="40" viewBox="0 0 100 100" className="text-slate-300 dark:text-white mt-1 mr-6 fill-none stroke-current stroke-[3]">
                <path d="M90 10 Q 50 10, 20 80" strokeLinecap="round" />
                <path d="M50 80 L 20 80 L 25 55" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Mobile Doodle (RESTORED) */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              className="absolute -top-14 left-1/2 -translate-x-1/2 sm:hidden flex flex-col items-center pointer-events-none"
            >
              <span className="font-serif text-pink-500 dark:text-pink-400/90 font-bold italic text-sm mb-1">
                Or email
              </span>
              <svg width="35" height="30" viewBox="0 0 100 100" className="stroke-current text-slate-300 dark:text-white fill-none stroke-[3]">
                <path d="M80 20 Q 50 10, 20 60" strokeLinecap="round" />
                <path d="M30 55 L 20 60 L 25 45" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-transparent text-slate-900 dark:text-white hover:border-slate-900 dark:hover:border-white transition-all font-bold" asChild>
                <Link href="mailto:sagarsushil1403@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Social Section */}
        <div className="pt-12">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Connect with me
          </p>
          <div className="flex justify-center">
            <RoughNotationGroup show={true}>
              <RoughNotation type="circle" padding={20} strokeWidth={2} color="#F59E0B" iterations={2} animationDuration={1500}>
                <div className="flex justify-center gap-4 p-2 relative z-10  ">
                  {[
                    { href: "https://github.com/sushil-sagar05", icon: Github },
                    { href: "https://x.com/noob_sagarr", icon: XIcon },
                    { href: "https://www.linkedin.com/in/sushil-sagar09/", icon: Linkedin }
                  ].map((social, i) => (
                    <motion.div key={i} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href={social.href}
                        target="_blank"
                        className="flex p-3 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
                      >
                        <social.icon className="h-6 w-6" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </RoughNotation>
            </RoughNotationGroup>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}