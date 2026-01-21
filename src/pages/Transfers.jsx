import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, ArrowLeftRight, MoreHorizontal, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import TransferBadge from '../components/transfers/TransferBadge';

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

      {/* Filter Button */}
      <div className="px-4 py-3">
        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-600">
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-0">
        {activeTab === 'pending' ? (
          <div className="flex flex-col items-center justify-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md w-full flex flex-col items-center"
            >
              {/* Empty State Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/46f000d86_two_qr_phone.png"
                  alt="No pending transfers"
                  className="w-32 h-32 object-contain"
                />
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
                {/* Transfer Badge */}
                <div className="flex-shrink-0">
                  <TransferBadge count={transfer.ticketCount} type={transfer.type} />
                </div>

                {/* Transfer Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">
                    {transfer.type === 'sent' ? 'Transferred to' : 'Received from'}
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {transfer.email}
                  </p>
                </div>

                {/* Date/Time & Arrow */}
                <div className="flex flex-col items-end gap-1">
                  <p className="text-xs text-gray-500 whitespace-nowrap">
                    {transfer.date} • {transfer.time}
                  </p>
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
          <div className="w-10 h-10 bg-[#D4A5A5] rounded-full flex items-center justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/c18d12009_ic_transfer.png"
              alt="Transfers"
              className="w-5 h-5 object-contain"
            />
          </div>
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