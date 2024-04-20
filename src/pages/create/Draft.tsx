import { Flex } from '@/components/Wrapper';
import { MemoArea } from '@/components/draft/MemoArea';
import { DraftArea } from '@/components/draft/DraftArea';

// TODO  스크롤...
export const Draft = () => {
  return (
    <Flex gap={10} align="center">
      <DraftArea />
      <MemoArea />
    </Flex>
  );
};
