import ReactDOM from 'react-dom';
import React, { ReactNode } from 'react';

interface ModalPortalProps {
  children: ReactNode;
}

export const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el!);
};
