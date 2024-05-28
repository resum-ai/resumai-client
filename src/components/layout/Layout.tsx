import styled from '@emotion/styled';
import { Flex } from '../Wrapper';
import { ReactNode } from 'react';
import { Header } from '../common';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction="column">
      <Header />
      <Wrapper align="flex-start">{children}</Wrapper>
    </Flex>
  );
};

const Wrapper = styled(Flex)`
  min-height: 100vh;
  width: 1080px;

  padding: 0px 20px 0px 20px;

  box-sizing: border-box;
`;
