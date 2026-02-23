'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ModeToggle' // Adjust path based on your folder structure

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 transition-colors duration-500">
      <div className="container mx-auto px-4 h-16 flex items-center justify-end">
        
        

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          
          <Button 
            variant="outline" 
            className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-black dark:hover:bg-slate-100 border-none px-6 shadow-sm transition-all" 
            size="sm" 
            asChild
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>

      </div>
    </header>
  )
}