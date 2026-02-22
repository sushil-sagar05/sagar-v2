'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from './components/header';
import { Hero } from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Addition from './components/Addition';
import BlogSection from './components/blog-section';
import ContactSection from './components/contact-section';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-14"> 
        <div>
         <Hero/>
         <Work/>
         <Experience/>
         <Addition/>
         <BlogSection/>
         <ContactSection/>
        
         {/* <Footer/> */}
        </div>
      </main>
    </>
  );
}
