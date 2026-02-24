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
    <div className="fixed top-4 left-4 sm:top-auto sm:bottom-8 sm:left-8 z-[60] flex items-center gap-3 group/player">
      <audio ref={audioRef} src="/fav-track.mp3" loop onError={() => setHasError(true)} />

      <AnimatePresence>
        {showDoodle && !isPlaying && !hasError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-12 left-0 sm:top-auto sm:bottom-16 sm:left-4 pointer-events-none flex flex-col items-start"
          >
            {/* TEXT */}
            <p className="font-serif text-blue-500 dark:text-blue-400 font-bold italic drop-shadow-sm ml-2">
              <span className="sm:hidden text-[10px]">Vibe? </span>
              <span className="hidden sm:inline text-sm whitespace-nowrap">Vibe with me?</span>
            </p>

            {/* ✨ FIXED CURVY ANIMATED ARROW */}
            <motion.svg
              width="45"
              height="65"
              viewBox="0 0 100 120"
              className="text-slate-400 dark:text-slate-600 fill-none stroke-current stroke-[3] ml-2 mt-1"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              {/* DESKTOP PATH: Swoops down and left (sm:block)
                MOBILE PATH: Swoops up and right (block sm:hidden)
              */}
              <motion.path
                // Mobile Path (Top-left pointing up)
                className="block sm:hidden"
                d="M30 100 C 10 70, 60 40, 25 15"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <motion.path
                // Mobile Arrow Head
                className="block sm:hidden"
                d="M10 30 L 25 15 L 45 25"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              <motion.path
                // Desktop Path (Bottom-left pointing down)
                className="hidden sm:block"
                d="M20 15 C 60 30, 10 70, 35 100"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <motion.path
                // Desktop Arrow Head
                className="hidden sm:block"
                d="M20 85 L 35 100 L 55 85"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-1 rounded-full border border-slate-200 dark:border-slate-700/50 shadow-xl">
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