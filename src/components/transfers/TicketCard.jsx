import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket } from 'lucide-react';

export default function TicketCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Style compact conservé
  const roundedClass = "rounded-xl";

  return (
    <motion.div
      // MODIFICATION ICI : J'ai mis 'w-full' au lieu de 'max-w-[260px]'
      // La carte prendra maintenant toute la largeur du conteneur parent
      className="relative w-full cursor-pointer my-4"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="relative">
        
        {/* --- PARTIE HAUTE --- */}
        <motion.div
          layout
          className={`p-3 bg-white relative z-20 transition-all ${isExpanded ? `rounded-t-${roundedClass}` : roundedClass}`}
        >
          <div className="flex items-start gap-2">
            {/* Icône du ticket */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696f816de3955d53dc61efeb/128c95cb6_unnamed-removebg-preview.png"
                alt="Ticket"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                Maroc vs Tanzanie | Huitièmes
              </h3>
              <div className="text-xs text-gray-600">
                <p>04.01.2026 • 17:00</p>
                <p className="mt-0.5">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>
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
                  
                  {/* ZONE DE DÉCOUPE AVEC POINTILLÉS */}
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
                     {/* Les pointillés sont bien là */}
                     <div className="w-full mx-4 border-t border-dashed border-gray-200"></div>
                  </div>

                  {/* Contenu du bas */}
                  <div className={`bg-white rounded-b-${roundedClass} p-3 pt-1 pb-4`}>
                    
                    <p className="text-xs font-bold text-gray-900 mb-3">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                        <Ticket className="w-4 h-4 text-[#93C5FD]" />
                      </div>
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