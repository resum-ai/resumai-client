import { Landing2 } from '@/assets/Icon/Landing2';
import styled from '@emotion/styled';
import { Flex, Text } from '../Wrapper';
import { css } from '@emotion/react';

export const Section2 = () => {
  return (
    <Wrapper>
      <Landing2 />
      <Flex className="section2-text" direction="column">
        <Text
          typo="title"
          color="white"
          css={css`
            line-height: 140%;
          `}>
          생성형 AI 와 빠르고 정확하게
        </Text>
        <Text
          typo="title"
          color="white"
          css={css`
            line-height: 140%;
          `}>
          취업 자소서를 작성해요
        </Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  svg {
    height: 100vh;
  }

  .section2-text {
    position: absolute;
    bottom: 8vh;
  }
`;
