import styled from '@emotion/styled';
import { Flex } from '../Wrapper';
import { BigArrowLeft, BigArrowRight } from '@/assets/Icon/BigArrow';
import { css } from '@emotion/react';

interface SelectStepProps {
  steps: string[];
  value: string;
  setValue?: () => void;
}

export const SelectStep = ({ steps, value, setValue }: SelectStepProps) => {
  return (
    <Flex
      gap={6}
      css={css`
        width: fit-content;
      `}>
      <ArrowBox>
        <BigArrowLeft />
      </ArrowBox>
      {steps.map((step, index) => (
        <Step
          key={`${step}-${index}`}
          isSelected={value === step}
          onClick={setValue}>
          {step}
        </Step>
      ))}
      <ArrowBox>
        <BigArrowRight />
      </ArrowBox>
    </Flex>
  );
};

export const ArrowBox = styled(Flex)`
  width: 36px;
  height: 36px;

  border: 1px solid ${({ theme }) => theme.palette.gray2};
  border-radius: 8px;
`;

export const Step = styled.button<{
  isSelected: boolean;
}>`
  padding: 8px 16px;
  box-sizing: border-box;
  height: 36px;

  border-radius: 30px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.typo.sub_text};

  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          color: ${theme.palette.white};
          background-color: ${theme.palette.blue_100};
        `
      : css`
          color: ${theme.palette.gray4};
          background-color: ${theme.palette.white};
          border: 1px solid ${theme.palette.gray2};
        `}
`;
