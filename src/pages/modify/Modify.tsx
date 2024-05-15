import { Flex } from '@/components/Wrapper';
import { MemoArea } from '@/components/create/draft/MemoArea';
import { ModifyArea } from '@/components/modify/ModifyArea';

export const Modify = () => {
  return (
    <Flex gap={10} align="center">
      {/* <DraftArea
    values={getValues() as ModalFieldValues}
    result={data?.result}
  /> */}
      <MemoArea />
      <ModifyArea />
      {/* <ConfirmArea /> */}
    </Flex>
  );
};
