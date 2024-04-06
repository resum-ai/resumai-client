import { Kakao } from '@/assets/Icon/Kakao';
import { LandingLogo } from '@/assets/Icon/LandingLogo';
import { Flex, Space, Text } from '@/components/Wrapper';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export const Join = () => {
  return (
    <Wrapper
      direction="column"
      justify="center"
      align="center"
      css={css`
        padding-top: 100px;
      `}>
      <Text color="gray5" typo="title">
        소셜 계정으로 이용하기
      </Text>
      <Space height={80} />
      <Wrapper>
        <LandingLogo className="landing-logo" />
      </Wrapper>
      <Space height={64} />
      <Link to={import.meta.env.VITE_REDIRECT_URI}>
        <KakaoButton>
          <Kakao />
          카카오 로그인/회원가입
        </KakaoButton>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  .landing-logo {
    width: 194px;
    height: 219px;
  }

  a {
    text-decoration: none;
  }
`;

const KakaoButton = styled.button`
  width: 276px;
  height: 54px;
  border-radius: 6px;

  background-color: #fee500;
  color: #000000;

  display: flex;
  gap: 43px;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 53px 18px 14px;

  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
`;
