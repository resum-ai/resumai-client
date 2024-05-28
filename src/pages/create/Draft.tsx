/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from '@/components/Wrapper';
import { MemoArea } from '@/components/create/draft/MemoArea';
import { DraftArea } from '@/components/create/draft/DraftArea';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useModal } from '@/hooks/useModal';
import { Step1ModalContent } from '../../components/create/draft/Modal/Step1ModalContent';
import { Step2ModalContent } from '@/components/create/draft/Modal/Step2ModalContent';
import { useQuery } from '@tanstack/react-query';
import { resumeApi } from '@/apis/resume';

export interface ModalFieldValues {
  company: string;
  position: string;
  due_date: string;
  question: string;
}

// TODO  스크롤 생기는 현상
export const Draft = () => {
  const [step, setStep] = useState('step1');
  const { openModal, closeModal } = useModal();
  const { watch, setValue, getValues } = useFormContext();
  const { data, isFetching } = useQuery({
    queryKey: ['question'],
    queryFn: () => resumeApi.GET_RESUME_GUIDELINES(watch('question')),
    enabled: step === 'step3'
  });

  useEffect(() => {
    const step1Content = (
      <Step1ModalContent
        company={watch('company') as string}
        position={watch('position') as string}
        setCompany={setValue}
        setPosition={setValue}
        setStep={() => setStep('step2')}
      />
    );

    const step2Content = (
      <Step2ModalContent
        dueDate={watch('due_date') as string}
        question={watch('question') as string}
        setDueDate={setValue}
        setQuestion={setValue}
        setStep={() => setStep('step3')}
      />
    );

    if (step === 'step1') {
      openModal({ content: step1Content });
    } else if (step === 'step2') {
      openModal({ content: step2Content });
    } else {
      closeModal();
    }

    setValue('title', watch('question'));
  }, [
    step,
    watch('company'),
    watch('position'),
    watch('due_date'),
    watch('question')
  ]);

  return (
    <Flex gap={10} align="center">
      {isFetching && <div>질문을 생성하는 중입니다.</div>}
      {!isFetching && (
        <>
          <DraftArea
            values={getValues() as ModalFieldValues}
            result={data?.result}
          />
          <MemoArea />
        </>
      )}
    </Flex>
  );
};
