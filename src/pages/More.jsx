import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, ArrowLeftRight, MoreHorizontal, ChevronRight, User, Globe, Link2, LifeBuoy, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function More() {
  const [activeBottomTab, setActiveBottomTab] = useState('more');

  const menuItems = [
    { icon: User, label: 'My Profile', path: '#' },
    { icon: Globe, label: 'App language', path: '#' },
    { icon: Link2, label: 'More information', path: '#' },
    { icon: LifeBuoy, label: 'Support details', path: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Email */}
      <div className="bg-white border-b border-gray-200 px-4 pt-6 pb-4">
        <p className="text-2xl font-semibold text-gray-900">ad@gmail.com</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6 space-y-4">
        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-[#8B1A1A]" />
              </div>
              <span className="flex-1 text-left text-gray-700 font-medium">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          ))}
        </div>

        {/* Sign Out */}
        <Link to={createPageUrl('SignOut')}>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:bg-gray-50 transition-colors mt-6"
          >
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <LogOut className="w-5 h-5 text-red-600" />
            </div>
            <span className="flex-1 text-left text-gray-700 font-medium">Sign out</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center sticky bottom-0">
        <Link
          to={createPageUrl('Home')}
          className="flex flex-col items-center gap-1 transition-colors text-gray-400"
        >
          <Ticket className="w-6 h-6" />
          <span className="text-xs font-medium">My Tickets</span>
        </Link>

        <Link
          to={createPageUrl('Transfers')}
          className="flex flex-col items-center gap-1 transition-colors text-gray-400"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/c18d12009_ic_transfer.png"
            alt="Transfers"
            className="w-7 h-7 object-contain"
          />
          <span className="text-xs font-medium">Transfers</span>
        </Link>

        <button
          onClick={() => setActiveBottomTab('more')}
          className="flex flex-col items-center gap-1 transition-colors text-[#8B1A1A]"
        >
          <MoreHorizontal className="w-6 h-6" />
          <span className="text-xs font-medium">More</span>
        </button>
      </div>
    </div>
  );
}