/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from '@/components/Wrapper';
import { ChatBalloon, ChatBalloonProps } from './ChatBalloon';
import { css } from '@emotion/react';
import { Checkbox } from '@/assets/Icon/Checkbox';
import { useFormContext } from 'react-hook-form';

interface ChatAreaProps {
  chats: ChatBalloonProps[];
}

// TODO ref 달아서 채팅 전송 시 스크롤 하단으로 오도록
export const ChatArea = ({ chats }: ChatAreaProps) => {
  const { watch, setValue } = useFormContext();

  return (
    <Flex
      direction="column"
      justify="flex-start"
      gap={14}
      css={css`
        flex: 1;
        overflow: scroll;
        margin-bottom: 16px;
      `}>
      {chats.map((el, index) => (
        <Flex key={`chat${index}`} align="flex-start" justify="flex-start">
          {!el.is_user && (
            <Checkbox
              isChecked={watch('checkedChat')?.index === index}
              handleChatClick={() =>
                setValue('checkedChat', {
                  index: index,
                  content: el.content
                })
              }
            />
          )}
          <ChatBalloon
            isChecked={watch('checkedChat')?.index === index}
            is_user={el.is_user}
            content={el.content}
          />
        </Flex>
      ))}
    </Flex>
  );
};
