import { Flex, Text } from '@/components/Wrapper';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ConfirmTitleProps {
  title: string;
  leftDay: number;
}
export const ConfirmTitle = ({ title, leftDay }: ConfirmTitleProps) => {
  return (
    <Flex direction="column" justify="flex-start" align="flex-start" gap={12}>
      <Flex
        justify="flex-start"
        gap={12}
        css={css`
          width: 400px;
        `}>
        <Text
          typo="title"
          color="blue_black"
          css={css`
            display: block;
            overflow: hidden;
            word-break: break-word;
            white-space: nowrap !important;
            text-overflow: ellipsis;
          `}>
          {title}
        </Text>
        <CompleteTag>작성완료</CompleteTag>
      </Flex>
      <Text typo="main_text" color="blue_100">
        {`${leftDay}일 남음`}
      </Text>
    </Flex>
  );
};

const CompleteTag = styled.div`
  padding: 4px 10px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.palette.gray2};
  color: ${({ theme }) => theme.palette.white};
  ${({ theme }) => theme.typo.main_text};
  border-radius: 8px;
  user-select: none;
`;
