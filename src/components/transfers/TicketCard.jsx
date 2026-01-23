import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Ticket } from 'lucide-react';

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
            
            {/* --- BADGE NUMÉRO 1 (Ticket coupé) --- */}
            <div className="relative w-12 h-12 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              {/* Le numéro reste au dessus (z-10) et un peu à gauche */}
              <span className="text-base font-bold text-gray-800 z-10 pr-1">1</span>
              
              {/* Icône Ticket en arrière plan, décalée à droite pour être coupée */}
              <Ticket 
                className="absolute -right-1 w-6 h-6 text-gray-300" 
                strokeWidth={2} 
              />
            </div>
            {/* -------------------------------------- */}
            
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
                  {/* pb-10 : C'est l'entre-deux que tu voulais (plus grand que pb-6, moins que pb-14) */}
                  <div className={`bg-white rounded-b-${radiusSize} p-5 pt-4 pb-10`}>
                    
                    <p className="text-sm font-bold text-gray-900 mb-6">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-5">
                      
                      {/* --- CERCLE GRIS + ICÔNE TICKET SIMPLE (RETOUR A L'ANCIENNE VERSION) --- */}
                      <div className="w-14 h-14 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                         {/* J'ai remis l'icône Lucide standard comme demandé */}
                         <Ticket className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
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