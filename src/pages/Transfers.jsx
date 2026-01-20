import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, ArrowLeftRight, MoreHorizontal, ChevronRight, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Transfers() {
  const navigate = useNavigate();
  const [activeBottomTab, setActiveBottomTab] = useState('transfers');
  const [activeTab, setActiveTab] = useState('completed');

  const completedTransfers = [
    {
      id: 1,
      type: 'sent',
      email: 'mohammed.sadry@gmail.com',
      date: '04 JAN',
      time: '15:35',
      ticketCount: 1
    },
    {
      id: 2,
      type: 'received',
      email: 'abdessamadelbehja@hotmail.com',
      date: '03 JAN',
      time: '15:48',
      ticketCount: 1
    },
    {
      id: 3,
      type: 'sent',
      email: 'aminfki67@gmail.com',
      date: '30 DEC',
      time: '23:04',
      ticketCount: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 pt-6 pb-2 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Transfers</h1>
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('pending')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'pending'
                ? 'text-[#8B1A1A]'
                : 'text-gray-500'
            }`}
          >
            Pending
            {activeTab === 'pending' && (
              <motion.div
                layoutId="transferTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1A1A]"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'completed'
                ? 'text-[#8B1A1A]'
                : 'text-gray-500'
            }`}
          >
            Completed
            {activeTab === 'completed' && (
              <motion.div
                layoutId="transferTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1A1A]"
              />
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-4">
        {activeTab === 'pending' ? (
          <div className="flex flex-col items-center justify-center py-12">
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
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            {completedTransfers.map((transfer) => (
              <div
                key={transfer.id}
                onClick={() => navigate(createPageUrl('TransferDetails'))}
                className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                {/* Ticket Count Badge */}
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-[#8B1A1A]">{transfer.ticketCount}</span>
                    {transfer.type === 'sent' ? (
                      <ArrowUpRight className="w-3 h-3 text-[#8B1A1A]" />
                    ) : (
                      <ArrowDownLeft className="w-3 h-3 text-[#8B1A1A]" />
                    )}
                  </div>
                </div>

                {/* Transfer Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {transfer.type === 'sent' ? 'Transferred to' : 'Received from'}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {transfer.email}
                  </p>
                </div>

                {/* Date/Time & Arrow */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-gray-500 whitespace-nowrap">
                      {transfer.date} • {transfer.time}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </motion.div>
        )}
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

        <button
          onClick={() => setActiveBottomTab('transfers')}
          className="flex flex-col items-center gap-1 transition-colors text-[#8B1A1A]"
        >
          <ArrowLeftRight className="w-6 h-6" />
          <span className="text-xs font-medium">Transfers</span>
        </button>

        <Link
          to={createPageUrl('More')}
          className="flex flex-col items-center gap-1 transition-colors text-gray-400"
        >
          <MoreHorizontal className="w-6 h-6" />
          <span className="text-xs font-medium">More</span>
        </Link>
      </div>
    </div>
  );
}