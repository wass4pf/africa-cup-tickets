import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(createPageUrl('Home'));
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A84A5C] via-[#8B1A1A] to-[#6B1515] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/524cc0316_full-logo.png"
          alt="CAF Africa Cup of Nations Morocco 25"
          className="w-72 h-auto mb-16"
        />
        
        <button
          onClick={() => navigate(createPageUrl('Home'))}
          className="bg-gradient-to-b from-[#9B2A3A] to-[#6B1515] text-white font-bold text-3xl px-16 py-5 rounded-2xl shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.3),inset_0_4px_0_0_rgba(255,255,255,0.1)] border-2 border-[#6B1515]"
          style={{ fontFamily: 'Dunbar, sans-serif' }}
        >
          TICKETS
        </button>
      </motion.div>
    </div>
  );
}