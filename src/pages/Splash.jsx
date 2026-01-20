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
    <div className="min-h-screen bg-gradient-to-b from-[#C41E3A] to-[#8B1A1A] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/a6084067e_image.png"
          alt="CAF Africa Cup of Nations Morocco 25"
          className="w-80 h-auto mb-12"
        />
        
        <Button
          onClick={() => navigate(createPageUrl('Home'))}
          className="bg-[#8B1A1A] hover:bg-[#6B1515] text-white font-bold text-2xl py-8 px-16 rounded-2xl shadow-2xl border-4 border-[#C41E3A]"
        >
          TICKETS
        </Button>
      </motion.div>
    </div>
  );
}