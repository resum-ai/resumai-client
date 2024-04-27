import { Flex, Space, Text } from '@/components/Wrapper';
import { Input, WriteButton } from '@/components/common';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface Step2ModalContentProps {
  dueDate: string;
  setDueDate: UseFormSetValue<FieldValues>;
  question: string;
  setQuestion: UseFormSetValue<FieldValues>;
  setStep: () => void;
}

export const Step2ModalContent = ({
  dueDate,
  setDueDate,
  question,
  setQuestion,
  setStep
}: Step2ModalContentProps) => {
  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Text typo="title" color="black">
        지원서 정보를 입력해 주세요
      </Text>
      <Space height={12} />
      <Text typo="sub_text" color="gray3">
        현재 쓰려는 지원서의 정보를 작성해 주세요.
      </Text>
      <Space height={36} />
      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate('due_date', e.target.value)}
        placeholder="공고 마감일 입력"
        width={352}
        height={48}
      />
      <Space height={20} />
      <Input
        value={question}
        onChange={(e) => setQuestion('question', e.target.value)}
        placeholder="질문 입력"
        width={352}
        height={48}
      />
      <Space height={48} />
      <WriteButton variant="sm" width={352} onClick={setStep}>
        다음 단계
      </WriteButton>
    </Flex>
  );
};
