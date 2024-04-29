import { Flex } from '@/components/Wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ChatBalloonProps {
  isUser: boolean;
  text: string;
}

export const ChatBalloon = ({ isUser, text }: ChatBalloonProps) => {
  return (
    <Flex justify={isUser ? 'flex-end' : 'flex-start'}>
      <Balloon isUser={isUser}>
        {isUser} {text}{' '}
      </Balloon>
    </Flex>
  );
};

const Balloon = styled(Flex)<{ isUser: boolean }>`
  margin: 0px 40px;
  padding: 8px;
  width: fit-content;
  ${({ theme }) => theme.typo.sub_text}
  ${({ isUser, theme }) =>
    isUser
      ? css`
          border-radius: 8px 8px 0px 8px;
          background-color: ${theme.palette.blue_100};
          color: ${theme.palette.white};
        `
      : css`
          border-radius: 0px 8px 8px 8px;
          background-color: ${theme.palette.gray1};
          color: ${theme.palette.black};
        `}
`;
