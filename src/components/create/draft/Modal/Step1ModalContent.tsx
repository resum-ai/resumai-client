import { Flex, Space, Text } from '@/components/Wrapper';
import { Input, WriteButton } from '@/components/common';
import { Dropdown } from '@/components/common/Dropdown';
import { JOB_POSITIONS } from '@/constants/position';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface Step1ModalContentProps {
  company: string;
  setCompany: UseFormSetValue<FieldValues>;
  position: string;
  setPosition: UseFormSetValue<FieldValues>;
  setStep: () => void;
}

export const Step1ModalContent = ({
  company,
  setCompany,
  position,
  setPosition,
  setStep
}: Step1ModalContentProps) => {
  console.log({ company: company });
  console.log({ position: position });

  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Text typo="title" color="black">
        지원하는 곳이 어디인가요?
      </Text>
      <Space height={12} />
      <Text typo="sub_text" color="gray3">
        현재 쓰려는 기업에 대한 정보를 남겨주세요.
      </Text>
      <Space height={36} />
      <Input
        value={company}
        onChange={(e) => setCompany('company', e.target.value)}
        placeholder="기업 입력"
        width={352}
        height={48}
      />
      <Space height={20} />
      <Dropdown
        label="position"
        value={position}
        setValue={setPosition}
        options={JOB_POSITIONS}
        width={352}
      />
      <Space height={48} />
      <WriteButton variant="sm" width={352} onClick={setStep}>
        다음 단계
      </WriteButton>
    </Flex>
  );
};
