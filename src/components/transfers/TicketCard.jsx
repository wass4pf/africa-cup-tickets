import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Ticket } from 'lucide-react'; // J'utilise l'icône Ticket de Lucide

export default function TicketCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const radiusSize = "2xl"; 

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
          className={`p-4 bg-white relative z-20 transition-all ${
            isExpanded ? `rounded-t-${radiusSize}` : `rounded-${radiusSize}`
          }`}
        >
          <div className="flex items-start gap-3">
            
            {/* --- BADGE NUMÉRO 1 (COMME SUR LA PHOTO) --- */}
            {/* Cercle gris + Chiffre 1 + Icône Ticket à côté */}
            <div className="w-12 h-12 bg-[#F0F2F5] rounded-full flex items-center justify-center gap-1 flex-shrink-0">
              <span className="text-base font-bold text-gray-800">1</span>
              {/* Petite icône ticket grise, légèrement inclinée ou droite */}
              <Ticket className="w-4 h-4 text-gray-400" strokeWidth={2} />
            </div>
            {/* ----------------------------------------------- */}
            
            {/* Texte Header */}
            <div className="flex-1 pt-1">
              <h3 className="font-bold text-gray-900 text-base mb-1 pr-2">
                Maroc vs Tanzanie | Huitièmes
              </h3>
              <div className="text-xs text-gray-600">
                <p>04.01.2026 • 17:00</p>
                <p className="mt-1">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>

            {/* Flèche */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 mt-2"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
          
          {/* Indicateur visuel */}
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="pt-3 flex justify-center"
            >
              <div className="w-8 h-1 bg-gray-100 rounded-full"></div>
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
                    className="h-5 w-full relative flex items-center" 
                    style={{
                      background: `
                        radial-gradient(circle at 0 50%, transparent 10px, white 10.5px) left, 
                        radial-gradient(circle at 100% 50%, transparent 10px, white 10.5px) right
                      `,
                      backgroundSize: '51% 100%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                     <div className="w-full mx-5 border-t-2 border-dashed border-gray-200"></div>
                  </div>

                  {/* Contenu du bas */}
                  <div className={`bg-white rounded-b-${radiusSize} p-5 pt-4 pb-14`}>
                    
                    <p className="text-sm font-bold text-gray-900 mb-6">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-5">
                      {/* CERCLE GRIS + ICÔNE SVG (Style conservé) */}
                      <div className="w-14 h-14 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                         {/* Je garde le SVG personnalisé pour le bas car il est plus précis pour le siège */}
                         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5H9C7.89543 5 7 5.89543 7 7V8C7 9.10457 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 14.8954 7 16V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V16C17 14.8954 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 9.10457 17 8V7C17 5.89543 16.1046 5 15 5Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.5 5V19" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
                         </svg>
                      </div>

                      <div>
                        <p className="text-lg font-bold text-gray-900">Row U • Seat 18</p>
                        <p className="text-sm text-gray-500">04010081232</p>
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