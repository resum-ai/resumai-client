/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from '@/components/Wrapper';
import { ChatBalloon, ChatBalloonProps } from './ChatBalloon';
import { css } from '@emotion/react';

interface ChatAreaProps {
  chats: ChatBalloonProps[];
}

// TODO ref 달아서 채팅 전송 시 스크롤 하단으로 오도록
export const ChatArea = ({ chats }: ChatAreaProps) => {
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
        <ChatBalloon key={`chat${index}`} isUser={el.isUser} text={el.text} />
      ))}
    </Flex>
  );
};
