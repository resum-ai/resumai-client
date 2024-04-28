import styled from '@emotion/styled';
import { Flex } from '../Wrapper';
import { ReactNode } from 'react';
import { theme } from '@/styles';
import { Header } from '../common';
import { css } from '@emotion/react';
import { FormProvider, useForm } from 'react-hook-form';

export const ResumeLayout = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return (
    <Flex
      direction="column"
      css={css`
        width: 100vw;
      `}>
      <Header />
      <Wrapper align="center" justify="center">
        <FormProvider {...methods}>{children}</FormProvider>
      </Wrapper>
    </Flex>
  );
};

const Wrapper = styled(Flex)`
  width: 100vw;
  height: 100%;
  min-height: calc(100vh - 92px);
  flex: 1;

  background-color: ${theme.palette.bg_main};
  padding: 0px 54px 0px 54px;

  box-sizing: border-box;
`;
