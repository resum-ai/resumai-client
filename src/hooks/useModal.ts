/* eslint-disable react-hooks/exhaustive-deps */
import { useModalState } from '@/store/modalState';
import { useEffect, useRef } from 'react';

export const useModal = () => {
  const { isOpen, setIsOpen, content, setContent } = useModalState(
    (state) => state
  );
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const current = modalRef.current;
      if (isOpen && current && !current.contains(e.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen((prevIsOpen: boolean) => {
      document.body.style.overflowY = prevIsOpen ? 'auto' : 'hidden';
      return !prevIsOpen;
    });
  };

  const openModal = ({ content }: { content: JSX.Element }) => {
    document.body.style.overflowY = 'hidden';
    window.scrollTo(0, 0);
    setIsOpen(true);
    setContent(content);
  };

  const closeModal = () => {
    document.body.style.overflowY = 'auto';
    setIsOpen(false);
    setTimeout(() => {
      setContent(null);
    }, 400);
  };

  return {
    isOpen,
    modalRef,
    toggleModal,
    closeModal,
    openModal,
    content,
    setContent
  };
};
