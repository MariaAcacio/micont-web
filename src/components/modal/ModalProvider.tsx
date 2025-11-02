'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type OnSaveCallback = () => void;

type ModalContextValue = {
  isModalOpen: boolean;
  modalContent: ReactNode | null;
  onSave: OnSaveCallback | null;
  openModal: (content?: ReactNode, onSave?: OnSaveCallback) => void;
  closeModal: () => void;
};
const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [onSave, setOnSave] = useState<OnSaveCallback | null>(null);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalContent,
        onSave,
        openModal: (content?: ReactNode, onSaveCallback?: OnSaveCallback) => {
          setModalContent(content);
          setOnSave(() => onSaveCallback || null);
          setIsModalOpen(true);
        },
        closeModal: () => {
          setIsModalOpen(false);
          setModalContent(null);
          setOnSave(null);
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
}
