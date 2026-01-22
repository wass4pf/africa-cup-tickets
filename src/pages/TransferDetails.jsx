import React from 'react';
import { ChevronLeft, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TicketCard from '../components/transfers/TicketCard';

export default function TransferDetails() {
  const navigate = useNavigate();

  return (
    // Fond de la page : GRIS CLAIR (bg-gray-50)
    // C'est ce gris qu'on verra à travers les trous du ticket
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 pt-6 pb-6 space-y-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Transfer Badge (Haut de page) */}
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
        {/* C'est ici qu'on appelle le composant propre, sans bordures parasites */}
        <TicketCard />

      </div>
    </div>
  );
}