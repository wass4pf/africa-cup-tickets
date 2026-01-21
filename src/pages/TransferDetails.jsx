import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, ChevronUp, Ticket, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function TransferDetails() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // Ouvert par défaut pour voir l'effet

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="px-4 pt-6 pb-6 space-y-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Transfer Badge Section */}
        <div className="flex justify-center">
          <div className="relative inline-flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">1</span>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-white border-2 border-[#5B8DEE] rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#5B8DEE' }} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Transferred to</p>
          <p className="text-lg font-semibold text-gray-900">mohammed.sadry@gmail.com</p>
        </div>

        {/* --- DEBUT DU BILLET --- */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          {/* Conteneur principal du billet : overflow-hidden est important pour les coins */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden max-w-sm mx-auto">
            
            {/* PARTIE HAUTE (Toujours visible) */}
            <div className="p-4 pb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center flex-shrink-0">
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
                <CollapsibleTrigger>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  )}
                </CollapsibleTrigger>
              </div>
            </div>

            {/* --- LA LIGNE DE DÉCOUPE (C'est ici que la magie opère) --- */}
            <div className="relative flex items-center w-full h-4">
              {/* Encoche Gauche : Cercle gris (couleur du fond de page) positionné à gauche */}
              <div className="w-6 h-6 bg-gray-50 rounded-full absolute -left-3 z-10" />
              
              {/* Ligne pointillée */}
              <div className="flex-1 border-t-2 border-dashed border-gray-100 mx-4 h-0" />
              
              {/* Encoche Droite : Cercle gris positionné à droite */}
              <div className="w-6 h-6 bg-gray-50 rounded-full absolute -right-3 z-10" />
            </div>

            {/* PARTIE BASSE (Détails du siège) */}
            <CollapsibleContent>
              <div className="p-5 pt-2">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Gate 07 • Area 229 • Block 229
                </p>
                {/* Seat Details Box */}
                <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl p-3 border border-gray-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
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
        {/* --- FIN DU BILLET --- */}

      </div>
    </div>
  );
}