import { theme } from '@/styles';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * @default {HTMLButtonElement}
 *
 */
export const MainButton = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 8px;

  padding: 0px 24px;
  height: 50px;

  background: ${({ theme }) => theme.palette.linear};
  ${theme.typo.sub_title}
  color: ${theme.palette.white}

  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed; /* 커서 변경 */
      background-color: ${theme.palette.gray2}
    `}
`;
