'use client'

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 md:mt-32 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 flex flex-col items-center justify-center gap-2 text-sm font-medium text-gray-500 text-center">
        
        <p>
          © {currentYear} Sushil Sagar. All rights reserved.
        </p>

        <p>
          Built by{' '}
          <Link 
            href="https://x.com/noob_sagarr" 
            target="_blank" 
            className="text-gray-900 font-bold hover:text-blue-600 transition-colors"
          >
            Sushil Sagar 
          </Link>
          {' '}at 3 am with a cup of tea.
        </p>

      </div>
    </footer>
  );
}