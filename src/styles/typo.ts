import { css } from '@emotion/react';

export const typo = {
  title: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-size: 3rem;
    font-weight: 600;
    line-height: 140%;
  `,
  sub_title: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-size: 2rem;
    font-weight: 600;
    line-height: 160%;
  `,
  main_text: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-size: 2rem;
    font-weight: 400;
    line-height: 150%;
  `,
  sub_text: css`
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 150%;
  `
} as const;
