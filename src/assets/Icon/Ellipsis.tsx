import { HtmlHTMLAttributes } from 'react';

export const Ellipsis = ({
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 14C1.89455 14 1 13.1055 1 12C1 10.8945 1.89455 10 3 10C4.10545 10 5 10.8945 5 12C5 13.1055 4.10545 14 3 14Z"
          fill="#292D32"
        />
        <path
          d="M12 14C10.8945 14 10 13.1055 10 12C10 10.8945 10.8945 10 12 10C13.1055 10 14 10.8945 14 12C14 13.1055 13.1055 14 12 14Z"
          fill="#292D32"
        />
        <path
          d="M21 14C19.8945 14 19 13.1055 19 12C19 10.8945 19.8945 10 21 10C22.1055 10 23 10.8945 23 12C23 13.1055 22.1055 14 21 14Z"
          fill="#292D32"
        />
      </svg>
    </button>
  );
};
