'use client'

import { useState, useRef, useEffect } from "react";
import { Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [hasError, setHasError] = useState(false);
  const [showDoodle, setShowDoodle] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current && !hasError) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => setHasError(true));
      }
      setIsPlaying(!isPlaying);
      setShowDoodle(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPlaying) setShowDoodle(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    /* CHANGE: 
       Mobile: top-4 left-4 (Matches your red circle)
       Desktop: sm:top-auto sm:bottom-8 sm:left-8
    */
    <div className="fixed top-4 left-4 sm:top-auto sm:bottom-8 sm:left-8 z-[60] flex items-center gap-3 group/player">
      <audio 
        ref={audioRef} 
        src="/fav-track.mp3" 
        loop 
        onError={() => setHasError(true)} 
      />

      <AnimatePresence>
        {showDoodle && !isPlaying && !hasError && (
          /* CHANGE: Doodle positions differently on mobile to point UP 
             or sit beside the icon instead of above it.
          */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-12 left-0 sm:top-auto sm:bottom-16 sm:left-4 pointer-events-none flex flex-col items-start"
          >
            <span className="font-serif text-blue-500 dark:text-blue-400 font-bold italic text-[10px] sm:text-sm whitespace-nowrap mb-1">
              Vibe with me?
            </span>
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 100 100" 
              className="text-slate-300 dark:text-slate-700 fill-none stroke-current stroke-[4] rotate-[180deg] sm:rotate-[-10deg] ml-2"
            >
              <path d="M20 10 Q 20 50, 20 80" strokeLinecap="round" />
              <path d="M5 65 L 20 80 L 35 65" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-1 rounded-full border border-slate-200 dark:border-slate-800 shadow-xl">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className={`relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all ${
            isPlaying 
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" 
              : "text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          {isPlaying ? (
            <div className="flex items-end gap-[2px] h-3">
              {[0.6, 1, 0.8].map((duration, i) => (
                <motion.span
                  key={i}
                  animate={{ height: ["20%", "100%", "20%"] }}
                  transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
                  className="w-[2px] bg-white rounded-full"
                />
              ))}
            </div>
          ) : (
            <Music className="h-4 w-4" />
          )}
        </motion.button>

        {/* Volume Slider - Hidden on mobile, shown on desktop hover */}
        <div className="hidden sm:flex w-0 overflow-hidden group-hover/player:w-24 transition-all duration-500 ease-in-out items-center pr-2">
          <input
            type="range" min="0" max="1" step="0.01" value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>
    </div>
  );
}