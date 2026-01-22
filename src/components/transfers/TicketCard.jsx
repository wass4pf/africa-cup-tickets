import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket } from 'lucide-react';

export default function TicketCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  // J'ai remplacé rounded-2xl par rounded-xl partout pour des arrondis plus doux sur un petit format
  const roundedClass = "rounded-xl";

  return (
    <motion.div
      // RÉDUCTION GLOBALE : max-w-[260px] (au lieu de max-w-sm) et padding réduit (px-2)
      className="relative mx-auto max-w-[260px] cursor-pointer px-2 my-4"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="relative">
        
        {/* --- PARTIE HAUTE --- */}
        <motion.div
          layout // Important pour animer le changement d'arrondi
          // LOGIQUE D'ARRONDI :
          // Si ouvert (isExpanded) -> rounded-t-xl (haut arrondi, bas plat)
          // Si fermé (!isExpanded) -> rounded-xl (tout arrondi)
          className={`p-3 bg-white relative z-20 transition-all ${isExpanded ? `rounded-t-${roundedClass}` : roundedClass}`}
        >
          <div className="flex items-start gap-2">
            {/* RÉDUCTION TAILLE : w-8 h-8 et text-xs */}
            <div className="w-8 h-8 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-gray-800">1</span>
            </div>
            <div className="flex-1">
              {/* RÉDUCTION TAILLE : text-sm */}
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                Maroc vs Tanzanie | Huitièmes
              </h3>
              {/* RÉDUCTION TAILLE : text-xs */}
              <div className="text-xs text-gray-600">
                <p>04.01.2026 • 17:00</p>
                <p className="mt-0.5">Complexe Sportif Prince MOULAY ABDELLAH</p>
              </div>
            </div>
          </div>
          
          {/* Indicateur visuel (petit trait) */}
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
              {/* Marge négative pour coller les blocs */}
              <div className="-mt-[1px]">
                  
                  {/* ZONE DE DÉCOUPE ET POINTILLÉS */}
                  {/* Hauteur réduite à h-4 */}
                  <div 
                    className="h-4 w-full relative flex items-center" 
                    style={{
                      // Taille des gradients ajustée pour la nouvelle hauteur (8px au lieu de 12px)
                      background: `
                        radial-gradient(circle at 0 50%, transparent 8px, white 8.5px) left, 
                        radial-gradient(circle at 100% 50%, transparent 8px, white 8.5px) right
                      `,
                      backgroundSize: '51% 100%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                     {/* RETOUR DES POINTILLÉS ICI */}
                     <div className="w-full mx-4 border-t border-dashed border-gray-200"></div>
                  </div>

                  {/* Contenu du bas */}
                  <div className={`bg-white rounded-b-${roundedClass} p-3 pt-1 pb-4`}>
                    
                    {/* RÉDUCTION TAILLE : text-xs */}
                    <p className="text-xs font-bold text-gray-900 mb-3">
                      Gate 07 • Area 229 • Block 229
                    </p>

                    <div className="flex items-center gap-3">
                      {/* RÉDUCTION TAILLE : w-8 h-8 et icone w-4 h-4 */}
                      <div className="w-8 h-8 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
                        <Ticket className="w-4 h-4 text-[#93C5FD]" />
                      </div>
                      <div>
                        {/* RÉDUCTION TAILLE : text-sm et text-xs */}
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