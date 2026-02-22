'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50   backdrop-blur-md dark:bg-black/70">
      <div className="container mx-auto px-4 h-14 flex items-center justify-end">
         
        <Button variant="outline" className='bg-black text-white' size="sm" asChild>
          <Link href="#contact">Get In Touch</Link>
        </Button>
      </div>
    </header>
  )
}
