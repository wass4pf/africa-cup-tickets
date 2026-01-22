import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Ticket, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function TransferDetails() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  return (
    // Fond de page général (gris très clair)
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 pt-6 pb-6 space-y-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Transfer Badge (Celui du haut reste sur fond BLANC avec flèche BLEUE) */}
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

        {/* --- TICKET (Style exact de la photo beige/gris) --- */}
        <div className="mx-auto max-w-sm">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            {/* FOND DU BILLET : #ECECE8 (Beige/Gris chaud) 
                Pas de bordure visible pour éviter les doubles lignes 
            */}
            <div className="bg-[#ECECE8] rounded-xl shadow-sm overflow-hidden relative">
              
              {/* --- PARTIE HAUTE --- */}
              <div className="p-3 relative z-10 bg-[#ECECE8]">
                <div className="flex items-start gap-3">
                  {/* Rond "1" : Plus foncé que le billet (#D9D9D6) */}
                  <div className="w-8 h-8 bg-[#D9D9D6] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-gray-900">1</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm mb-1 truncate pr-2">
                      Maroc vs Tanzanie | Huitièmes de finale
                    </h3>
                    <div className="text-[11px] text-gray-600 leading-tight">
                      <p>04.01.2026 • 17:00 • Complexe Sportif</p>
                      <p>Prince MOULAY ABDELLAH</p>
                    </div>
                  </div>
                  
                  {/* Flèche animation */}
                  <CollapsibleTrigger asChild>
                    <button className="flex-shrink-0 mt-1 focus:outline-none p-1">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      </motion.div>
                    </button>
                  </CollapsibleTrigger>
                </div>
              </div>

              {/* --- CONTENU DÉPLIABLE --- */}
              <CollapsibleContent>
                
                {/* --- LIGNE DE DÉCOUPE --- */}
                <div className="relative flex items-center w-full h-6 bg-[#ECECE8]">
                  {/* Encoche GAUCHE :
                      - Couleur = bg-gray-50 (Fond de la page)
                      - Margin négatif (-left-[4px]) pour bien mordre le bord
                  */}
                  <div className="absolute -left-[4px] w-4 h-6 bg-gray-50 rounded-r-full z-20" />
                  
                  {/* Ligne pointillée (Gris moyen) */}
                  <div className="flex-1 border-t border-dashed border-gray-400 mx-6 h-0 opacity-40" />
                  
                  {/* Encoche DROITE */}
                  <div className="absolute -right-[4px] w-4 h-6 bg-gray-50 rounded-l-full z-20" />
                </div>

                {/* --- PARTIE BASSE --- */}
                <div className="p-3 pt-1 bg-[#ECECE8]">
                  <p className="text-xs font-semibold text-gray-900 mb-2 pl-1">
                    Gate 07 • Area 229 • Block 229
                  </p>
                  
                  <div className="flex items-center gap-3 p-1"> 
                    {/* Icone Ticket : Cercle foncé (#D9D9D6) + Icone ligne fine */}
                    <div className="w-8 h-8 bg-[#D9D9D6] rounded-full flex items-center justify-center flex-shrink-0">
                      <Ticket className="w-4 h-4 text-gray-700 stroke-[1.5]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Row U • Seat 18</p>
                      <p className="text-[10px] text-gray-600">04010081232</p>
                    </div>
                  </div>
                </div>

              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>

      </div>
    </div>
  );
}