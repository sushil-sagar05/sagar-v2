'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDoodle, setShowDoodle] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey! I'm an AI assistant. Ask me about Sushil's projects, tech stack, or architecture decisions."
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newUserMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setLoading(true);
    setShowDoodle(false); 

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, newUserMessage] }),
      });

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiText = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        aiText += decoder.decode(value);
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].content = aiText;
          return updated;
        });
      }
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Something went wrong. Please try again." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {/* DOODLE SECTION */}
        {!open && showDoodle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-2 md:right-6 pointer-events-none flex flex-col items-end"
          >
            <p className="font-serif text-blue-500 dark:text-blue-400 font-bold italic drop-shadow-sm">
              {/* DESKTOP ONLY TEXT */}
              <span className="hidden md:block text-base whitespace-nowrap">
                why scroll ? <span className='text-pink-500'>just chat</span>
              </span>
            </p>

            <motion.svg
              width="48"
              height="70"   
              viewBox="0 0 100 130"  
              className="hidden md:block md:mr-6 fill-none stroke-current text-slate-400 dark:text-slate-500 stroke-[2] -rotate-[12deg] drop-shadow-[0_0_6px_rgba(250,204,21,0.4)]"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <path d="M18 20 Q 85 25, 85 105" strokeLinecap="round" />
              <path d="M70 90 L 85 105 L 100 90" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.div>
        )}

        {/* CHAT INTERFACE WINDOW */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[320px] md:w-[360px] h-[450px] md:h-[500px] max-h-[75vh] 
              backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 
              border border-white/20 dark:border-slate-700/40
              rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 md:px-5 md:py-4 border-b border-slate-200/40 dark:border-slate-700/40 flex items-center justify-between bg-white/20 dark:bg-slate-800/20">
              <div className="flex items-center gap-2">
                <div className="p-1 md:p-1.5 bg-blue-500/10 rounded-lg">
                  <Bot className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-xs md:text-sm font-bold dark:text-white block leading-tight">Ai assistant</span>
                  <span className="text-[9px] md:text-[10px] text-emerald-500 flex items-center gap-1 font-medium">
                    <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Online
                  </span>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-3 py-3 md:px-4 md:py-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] md:max-w-[85%] px-3 py-2 md:px-4 md:py-2.5 rounded-2xl shadow-sm ${
                    msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700/50'
                  }`}>
                    <div className="prose prose-xs md:prose-sm dark:prose-invert prose-p:leading-relaxed">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {loading && messages[messages.length - 1].content === '' && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 md:px-4 md:py-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex items-center gap-2 shadow-sm">
                    <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-blue-500 animate-spin" />
                    <span className="text-[10px] md:text-xs text-slate-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <div className="p-3 md:p-4 bg-white/50 dark:bg-slate-900/50 border-t border-slate-200/40 dark:border-slate-700/40">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="relative flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={loading}
                  className="flex-1 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/50 dark:text-white"
                />
                <button type="submit" disabled={!input.trim() || loading} className="p-2 md:p-2.5 bg-blue-600 text-white rounded-full disabled:bg-slate-200">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setOpen(prev => !prev);
          setShowDoodle(false);
        }}
        className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-2xl flex items-center justify-center border-2 md:border-4 border-white dark:border-slate-950 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {open ? <X className="relative z-10 w-5 h-5 md:w-6 md:h-6" /> : <MessageCircle className="relative z-10 w-6 h-6 md:w-7 md:h-7" />}
      </motion.button>
    </div>
  );
}