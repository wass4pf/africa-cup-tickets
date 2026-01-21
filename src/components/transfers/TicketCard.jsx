import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket } from 'lucide-react';

export default function TicketCard({ transfer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative mx-auto max-w-sm cursor-pointer px-4"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="bg-white shadow-lg relative rounded-2xl overflow-hidden">
        {/* Left notch */}
        <div className="absolute left-0 top-[140px] w-5 h-10 bg-gray-50 rounded-r-full z-10"></div>
        {/* Right notch */}
        <div className="absolute right-0 top-[140px] w-5 h-10 bg-gray-50 rounded-l-full z-10"></div>
        
        <div className="relative">
          {/* Top Section - Always Visible */}
          <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-gray-800">1</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                Maroc vs Tanzanie | Huitièmes de finale
              </h3>
              <div className="text-sm text-gray-600">
                <p>04.01.2026 • 17:00</p>
                <p className="text-xs mt-1">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tear Line */}
        <div className="relative px-5">
          <div className="border-t-2 border-dashed border-gray-300"></div>
        </div>

        {/* Bottom Section - Expandable */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-5 pt-4 space-y-4">
                {/* Seat Details */}
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    Gate 07 • Area 229 • Block 229
                  </p>
                  <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl p-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Ticket className="w-5 h-5 text-[#93C5FD]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Row U • Seat 18</p>
                      <p className="text-xs text-gray-600 mt-1">04010081232</p>
                    </div>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center py-4">
                  <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <div className="w-28 h-28 bg-white rounded grid grid-cols-4 gap-1 p-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'} rounded-sm`}></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Scan at entrance</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tap to expand indicator */}
        {!isExpanded && (
          <div className="pb-3 flex justify-center">
            <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
          </div>
        )}
      </div>
    </motion.div>
  );
}