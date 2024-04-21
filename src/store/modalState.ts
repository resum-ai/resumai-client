import { ReactNode } from 'react';
import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  content: ReactNode;
  setIsOpen: (value: boolean | ((prevState: boolean) => boolean)) => void;
  setContent: (content: ReactNode) => void;
}

export const useModalState = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  setIsOpen: (value: boolean | ((prevState: boolean) => boolean)) =>
    set((state) => ({
      isOpen: typeof value === 'function' ? value(state.isOpen) : value
    })),
  setContent: (content: ReactNode) => set(() => ({ content }))
}));
