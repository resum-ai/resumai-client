import styled from '@emotion/styled';
import { Flex, Space, Text } from '../Wrapper';
import { MainButton } from '../common';
import { css } from '@emotion/react';
import { SelectStep } from './SelectStep';
import { TextField } from './TextField';

export const DraftArea = () => {
  return (
    <Wrapper direction="column" align="flex-start" justify="flex-start">
      <TitleArea direction="column" align="flex-start" gap={20}>
        <Flex
          justify="space-between"
          align="center"
          css={css`
            height: 50px;
          `}>
          <Flex gap={12} justify="flex-start">
            <Text typo="title" color="black">
              지원 동기
            </Text>
            <TitleModifyButton>수정</TitleModifyButton>
          </Flex>
          <MainButton>자기소개서 생성</MainButton>
        </Flex>
        <SelectStep
          steps={['관련 질문', '자유 작성', '우대 공고']}
          value={'관련 질문'}
        />
      </TitleArea>
      <Line />
      <Flex
        direction="column"
        justify="flex-start"
        align="flex-start"
        padding="40px 50px"
        gap={20}
        css={css`
          overflow-y: scroll;
        `}>
        <TextField title={'1. 지원한 회사에 대한 열정과 흥미'} value="" />
        <TextField
          title={'2. 지원하는 직무에 관심을 가지게 된 계기'}
          value=""
        />
        <TextField title={'3. 처음 이 회사를 알게된 경로'} value="" />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.palette.gray2};

  /* flex-shrink: 0; */
  width: 942px;
  max-height: 700px;
`;

const TitleArea = styled(Flex)`
  height: 152px;
  width: 100%;
  padding: 29px 50px 25px 53px;
`;

const Line = styled(Space)`
  width: calc(100% - 103px);
  height: 1px;
  background-color: ${({ theme }) => theme.palette.gray2};
  margin: 0px 50px 0px 53px;
`;

const TitleModifyButton = styled.button`
  height: 30px;
  background-color: ${({ theme }) => theme.palette.gray1};
  color: ${({ theme }) => theme.palette.gray4};
  padding: 5px 10px;
  border-radius: 4px;
`;
