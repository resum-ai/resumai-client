import styled from '@emotion/styled';
import { Flex } from '../Wrapper';
import { ReactNode } from 'react';
import { theme } from '@/styles';
import { Header } from '../common';
import { css } from '@emotion/react';

export const ResumeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      direction="column"
      css={css`
        width: 100vw;
      `}>
      <Header />
      <Wrapper align="center" justify="center">
        {children}
      </Wrapper>
    </Flex>
  );
};

const Wrapper = styled(Flex)`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  flex: 1;

  background-color: ${theme.palette.bg_main};
  padding: 0px 54px 0px 54px;

  box-sizing: border-box;
`;
