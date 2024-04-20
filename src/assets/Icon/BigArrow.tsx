import { MouseEventHandler } from 'react';

export const BigArrowLeft = () => {
  return (
    <svg
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 1.5L1.5 9L9 16.5"
        stroke="#646D7A"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BigArrowRight = () => {
  return (
    <svg
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 16.5L9.5 9L2 1.5"
        stroke="#646D7A"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BigArrowDown = ({
  onClick
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5 15L18 22.5L25.5 15"
          stroke="#646D7A"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const BigArrowUp = ({
  onClick
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.5 21L18 13.5L10.5 21"
          stroke="#646D7A"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
