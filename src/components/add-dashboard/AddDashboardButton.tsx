'use client';

import { FaPlus } from 'react-icons/fa';
import { redirect } from 'next/navigation';

export default function AddDashboardButton() {
  return (
    <button
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer "
      onClick={() => {
        redirect('/dashboard/form');
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-sm  w-96 h-96 flex items-center justify-center hover:bg-primary/15 hover:text-white transition-all duration-300">
        <FaPlus className="w-8 h-8 text-primary hover:text-primary-dark" />
      </div>
    </button>
  );
}
