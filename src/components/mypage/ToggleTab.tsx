/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Flex } from '../Wrapper';

interface ToggleTabProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleTab = ({ state, setState }: ToggleTabProps) => {
  return (
    <Flex
      gap={20}
      css={css`
        width: fit-content;
      `}>
      <Tab state={state === true} onClick={() => setState(true)}>
        자기소개서
      </Tab>
      <Tab state={state === false} onClick={() => setState(false)}>
        메모
      </Tab>
    </Flex>
  );
};

const Tab = styled(Flex)<{ state: boolean }>`
  padding: 0px 12px 12px 12px;
  cursor: pointer;
  width: 176px;

  ${({ state, theme }) =>
    state
      ? css`
          ${theme.typo.title};
          color: ${theme.palette.blue_black};
          border-bottom: 4px solid ${theme.palette.blue_100};
        `
      : css`
          ${theme.typo.title};
          color: ${theme.palette.gray3};
        `}
`;
