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
            
            {/* --- BADGE 1 CORRIGÉ (Forme "Demi-ticket" / Sigma) --- */}
            <div className="relative w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
              {/* Le chiffre 1 un peu décalé à gauche */}
              <span className="text-sm font-bold text-gray-800 mr-1">1</span>
              
              {/* Reproduction du symbole "bord de ticket" ou "Sigma" à droite */}
              <svg 
                width="10" height="12" viewBox="0 0 10 12" fill="none" 
                className="absolute right-2.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Une forme en zigzag / sigma qui ressemble au screen */}
                <path 
                  d="M8 1L2 1L5 4L2 6L5 8L2 11L8 11" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Texte Header */}
            <div className="flex-1 pt-0.5">
              {/* CORRECTION 1 : Titre complet */}
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
                  {/* CORRECTION 4 : Padding bas augmenté (pb-10 -> pb-12) */}
                  <div className={`bg-white rounded-b-${radiusSize} p-4 pt-3 pb-12`}>
                    
                    {/* CORRECTION 2 : Police normale (plus de font-bold) */}
                    <p className="text-xs font-medium text-gray-900 mb-5">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-4">
                      
                      {/* CERCLE GRIS + ICÔNE TICKET SIMPLE */}
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                         <Ticket className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                      </div>

                      <div>
                        {/* Row normal */}
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