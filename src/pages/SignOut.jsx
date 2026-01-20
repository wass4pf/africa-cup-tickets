import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import { createPageUrl } from '@/utils';

export default function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    base44.auth.logout(createPageUrl('Welcome'));
  };

  const handleCancel = () => {
    navigate(createPageUrl('More'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B1A1A] to-[#5A0F0F] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        {/* Title and Message */}
        <div className="mb-8">
          <h1 className="text-white text-2xl font-semibold mb-3">Sign out</h1>
          <p className="text-white/90 text-sm leading-relaxed">
            Are you sure that you wish to close your session?
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          {/* Sign out button */}
          <Button
            onClick={handleSignOut}
            className="w-full bg-white hover:bg-gray-100 text-[#8B1A1A] font-semibold text-base py-6 rounded-xl"
          >
            Sign out
          </Button>

          {/* Cancel button */}
          <Button
            onClick={handleCancel}
            variant="outline"
            className="w-full bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold text-base py-6 rounded-xl"
          >
            Cancel
          </Button>
        </div>
      </motion.div>
    </div>
  );
}