'use client';

import { useEffect } from 'react';
import { useModal } from './ModalProvider';

export function Modal() {
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-hidden={!isModalOpen}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px] opacity-100 transition-opacity"
        onClick={closeModal}
      />

      <div
        role="dialog"
        className="relative z-10 w-[90%] max-w-lg rounded-lg bg-white p-6 shadow-xl outline-none transition-transform duration-200 ease-out translate-y-0 data-[state=closed]:pointer-events-none"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
            Modal
          </h2>
          <button
            type="button"
            onClick={closeModal}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-700">Content goes here.</div>
      </div>
    </div>
  );
}
