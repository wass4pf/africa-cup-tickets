import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';

export default function Welcome() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('English');

  const handleLogin = () => {
    navigate(createPageUrl('SignIn'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B1A1A] to-[#6B1515] flex flex-col">
      {/* Language Selector */}
      <div className="flex justify-end p-4">
        <button className="flex items-center gap-2 text-white">
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">{language}</span>
          <span className="text-sm">▼</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full max-w-md"
        >
          {/* Logo */}
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/524cc0316_full-logo.png"
            alt="CAF Africa Cup of Nations Morocco 25"
            className="w-64 h-auto mb-12"
          />

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            className="w-full bg-white hover:bg-gray-100 text-[#8B1A1A] font-bold text-lg py-6 rounded-xl shadow-lg"
            style={{ fontFamily: 'Dunbar, sans-serif' }}
          >
            Begin
          </Button>
        </motion.div>
      </div>
    </div>
  );
}