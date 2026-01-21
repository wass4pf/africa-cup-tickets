import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Ticket, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function TransferDetails() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 pt-6 pb-6 space-y-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Transfer Badge (Grand Format - Fond Blanc - Flèche Bleue) */}
        <div className="flex justify-center">
          <div className="relative inline-flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">1</span>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-white border-2 border-[#5B8DEE] rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" style={{ color: '#5B8DEE' }} />
            </div>
          </div>
        </div>

        {/* Transfer Info */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Transferred to</p>
          <p className="text-lg font-semibold text-gray-900">mohammed.sadry@gmail.com</p>
        </div>

        {/* --- TICKET CARD --- */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          {/* FOND DU BILLET : GRIS (#E5E5E5) */}
          <div className="bg-[#E5E5E5] rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
            
            {/* Header du Billet */}
            <div className="p-5 relative z-20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#D1D1D6] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-gray-800">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    Maroc vs Tanzanie | Huitièmes de finale
                  </h3>
                  <div className="text-sm text-gray-600">
                    <p>04.01.2026 • 17:00 • Complexe Sportif Prince MOULAY ABDELLAH</p>
                  </div>
                </div>
                
                {/* Flèche animation */}
                <CollapsibleTrigger asChild>
                   <button className="flex-shrink-0 mt-1 focus:outline-none">
                     <motion.div
                       animate={{ rotate: isOpen ? 180 : 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       <ChevronDown className="w-5 h-5 text-gray-600" />
                     </motion.div>
                   </button>
                </CollapsibleTrigger>
              </div>
            </div>

            {/* Contenu Dépliable */}
            <CollapsibleContent>
              {/* --- LIGNE DE DÉCOUPE AVEC ENCOCHES --- */}
              <div className="relative flex items-center w-full h-8">
                {/* Encoche Gauche : 
                   - bg-gray-50 (couleur du fond de l'écran pour faire "transparent")
                   - rounded-r-full (arrondi vers la droite)
                   - left-0 (collé à gauche)
                */}
                <div className="absolute left-0 w-4 h-8 bg-gray-50 rounded-r-full z-20" />
                
                {/* Ligne Pointillée */}
                <div className="flex-1 border-t-2 border-dashed border-gray-400 mx-6 h-0 opacity-40" />
                
                {/* Encoche Droite : rounded-l-full (arrondi vers la gauche) */}
                <div className="absolute right-0 w-4 h-8 bg-gray-50 rounded-l-full z-20" />
              </div>

              {/* Détails du siège */}
              <div className="p-5 pt-0">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Gate 07 • Area 229 • Block 229
                </p>
                <div className="flex items-center gap-3 bg-[#DCDCDC] rounded-xl p-3">
                  <div className="w-10 h-10 bg-[#C0C0C0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Ticket className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Row U • Seat 18</p>
                    <p className="text-xs text-gray-600 mt-1">04010081232</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>

          </div>
        </Collapsible>
      </div>
    </div>
  );
}