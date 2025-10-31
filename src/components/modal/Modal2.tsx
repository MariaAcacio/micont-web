'use client';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from './ModalProvider';

export function Modal() {
  const { isModalOpen, closeModal } = useModal();
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Mount flag for portal safety in Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (!isModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  // Close on Escape key
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

  // Focus the modal container when opened (basic focus management)
  useEffect(() => {
    if (isModalOpen && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isModalOpen]);

  if (!mounted || !isModalOpen) return null;

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-hidden={!isModalOpen}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px] opacity-100 transition-opacity"
        onClick={closeModal}
      />

      {/* Dialog */}
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative z-10 w-[90%] max-w-lg rounded-lg bg-white p-6 shadow-xl outline-none transition-transform duration-200 ease-out translate-y-0 data-[state=closed]:pointer-events-none"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
            Modal
          </h2>
          <button
            type="button"
            aria-label="Close modal"
            onClick={closeModal}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-700">
          {/* Replace this with your modal content */}
          Content goes here.
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
