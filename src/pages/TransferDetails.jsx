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

        {/* Transfer Badge (Original : Fond Blanc + Flèche Bleue) */}
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
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 relative">
            
            {/* Header */}
            <div className="p-5 relative z-20 bg-white">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#FFFFFF] rounded-full flex items-center justify-center flex-shrink-0">
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
                       <ChevronDown className="w-5 h-5 text-gray-400" />
                     </motion.div>
                   </button>
                </CollapsibleTrigger>
              </div>
            </div>

            {/* Contenu Dépliable */}
            <CollapsibleContent>
              {/* --- LIGNE DE DÉCOUPE (VISIBLE) --- */}
              <div className="relative flex items-center w-full h-10 bg-white">
                
                {/* ENCOCHE GAUCHE : Gros demi-cercle gris collé à gauche */}
                {/* IMPORTANT : bg-gray-50 doit être la même couleur que le fond de la page */}
                <div className="absolute left-0 w-5 h-10 bg-gray-50 rounded-r-full z-50" />
                
                {/* Ligne Pointillée : Bien visible */}
                <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-7 h-0" />
                
                {/* ENCOCHE DROITE : Gros demi-cercle gris collé à droite */}
                <div className="absolute right-0 w-5 h-10 bg-gray-50 rounded-l-full z-50" />
                
              </div>

              {/* Détails */}
              <div className="p-5 pt-0 bg-white">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Gate 07 • Area 229 • Block 229
                </p>
                <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl p-3 border border-gray-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    {/* Ticket Bleu (Original) */}
                    <Ticket className="w-5 h-5 text-blue-300" />
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