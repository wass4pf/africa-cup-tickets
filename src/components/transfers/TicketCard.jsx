import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket } from 'lucide-react';

export default function TicketCard({ transfer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative mx-auto max-w-sm cursor-pointer px-4 my-6"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
      // IMPORTANT: On utilise drop-shadow sur le parent, pas box-shadow sur l'enfant
      // Cela permet à l'ombre de suivre la découpe du ticket
      style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}
    >
      <div className="relative">
        
        {/* --- PARTIE HAUTE (Toujours visible) --- */}
        <div className="p-5 bg-white rounded-t-2xl relative z-20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-gray-800">1</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-base mb-2">
                Maroc vs Tanzanie | Huitièmes
              </h3>
              <div className="text-sm text-gray-600">
                <p>04.01.2026 • 17:00</p>
                <p className="text-xs mt-1">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>
          </div>
          
          {/* Indicateur visuel quand fermé */}
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="pt-3 flex justify-center"
            >
              <div className="w-8 h-1 bg-gray-100 rounded-full"></div>
            </motion.div>
          )}
        </div>

        {/* --- PARTIE BASSE (Expandable) --- */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden" // Plus de bg-white ici, c'est géré par les enfants
            >
              
              {/* LE SECRET DU TICKET : Ce div fait la transition.
                  Au lieu d'un bg-white solide, on utilise des gradients pour faire les trous.
              */}
              <div 
                className="h-8 w-full relative flex items-center"
                style={{
                  background: `
                    radial-gradient(circle at 0 50%, transparent 12px, white 12.5px) left, 
                    radial-gradient(circle at 100% 50%, transparent 12px, white 12.5px) right
                  `,
                  backgroundSize: '51% 100%', // 51% pour éviter une ligne blanche au milieu
                  backgroundRepeat: 'no-repeat'
                }}
              >
                 {/* Les pointillés (purement décoratifs, posés par dessus) */}
                 <div className="w-full mx-5 border-t-2 border-dashed border-gray-200"></div>
              </div>

              {/* Contenu du bas (Fond blanc standard) */}
              <div className="bg-white rounded-b-2xl p-5 pt-2 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    Gate 07 • Area 229 • Block 229
                  </p>
                  <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl p-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Ticket className="w-5 h-5 text-[#93C5FD]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Row U • Seat 18</p>
                      <p className="text-xs text-gray-600 mt-1">04010081232</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center py-2">
                   <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-400">QR CODE</span>
                   </div>
                   <p className="text-xs text-gray-500 mt-2">Scan at entrance</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}