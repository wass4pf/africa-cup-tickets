import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// J'ai retiré 'Ticket' des imports car on utilise un SVG personnalisé maintenant
import { ChevronDown } from 'lucide-react';

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
          className={`p-3 bg-white relative z-20 transition-all ${
            isExpanded ? `rounded-t-${radiusSize}` : `rounded-${radiusSize}`
          }`}
        >
          <div className="flex items-start gap-2">
            
            {/* 1. Pastille numéro 1 */}
            <div className="w-8 h-8 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-gray-800">1</span>
            </div>
            
            {/* 2. Texte Header */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-sm mb-1 pr-2">
                Maroc vs Tanzanie | Huitièmes
              </h3>
              <div className="text-xs text-gray-600">
                <p>04.01.2026 • 17:00</p>
                <p className="mt-0.5">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>

            {/* 3. Flèche */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 mt-1"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>

          </div>
          
          {/* Indicateur visuel (trait du bas) */}
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

        {/* --- PARTIE BASSE (Dépliable) --- */}
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
                     <div className="w-full mx-4 border-t border-dashed border-gray-200"></div>
                  </div>

                  {/* Contenu du bas */}
                  <div className={`bg-white rounded-b-${radiusSize} p-3 pt-1 pb-4`}>
                    
                    <p className="text-xs font-bold text-gray-900 mb-3">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-3">
                      
                      {/* --- NOUVELLE ICÔNE SVG PERSONNALISÉE ICI --- */}
                      {/* J'ai supprimé le cercle conteneur et mis ce SVG gris à la place */}
                      <svg
                        width="20" // Taille équivalente à w-5
                        height="20" // Taille équivalente à h-5
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 text-gray-400" // Couleur grise
                      >
                        {/* Forme du ticket avec les encoches */}
                        <path
                          d="M2 9V6.5C2 4.01 4.01 2 6.5 2H17.5C19.99 2 22 4.01 22 6.5V9C20.34 9 19 10.34 19 12C19 13.66 20.34 15 22 15V17.5C22 19.99 19.99 22 17.5 22H6.5C4.01 22 2 19.99 2 17.5V15C3.66 15 5 13.66 5 12C5 10.34 3.66 9 2 9Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* La ligne verticale décalée à droite */}
                        <path
                          d="M16 2V22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {/* ------------------------------------------ */}

                      <div>
                        <p className="text-sm font-bold text-gray-900">Row U • Seat 18</p>
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