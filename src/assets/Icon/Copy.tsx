import { HtmlHTMLAttributes } from 'react';

export const Copy = ({ ...props }: HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.7998 7.8999V7.8999C14.7998 6.96802 14.7998 6.50208 14.6476 6.13454C14.4446 5.64448 14.0552 5.25513 13.5652 5.05214C13.1976 4.8999 12.7317 4.8999 11.7998 4.8999H8.7998C6.91419 4.8999 5.97138 4.8999 5.38559 5.48569C4.7998 6.07148 4.7998 7.01428 4.7998 8.8999V11.8999C4.7998 12.8318 4.7998 13.2977 4.95205 13.6653C5.15503 14.1553 5.54438 14.5447 6.03444 14.7477C6.40198 14.8999 6.86792 14.8999 7.7998 14.8999V14.8999"
          stroke="#646D7A"
          strokeWidth="1.5"
        />
        <rect
          x="10.7998"
          y="10.8999"
          width="10"
          height="10"
          rx="2"
          stroke="#646D7A"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};
