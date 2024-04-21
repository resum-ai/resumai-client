/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from '@/components/Wrapper';
import { MemoArea } from '@/components/draft/MemoArea';
import { DraftArea } from '@/components/draft/DraftArea';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useModal } from '@/hooks/useModal';

// TODO  스크롤 생기는 현상
export const Draft = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const { isOpen, openModal, closeModal, content } = useModal();

  useEffect(() => {
    const content = (
      <div>
        <button>hi</button>
      </div>
    );
    openModal({ content });
  }, []);

  return (
    <Flex gap={10} align="center">
      <DraftArea />
      <MemoArea />
    </Flex>
  );
};
