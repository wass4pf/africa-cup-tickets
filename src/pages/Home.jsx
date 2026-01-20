import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, ArrowLeftRight, MoreHorizontal, Mail, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Home() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [activeBottomTab, setActiveBottomTab] = useState('my-tickets');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Tabs */}
      <div className="bg-white border-b border-gray-200 px-4 pt-6 pb-2 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">My Tickets</h1>
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'upcoming'
                ? 'text-[#8B1A1A]'
                : 'text-gray-500'
            }`}
          >
            Upcoming events
            {activeTab === 'upcoming' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1A1A]"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`pb-3 text-sm font-medium transition-colors relative flex items-center gap-2 ${
              activeTab === 'past'
                ? 'text-[#8B1A1A]'
                : 'text-gray-500'
            }`}
          >
            Past events
            <Badge variant="secondary" className="bg-gray-200 text-gray-600 rounded-full h-5 w-5 p-0 flex items-center justify-center text-xs">
              1
            </Badge>
            {activeTab === 'past' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1A1A]"
              />
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pt-2 pb-6">
        {activeTab === 'upcoming' ? (
          <>
            {/* Transfer Banner */}
            <div className="mb-4">
              <Link
                to={createPageUrl('Transfers')}
                className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/c18d12009_ic_transfer.png"
                  alt="Transfer"
                  className="w-6 h-6 object-contain text-[#8B1A1A]"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Transfer your tickets!</p>
                  <p className="text-sm text-gray-600">Click here to transfer your tickets</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md w-full"
            >
              {/* No Tickets Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/46f000d86_two_qr_phone.png"
                  alt="No tickets"
                  className="w-32 h-32 object-contain"
                />
              </div>

              <h2 className="text-center text-gray-700 text-lg font-medium mb-6">
                No tickets found
              </h2>

              {/* Info Cards */}
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/0236c530e_qr_phone.png"
                      alt="QR Phone"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-800">Need to know:</span> if you purchased tickets, your mobile tickets will appear in the app closer to the event date. You will receive an email and a notification as soon as your mobile tickets are available.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/a2395d01f_unknown_email.png"
                      alt="Email"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    If you logged into the app using an email address other than the one with which you purchased the tickets, please log out and log in again using the correct email address.
                  </p>
                </div>
                </div>

                {/* FAQ Button */}
                <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                >
                F.A.Q.
                </Button>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            {/* Thank You Message */}
            <div className="flex items-center gap-3 mb-6 bg-white rounded-xl p-4 shadow-sm">
              <div className="w-10 h-10 bg-[#8B1A1A] rounded-full flex items-center justify-center flex-shrink-0">
                <Ticket className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Thank you for taking part in the event
              </p>
            </div>

            {/* Event Ticket Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex">
                {/* Left Side - Event Image */}
                <div className="w-40 bg-gray-50 flex items-center justify-center p-4 border-r-2 border-dashed border-gray-200">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/0bb5b05a9_ic_launcher.png"
                    alt="CAF Africa Cup"
                    className="w-full object-contain"
                  />
                </div>

                {/* Right Side - Event Details */}
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        Egypte vs Côte d'Ivoire | Quarts de finale
                      </h3>
                      <p className="text-sm text-gray-600">
                        Grand Stade D'AGADIR
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">10</div>
                      <div className="text-xs text-gray-600">JAN</div>
                      <div className="text-sm font-semibold text-gray-700">26</div>
                    </div>
                  </div>

                  {/* Ticket Count */}
                  <div className="flex items-center justify-end gap-2 mt-4 text-sm text-gray-600">
                    <Ticket className="w-4 h-4" />
                    <span className="font-medium">1</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center sticky bottom-0">
        <button
          onClick={() => setActiveBottomTab('my-tickets')}
          className="flex flex-col items-center gap-1 transition-colors text-[#8B1A1A]"
        >
          <Ticket className="w-6 h-6" />
          <span className="text-xs font-medium">My Tickets</span>
        </button>

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