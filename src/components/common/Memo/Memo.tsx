import { Space, Text } from '@/components/Wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type MemoType = 'sm' | 'lg';

interface MemoProps {
  type: MemoType;
  title: string;
  content: string;
  createdAt: Date;
}

export const Memo = ({ type, title, content, createdAt }: MemoProps) => {
  return (
    <MemoWrapper type={type}>
      <Text
        typo="title"
        color="black"
        css={css`
          word-wrap: break-word;
        `}>
        {title}
      </Text>
      <Space height={24} />
      <Text
        typo="main_text"
        color="gray5"
        css={css`
          max-height: 149px;
          word-wrap: break-word;
        `}>
        {content}
      </Text>
      <Space height={24} />
      <Text
        typo="sub_text"
        color="gray3"
        css={css`
          max-height: 149px;
          word-wrap: break-word;
        `}>
        수정 {createdAt.toDateString()}
      </Text>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div<{
  type: MemoType;
}>`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.white};

  ${({ type }) =>
    type === 'sm' &&
    css`
      width: 344px;
      height: 344px;
      padding: 32px 32px 26px 32px;
    `};

  ${({ type }) =>
    type === 'lg' &&
    css`
      width: 486px;
      height: 286px;
      padding: 26px 32px;
    `};
`;
