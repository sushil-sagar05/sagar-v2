'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Calendar, X } from "lucide-react";
import { RoughNotation } from "react-rough-notation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import Footer from "./Footer";

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
);

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex flex-col items-center justify-center px-4 py-32 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <div className="max-w-3xl text-center space-y-8">
        <h2 className="font-serif text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
          <RoughNotation
            type="highlight"
            show={true}
            color="#bbf7d0"
            iterations={1}
            padding={10}
            multiline={true}
          >
            Get in Touch
          </RoughNotation>
        </h2>

        <p className="mx-auto max-w-xl text-lg text-gray-600 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="pt-4 flex flex-col gap-4 sm:flex-row justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Meeting
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[900px] h-[85vh] max-h-[650px] p-0 overflow-hidden bg-white rounded-2xl border border-gray-200 flex flex-col gap-0 [&>button]:hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white shrink-0">
                <div>
                  <DialogTitle className="text-xl font-bold text-gray-900">
                    Book a Meeting
                  </DialogTitle>
                </div>
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </DialogClose>
              </div>

              <div className="flex-1 overflow-hidden bg-white relative">
                <iframe
                  src="https://cal.com/sushil-sagar?theme=light"
                  className="w-full h-full border-none"
                  title="Book a meeting"
                />
              </div>
            </DialogContent>
          </Dialog>

          <Button
            size="lg"
            variant="outline"
            className="h-14 px-10 text-lg rounded-full border-2 border-gray-200 hover:border-black hover:bg-gray-50 transition-all duration-300"
            asChild
          >
            <Link href="mailto:sagarsushil1403@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Link>
          </Button>
        </div>

        <div className="pt-10">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Connect with me
          </p>
          <div className="flex justify-center">
            <RoughNotation
              type="circle"
              show={true}
              padding={20}
              strokeWidth={2}
              color="#F59E0B"
              iterations={1}
            >
              <div className="flex justify-center gap-8 p-2">
                <Link
                  href="https://github.com/sushil-sagar05"
                  target="_blank"
                  className="text-gray-500 hover:text-black transition-colors transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://x.com/noob_sagarr"
                  target="_blank"
                  className="text-gray-500 hover:text-black transition-colors transform hover:scale-110"
                >
                  <XIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sushil-sagar09/"
                  target="_blank"
                  className="text-gray-500 hover:text-[#0077b5] transition-colors transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </RoughNotation>
          </div>
        </div>
      </div>
        <Footer/>
    </section>
  );
}
