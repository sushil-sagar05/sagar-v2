'use client'

import { RoughNotation } from "react-rough-notation";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">

        <div className="md:sticky md:top-32 h-fit text-center md:text-left">
          <h2 className="font-serif text-4xl font-bold leading-tight text-gray-900">
            Writing <br className="hidden md:block" />
            <span className="inline-block mt-2">
                <RoughNotation type="highlight" show={true} color="#bfdbfe" iterations={1} padding={6}>
                    Corner
                </RoughNotation>
            </span>
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-light">Thoughts on software engineering, architecture, and AI.</p>
        </div>

        <div className="flex flex-col items-center justify-center py-12 md:py-0">

          <div className="relative w-full max-w-xl p-8 border-2 border-dashed border-gray-300 rounded-3xl bg-gray-50/50 text-center">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100">
               <ChefHat className="h-10 w-10 text-gray-400" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-gray-800">
              Content is currently{' '}
              <span className="relative inline-block">
                 <span className="relative z-10 text-orange-500">simmering</span>
                 <svg className="absolute -bottom-1 left-0 w-full h-2 text-orange-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 10 10 20 5 T 40 5 T 60 5 T 80 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                 </svg>
              </span>
              ...
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">I'm currently drafting deep dives into <strong>OAuth</strong>, <strong>Agentic Workflows</strong>, and <strong>Scalable Systems</strong>. They aren't quite ready to be served yet.</p>

            <div className="mt-8">
               <Button variant="outline" className="rounded-full border-gray-300 hover:bg-white hover:border-black transition-colors" disabled>
                  Check back later
               </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}