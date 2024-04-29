import { Flex } from '@/components/Wrapper';
import { MemoArea } from '@/components/create/draft/MemoArea';

export const Modify = () => {
  return (
    <Flex gap={10} align="center">
      {/* <DraftArea
    values={getValues() as ModalFieldValues}
    result={data?.result}
  /> */}
      <MemoArea />
      {/* <ConfirmArea /> */}
    </Flex>
  );
};
