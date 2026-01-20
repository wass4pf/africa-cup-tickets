import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, ArrowLeftRight, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Transfers() {
  const [activeBottomTab, setActiveBottomTab] = useState('transfers');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-200 px-4 pt-6 pb-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Transfers</h1>
        <div className="flex gap-8">
          <div className="pb-3 text-sm font-medium text-purple-800 relative">
            Pending
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-800" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full flex flex-col items-center"
        >
          {/* Empty State Icon */}
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 text-gray-400"
            >
              {/* First Ticket */}
              <rect
                x="25"
                y="35"
                width="30"
                height="45"
                rx="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(-15 40 57)"
              />
              <line x1="28" y1="47" x2="52" y2="47" stroke="currentColor" strokeWidth="2" transform="rotate(-15 40 57)" />
              <line x1="28" y1="55" x2="52" y2="55" stroke="currentColor" strokeWidth="2" transform="rotate(-15 40 57)" />
              
              {/* Second Ticket */}
              <rect
                x="45"
                y="25"
                width="30"
                height="45"
                rx="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(15 60 47)"
              />
              <line x1="48" y1="37" x2="72" y2="37" stroke="currentColor" strokeWidth="2" transform="rotate(15 60 47)" />
              <line x1="48" y1="45" x2="72" y2="45" stroke="currentColor" strokeWidth="2" transform="rotate(15 60 47)" />
              
              {/* Sparkle */}
              <path d="M 80 70 L 83 73 L 80 76 L 77 73 Z" fill="currentColor" />
            </svg>
          </div>

          <p className="text-gray-500 text-center">No pending messages</p>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-purple-200 px-4 py-3 flex justify-around items-center sticky bottom-0">
        <Link
          to={createPageUrl('Home')}
          className="flex flex-col items-center gap-1 transition-colors text-gray-400"
        >
          <Ticket className="w-6 h-6" />
          <span className="text-xs font-medium">My Tickets</span>
        </Link>

        <button
          onClick={() => setActiveBottomTab('transfers')}
          className="flex flex-col items-center gap-1 transition-colors text-purple-800"
        >
          <ArrowLeftRight className="w-6 h-6" />
          <span className="text-xs font-medium">Transfers</span>
        </button>

        <button
          onClick={() => setActiveBottomTab('more')}
          className="flex flex-col items-center gap-1 transition-colors text-gray-400"
        >
          <MoreHorizontal className="w-6 h-6" />
          <span className="text-xs font-medium">More</span>
        </button>
      </div>
    </div>
  );
}