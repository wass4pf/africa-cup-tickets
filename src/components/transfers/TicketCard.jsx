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
      {/* Ajout d'un bg-white global pour éviter les artefacts gris dans les coins */}
      <div className="relative bg-white rounded-xl overflow-hidden">
        
        {/* --- PARTIE HAUTE --- */}
        <motion.div
          layout
          // Retrait des rounded conditionnels ici car le conteneur parent gère l'arrondi global
          className="p-3 relative z-20"
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
              className="relative z-10"
            >
              <div>
                  
                  {/* ZONE DE DÉCOUPE NETTE */}
                  {/* Le fond est blanc, et on "creuse" des cercles transparents sur les côtés */}
                  <div 
                    className="h-4 w-full relative flex items-center justify-center bg-white" 
                    style={{
                        // Les dégradés vont du transparent (le trou) vers le blanc (le reste du ticket)
                      backgroundImage: `
                        radial-gradient(circle at 0 50%, transparent 8px, white 8.5px),
                        radial-gradient(circle at 100% 50%, transparent 8px, white 8.5px)
                      `,
                      backgroundPosition: 'left, right',
                      backgroundSize: '51% 100%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                     <div className="w-full mx-4 h-[2px] overflow-hidden z-10">
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
                  {/* Retrait du rounded-b ici aussi */}
                  <div className="p-4 pt-3 pb-8">
                    
                    <p className="text-xs font-bold text-gray-900 mb-4">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-4">
                      
                      {/* CERCLE GRIS + ICÔNE TICKET (PARFAITEMENT COHÉRENTE) */}
                      <div className="relative w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                         {/* 1. On utilise la MÊME icône Lucide que celle du haut pour la forme exacte */}
                         <Ticket 
                           className="w-5 h-5 text-gray-400" 
                           strokeWidth={2} 
                         />
                         {/* 2. On ajoute une barre verticale solide par-dessus les pointillés */}
                         <div className="absolute h-3 w-[2px] bg-gray-400 rounded-full left-[calc(50%+3px)]"></div>
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