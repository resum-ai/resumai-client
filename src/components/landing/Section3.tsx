import { LandingLogo } from '@/assets/Icon/LandingLogo';
import styled from '@emotion/styled';
import { Flex, Text } from '../Wrapper';
import { WriteButton } from '../common/Button/WriteButton';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

export const Section3 = () => {
  const navigate = useNavigate();

  return (
    <Wrapper gap={240} justify="center">
      <LandingLogo />
      <Flex
        gap={28}
        direction="column"
        align="flex-start"
        css={css`
          width: 319px;
        `}>
        <Text typo="title" color="gray5">
          나만의 취업 어시스턴트,
          <br />
          RESUMAI 와 함께 해요
        </Text>
        <WriteButton variant="lg" width={319} onClick={() => navigate('/join')}>
          RESUMAI 시작하기
        </WriteButton>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 100vw;
  height: 893px;
  background-color: ${({ theme }) => theme.palette.blue_30};

  svg {
    width: 364px;
    height: 411.85px;
  }
`;
