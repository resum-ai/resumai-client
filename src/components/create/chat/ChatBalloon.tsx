import { Flex } from '@/components/Wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ChatBalloonProps {
  created_at?: Date;
  is_user: boolean;
  content: string;
  isChecked?: boolean;
}

export const ChatBalloon = ({
  is_user,
  content,
  isChecked
}: ChatBalloonProps) => {
  return (
    <Flex justify={is_user ? 'flex-end' : 'flex-start'}>
      <Balloon isUser={is_user} isChecked={isChecked ?? false}>
        {is_user} {content}
      </Balloon>
    </Flex>
  );
};

const Balloon = styled(Flex)<{ isUser: boolean; isChecked: boolean }>`
  margin-right: 40px;
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
        ${({ isChecked, theme }) =>
    isChecked
      ? css`
          border: 1px solid ${theme.palette.blue_70};
          box-shadow: 1px 1px 10px 0px rgba(97, 182, 255, 0.38);
        `
      : css``}
`;
