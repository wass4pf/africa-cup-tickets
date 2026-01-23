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
            
            {/* --- BADGE 1 (Ticket coupé) --- */}
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
                    className="h-4 w-full relative flex items-center" 
                    style={{
                      background: `
                        radial-gradient(circle at 0 50%, transparent 8px, white 8.5px) left, 
                        radial-gradient(circle at 100% 50%, transparent 8px, white 8.5px) right
                      `,
                      backgroundSize: '51% 100%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                     <div className="w-full mx-4 border-t-2 border-dashed border-gray-200"></div>
                  </div>

                  {/* Contenu du bas */}
                  <div className={`bg-white rounded-b-${radiusSize} p-4 pt-3 pb-8`}>
                    
                    <p className="text-xs font-bold text-gray-900 mb-4">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-4">
                      
                      {/* CERCLE GRIS + ICÔNE TICKET CORRIGÉE (Ligne solide, non déformée) */}
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                         {/* SVG Personnalisé avec trait plus fin (1.5) pour éviter l'effet "déformé" */}
                         <svg 
                           viewBox="0 0 24 24" 
                           fill="none" 
                           xmlns="http://www.w3.org/2000/svg"
                           className="w-6 h-6 text-gray-400 flex-shrink-0"
                         >
                           <path 
                             d="M2 9V6.5C2 4.01 4.01 2 6.5 2H17.5C19.99 2 22 4.01 22 6.5V9C20.34 9 19 10.34 19 12C19 13.66 20.34 15 22 15V17.5C22 19.99 19.99 22 17.5 22H6.5C4.01 22 2 19.99 2 17.5V15C3.66 15 5 13.66 5 12C5 10.34 3.66 9 2 9Z" 
                             stroke="currentColor" 
                             strokeWidth="1.5" 
                             strokeLinecap="round" 
                             strokeLinejoin="round"
                           />
                           {/* Ligne verticale solide */}
                           <path 
                             d="M16 2V22" 
                             stroke="currentColor" 
                             strokeWidth="1.5" 
                             strokeLinecap="round" 
                             strokeLinejoin="round"
                           />
                         </svg>
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