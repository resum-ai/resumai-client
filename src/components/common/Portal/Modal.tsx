import { ModalPortal } from './ModalPortal';
import styled from '@emotion/styled';
import { useModal } from '@/hooks/useModal';

export const Modal = () => {
  const { isOpen, openModal, closeModal, content } = useModal();

  return (
    <ModalPortal>
      <ModalWrapper isOpen={isOpen}>{content}</ModalWrapper>
    </ModalPortal>
  );
};

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  backdrop-filter: blur(12.5px);
`;
