import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function TransferBadge({ count, type }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Main Avatar */}
      <div className="w-10 h-10 rounded-full bg-[#F0F2F5] flex items-center justify-center">
        <span className="text-sm font-bold text-gray-800">{count}</span>
      </div>

      {/* Badge Icon - Bottom Right */}
      <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-white border-2 rounded-full flex items-center justify-center ${
        type === 'sent' 
          ? 'border-blue-500' 
          : 'border-green-500'
      }`}>
        {type === 'sent' ? (
          <ArrowUpRight className="w-3.5 h-3.5 text-blue-500" />
        ) : (
          <ArrowDownLeft className="w-3.5 h-3.5 text-green-500" />
        )}
      </div>
    </div>
  );
}