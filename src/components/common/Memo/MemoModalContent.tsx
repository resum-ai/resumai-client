/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Space, Text } from '@/components/Wrapper';
import { Input } from '../Input/Input';
import { Ellipsis } from '@/assets/Icon/Ellipsis';

interface MemoModalContent {
  title?: string;
  date: Date;
  content?: string;
  onModify?: () => void;
  onDelete?: () => void;
}

export const MemoModalContent = ({
  title,
  date,
  content
  // onModify,
  // onDelete
}: MemoModalContent) => {
  return (
    <Flex direction="column" gap={36} justify="flex-start">
      <Flex align="flex-start" justify="space-between">
        <div>
          <Text typo="title" color="blue_black">
            {title ?? ' 새로운 메모'}
          </Text>
          <Space height={12} />
          <Text typo="sub_text" color="gray3">
            작성: {date.toString()}
          </Text>
        </div>
        <Ellipsis />
      </Flex>
      <Input
        value={content ?? ''}
        placeholder="내용을 입력해 주세요"
        multiline
        width={712}
        height={400}
      />
    </Flex>
  );
};
