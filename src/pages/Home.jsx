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
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white flex flex-col">
      {/* Header with Tabs */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-200 px-4 pt-6 pb-2 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-purple-900 mb-4">My Tickets</h1>
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'upcoming'
                ? 'text-purple-800'
                : 'text-gray-500'
            }`}
          >
            Upcoming events
            {activeTab === 'upcoming' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-800"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`pb-3 text-sm font-medium transition-colors relative flex items-center gap-2 ${
              activeTab === 'past'
                ? 'text-purple-800'
                : 'text-gray-500'
            }`}
          >
            Past events
            <Badge variant="secondary" className="bg-purple-200 text-purple-800 rounded-full h-5 w-5 p-0 flex items-center justify-center text-xs">
              1
            </Badge>
            {activeTab === 'past' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-800"
              />
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6">
        {activeTab === 'upcoming' ? (
          <div className="flex flex-col items-center justify-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md w-full"
            >
              {/* No Tickets Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-24 h-24 text-gray-400"
                  >
                    {/* First Ticket */}
                    <rect
                      x="20"
                      y="30"
                      width="40"
                      height="60"
                      rx="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      transform="rotate(-15 40 60)"
                    />
                    <line x1="25" y1="45" x2="55" y2="45" stroke="currentColor" strokeWidth="2" transform="rotate(-15 40 60)" />
                    <line x1="25" y1="55" x2="55" y2="55" stroke="currentColor" strokeWidth="2" transform="rotate(-15 40 60)" />
                    
                    {/* Second Ticket */}
                    <rect
                      x="40"
                      y="20"
                      width="40"
                      height="60"
                      rx="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      transform="rotate(15 60 50)"
                    />
                    <line x1="45" y1="35" x2="75" y2="35" stroke="currentColor" strokeWidth="2" transform="rotate(15 60 50)" />
                    <line x1="45" y1="45" x2="75" y2="45" stroke="currentColor" strokeWidth="2" transform="rotate(15 60 50)" />
                    
                    {/* Sparkle */}
                    <path d="M 85 75 L 88 78 L 85 81 L 82 78 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <h2 className="text-center text-gray-700 text-lg font-medium mb-6">
                No tickets found
              </h2>

              {/* Info Cards */}
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Ticket className="w-6 h-6 text-purple-700" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-800">Need to know:</span> if you purchased tickets, your mobile tickets will appear in the app closer to the event date. You will receive an email and a notification as soon as your mobile tickets are available.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-700" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    If you logged into the app using an email address other than the one with which you purchased the tickets, please log out and log in again using the correct email address.
                  </p>
                </div>
              </div>

              {/* FAQ Button */}
              <Button
                variant="outline"
                className="w-full border-purple-300 text-purple-800 hover:bg-purple-50 font-medium"
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
            <div className="flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
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
                <div className="w-40 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center p-4 border-r-2 border-dashed border-purple-200">
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
      <div className="bg-white border-t border-purple-200 px-4 py-3 flex justify-around items-center sticky bottom-0">
        <button
          onClick={() => setActiveBottomTab('my-tickets')}
          className="flex flex-col items-center gap-1 transition-colors text-purple-800"
        >
          <Ticket className="w-6 h-6" />
          <span className="text-xs font-medium">My Tickets</span>
        </button>

        <Link
          to={createPageUrl('Transfers')}
          className="flex flex-col items-center gap-1 transition-colors text-gray-400"
        >
          <ArrowLeftRight className="w-6 h-6" />
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