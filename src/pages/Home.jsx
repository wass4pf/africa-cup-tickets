import React from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#C8102E] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
      
      {/* Main Content */}
      <motion.div 
        className="flex flex-col items-center justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Official Logo */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/0bb5b05a9_ic_launcher.png"
            alt="CAF Africa Cup of Nations Morocco 25"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Tickets Button - Fixed Right Side */}
      <motion.div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        <motion.button
          className="bg-[#A50D0D] hover:bg-[#8B0000] text-white font-bold py-8 px-4 rounded-l-lg shadow-2xl flex flex-col items-center gap-2 border-l-4 border-t-4 border-b-4 border-[#8B0000]/50 transition-all duration-300"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('#', '_blank')}
        >
          <Ticket className="w-6 h-6 rotate-90" />
          <span className="writing-mode-vertical text-lg tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            TICKETS
          </span>
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/15 rounded-full" />
    </div>
  );
}