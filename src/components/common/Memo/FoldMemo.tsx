import { BigArrowDown, BigArrowUp } from '@/assets/Icon/BigArrow';
import { Flex, Space, Text } from '@/components/Wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

interface FoldMemoProps {
  title: string;
  content: string;
  createdAt: Date;
}

export const FoldMemo = ({ title, content, createdAt }: FoldMemoProps) => {
  const [isFold, setIsFold] = useState(false);

  return (
    <MemoWrapper isFold={isFold}>
      <Title direction="row" align="flex-start" justify="space-between">
        <Text
          typo="title"
          color="black"
          css={css`
            width: 308px;
            word-break: keep-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            white-space: normal;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          `}>
          {title}
        </Text>
        {isFold ? (
          <BigArrowDown onClick={() => setIsFold(!isFold)} />
        ) : (
          <BigArrowUp onClick={() => setIsFold(!isFold)} />
        )}
      </Title>

      <Content
        isFold={isFold}
        direction="column"
        align="flex-start"
        justify="flex-start">
        <Text
          typo="main_text"
          color="gray5"
          css={css`
            word-wrap: break-word;
            word-break: keep-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            white-space: normal;
            -webkit-box-orient: vertical;
            flex-shrink: 0;
            ${isFold
              ? css`
                  height: 90px;
                  -webkit-line-clamp: 3;
                `
              : css`
                  height: 180px;
                  -webkit-line-clamp: 6;
                `}
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
      </Content>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div<{
  isFold: boolean;
}>`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.white};

  width: 486px;
  height: ${({ isFold }) => (isFold ? '286px' : '378px')};
`;

const Title = styled(Flex)`
  padding: 26px 32px 24px 32px;
  width: 486px;

  text-overflow: ellipsis;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray1};
`;

const Content = styled(Flex)<{
  isFold: boolean;
}>`
  padding: 24px 32px 26px 32px;
  width: 100%;
  height: fit-content;

  ${({ isFold, theme }) =>
    !isFold &&
    css`
      background-color: ${theme.palette.gray1};
    `}
`;
