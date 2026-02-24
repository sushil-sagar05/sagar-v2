'use client'

import { RoughNotation } from "react-rough-notation";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
export default function BlogSection() {
  const { theme } = useTheme();
  return (
    /* FIX: Full-width background container for seamless dark mode */
    <section className="relative w-full py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">

  {/* Light Mode Grid */}
  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden pointer-events-none" />

  {/* Dark Mode Grid (softer + premium) */}
  <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

  <div className="relative mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">

          {/* Sidebar Title */}
          <div className="md:sticky md:top-32 h-fit text-center md:text-left">
            <h2 className="font-serif text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100">
  Writing <br className="hidden md:block" />
  <span className="inline-block mt-2 dark:drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
    <RoughNotation 
      type="highlight" 
      show={true}
      color={
        theme === "dark"
          ? "rgba(96, 165, 250, 0.85)"  // blue-400 strong for dark
          : "rgba(191, 219, 254, 0.8)"  // soft blue for light
      }
      iterations={1}
      padding={4}
    >
      Corner
    </RoughNotation>
  </span>
</h2>
            <p className="mt-4 text-sm text-gray-500 dark:text-slate-400 font-medium">Thoughts on software engineering, architecture, and AI.</p>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col items-center justify-center py-12 md:py-0">

            <div className="relative w-full max-w-xl p-8 border-2 border-dashed border-gray-300 dark:border-slate-800 rounded-[2.5rem] bg-gray-50/50 dark:bg-slate-900/40 backdrop-blur-sm text-center">

              {/* Icon Container */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm ring-1 ring-gray-100 dark:ring-slate-700">
                <ChefHat className="h-10 w-10 text-gray-400 dark:text-slate-500" />
              </div>

              {/* Status Message */}
              <h3 className="font-serif text-2xl font-bold text-gray-800 dark:text-gray-100">
                Content is currently{' '}
                <span className="relative inline-block">
                   <span className="relative z-10 text-orange-500 dark:text-orange-400">simmering</span>
                   <svg className="absolute -bottom-1 left-0 w-full h-2 text-orange-300 dark:text-orange-900/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 10 10 20 5 T 40 5 T 60 5 T 80 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                   </svg>
                </span>
                ...
              </h3>

              <p className="mt-4 text-gray-500 dark:text-slate-400 leading-relaxed font-medium">
                I'm currently drafting deep dives into <strong>OAuth</strong>, <strong>Agentic Workflows</strong>, and <strong>Scalable Systems</strong>. They aren't quite ready to be served yet.
              </p>

              <div className="mt-8">
                 <Button 
                  variant="outline" 
                  className="rounded-full border-gray-300 dark:border-slate-800 bg-white dark:bg-transparent text-gray-500 dark:text-slate-400 transition-all cursor-not-allowed" 
                  disabled
                >
                    Check back later
                 </Button>
              </div>

            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}