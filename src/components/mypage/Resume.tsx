/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { Flex, Text } from '../Wrapper';
import { css } from '@emotion/react';

interface ResumeProps {
  title: string;
  due_date: string;
  company: string;
  content: string;
  is_finished: boolean;
  is_liked: boolean;
}

export const Resume = ({
  title,
  due_date,
  company,
  content,
  is_finished,
  is_liked
}: ResumeProps) => {
  return (
    <Wrapper direction="column" justify="space-between" isLiked={is_liked}>
      <Info direction="column" align="flex-start" justify="flex-start" gap={12}>
        <Flex gap={12} align="flex-start" justify="flex-start">
          <Text typo="title" color="blue_black">
            {title}
          </Text>
          <StateChip color="blue_70" typo="main_text">
            작성중
          </StateChip>
        </Flex>
        <Text typo="main_text" color="blue_100">
          {due_date} 마감
        </Text>
      </Info>
      <Content>
        <Text
          typo="sub_text"
          color="black"
          css={css`
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* 표시할 줄 수 */
            -webkit-box-orient: vertical;
          `}>
          {content}
        </Text>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)<{ isLiked: boolean }>`
  width: 436px;
  height: 265px;
  border-radius: 12px;
  overflow: hidden;

  :hover {
    border: 2px solid ${({ theme }) => theme.palette.blue_100};
    box-shadow: 1px 1px 10px 0px rgba(97, 182, 255, 0.38);
    cursor: pointer;
  }
`;

const StateChip = styled(Text)`
  background-color: ${({ theme }) => theme.palette.blue_10};
  border-radius: 8px;
  padding: 4px 16px;
`;

const Info = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.white};
  padding: 36px 40px 24px 40px;
`;

const Content = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.blue_10};
  padding: 20px;
  height: 124px;
  ${({ theme }) => theme.typo.sub_text};
`;
