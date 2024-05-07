import { HtmlHTMLAttributes } from 'react';

interface SendProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  color: string;
}

export const Send = ({ color, ...props }: SendProps) => {
  return (
    <button {...props}>
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="41" height="41" rx="2.86047" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8954 21.6825L12.0461 20.3994C8.01535 19.0558 6 18.384 6 17.1494C6 15.9149 8.01535 15.2431 12.0461 13.8995L26.6278 9.03895C29.464 8.09357 30.882 7.62089 31.6306 8.36943C32.3791 9.11797 31.9064 10.536 30.9611 13.3722L26.1005 27.9539C24.7569 31.9846 24.0851 34 22.8506 34C21.616 34 20.9442 31.9846 19.6006 27.9539L18.3176 24.1049L25.7745 16.648C26.4434 15.9791 26.4434 14.8946 25.7745 14.2257C25.1056 13.5568 24.0211 13.5568 23.3522 14.2257L15.8954 21.6825Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
