import styled from '@emotion/styled';
import { Flex, Space, Text } from '../Wrapper';
import { css } from '@emotion/react';

export const Section1 = () => {
  return (
    <Wrapper>
      <Img src="/landing.png" />
      <Flex className="section1-text" direction="column">
        <Text
          typo="title"
          color="white"
          css={css`
            color: rgba(255, 255, 255, 0.7);
            line-height: 140%;
          `}>
          다가오는 취준의 시간
        </Text>
        <Text
          typo="title"
          color="white"
          css={css`
            color: rgba(255, 255, 255, 0.7);
            line-height: 140%;
          `}>
          수정의 수정을 거듭중인 자소서,
        </Text>
        <Space height={28} />
        <Text
          typo="title"
          color="white"
          css={css`
            line-height: 140%;
            font-size: 4.2rem;
          `}>
          어떻게 쉽게 작성할까요?
        </Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 500px;

  .section1-text {
    position: absolute;
    top: 174px;
  }
`;
const Img = styled.img`
  height: 500px;
  aspect-ratio: auto;
  position: relative;
`;
