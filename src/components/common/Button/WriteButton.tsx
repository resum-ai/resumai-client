import { theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

type WriteButtonType = 'lg' | 'sm';

interface WriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: WriteButtonType;
  width?: number;
}

/**
 * @default {HTMLButtonElement}
 *
 *
 */
export const WriteButton = ({
  children,
  variant,
  width,
  ...props
}: WriteButtonProps) => {
  return (
    <StyledButton variant={variant} width={width} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  variant: WriteButtonType;
  width?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.palette.blue_100};
  ${({ theme }) => theme.typo.sub_title};

  color: ${({ theme }) => theme.palette.white};
  ${({ variant }) =>
    variant === 'lg'
      ? css`
          padding: 0px 58.5px;
          height: 62px;
        `
      : css`
          padding: 0px 50px;
          height: 47px;
        `}

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: ${theme.palette.gray2};
    `};
`;
