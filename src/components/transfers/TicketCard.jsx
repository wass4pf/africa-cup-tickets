import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Ticket } from 'lucide-react';

export default function TicketCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const radiusSize = "xl"; 

  return (
    <motion.div
      className="relative w-full cursor-pointer my-4"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="relative">
        
        {/* --- PARTIE HAUTE --- */}
        <motion.div
          layout
          className={`p-3 bg-white relative z-20 transition-all ${
            isExpanded ? `rounded-t-${radiusSize}` : `rounded-${radiusSize}`
          }`}
        >
          <div className="flex items-start gap-3">
            
            {/* --- BADGE 1 --- */}
            <div className="relative w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <span className="text-sm font-bold text-gray-800 z-10 pr-1">1</span>
              <Ticket 
                className="absolute -right-1 w-5 h-5 text-gray-300" 
                strokeWidth={2} 
              />
            </div>
            
            {/* Texte Header */}
            <div className="flex-1 pt-0.5">
              <h3 className="font-bold text-gray-900 text-sm mb-1 pr-2">
                Maroc vs Tanzanie | Huitièmes de finale
              </h3>
              <div className="text-[11px] text-gray-600 leading-tight">
                <p>04.01.2026 • 17:00</p>
                <p className="mt-0.5">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>

            {/* Flèche */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 mt-1"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
          
          {/* Indicateur visuel */}
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="pt-2 flex justify-center"
            >
              <div className="w-6 h-1 bg-gray-100 rounded-full"></div>
            </motion.div>
          )}
        </motion.div>

        {/* --- PARTIE BASSE --- */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden relative z-10"
            >
              <div className="-mt-[1px]">
                  
                  {/* ZONE DE DÉCOUPE */}
                  <div 
                    className="h-4 w-full relative flex items-center justify-center" 
                    style={{
                      background: `
                        radial-gradient(circle at 0 50%, transparent 8px, white 8.5px) left, 
                        radial-gradient(circle at 100% 50%, transparent 8px, white 8.5px) right
                      `,
                      backgroundSize: '51% 100%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                     <div className="w-full mx-4 h-[2px] overflow-hidden">
                        <svg width="100%" height="2">
                          <line 
                            x1="0" y1="1" x2="100%" y2="1" 
                            stroke="#E5E7EB"
                            strokeWidth="2" 
                            strokeDasharray="10 6"
                            strokeLinecap="round" 
                          />
                        </svg>
                     </div>
                  </div>

                  {/* Contenu du bas */}
                  <div className={`bg-white rounded-b-${radiusSize} p-4 pt-3 pb-8`}>
                    
                    <p className="text-xs font-bold text-gray-900 mb-4">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-4">
                      
                      {/* CERCLE GRIS + ICÔNE TICKET */}
                      <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                         <img 
                           src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/e8e02a256_unnamed__1_-removebg-preview.png"
                           alt="Ticket"
                           className="w-5 h-5 object-contain"
                         />
                      </div>

                      <div>
                        <p className="text-base font-normal text-gray-900">Row U • Seat 18</p>
                        <p className="text-xs text-gray-500">04010081232</p>
                      </div>
                    </div>

                  </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}