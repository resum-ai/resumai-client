/* eslint-disable @typescript-eslint/no-unused-vars */
import { ModalPortal } from './ModalPortal';
import styled from '@emotion/styled';
import { useModal } from '@/hooks/useModal';
import { Flex } from '@/components/Wrapper';

export const Modal = () => {
  const { isOpen, modalRef, openModal, closeModal, content } = useModal();

  return (
    <ModalPortal>
      {isOpen && (
        <ModalWrapper isOpen={isOpen}>
          <ModalContent ref={modalRef}>{content}</ModalContent>
        </ModalWrapper>
      )}
    </ModalPortal>
  );
};

const ModalWrapper = styled(Flex)<{ isOpen: boolean }>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  backdrop-filter: blur(12.5px);
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 12px;
  padding: 70px 50px 40px 50px;
  width: fit-content;
  height: fit-content;
`;
