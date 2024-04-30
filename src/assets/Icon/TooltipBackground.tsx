import styled from '@emotion/styled';
import { ReactNode } from 'react';

export const TooltipBackground = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <div className="tooltip-content">{children}</div>
      <svg
        width="421"
        height="92"
        viewBox="0 0 421 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg">
        <g filter="url(#filter0_d_509_1043)">
          <mask id="path-1-inside-1_509_1043" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M180.732 9C179.962 7.66667 178.037 7.66667 177.267 9L172.071 18H15C12.2386 18 10 20.2386 10 23V75C10 77.7614 12.2386 80 15 80H406C408.761 80 411 77.7614 411 75V23C411 20.2386 408.761 18 406 18H185.928L180.732 9Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M180.732 9C179.962 7.66667 178.037 7.66667 177.267 9L172.071 18H15C12.2386 18 10 20.2386 10 23V75C10 77.7614 12.2386 80 15 80H406C408.761 80 411 77.7614 411 75V23C411 20.2386 408.761 18 406 18H185.928L180.732 9Z"
            fill="white"
          />
          <path
            d="M177.267 9L176.661 8.65V8.65L177.267 9ZM180.732 9L181.338 8.65V8.65L180.732 9ZM172.071 18V18.7H172.475L172.678 18.35L172.071 18ZM185.928 18L185.322 18.35L185.524 18.7H185.928V18ZM177.874 9.35C178.374 8.48333 179.625 8.48333 180.125 9.35L181.338 8.65C180.299 6.85 177.701 6.85 176.661 8.65L177.874 9.35ZM172.678 18.35L177.874 9.35L176.661 8.65L171.465 17.65L172.678 18.35ZM15 18.7H172.071V17.3H15V18.7ZM10.7 23C10.7 20.6252 12.6252 18.7 15 18.7V17.3C11.852 17.3 9.3 19.852 9.3 23H10.7ZM10.7 75V23H9.3V75H10.7ZM15 79.3C12.6252 79.3 10.7 77.3748 10.7 75H9.3C9.3 78.148 11.852 80.7 15 80.7V79.3ZM406 79.3H15V80.7H406V79.3ZM410.3 75C410.3 77.3748 408.375 79.3 406 79.3V80.7C409.148 80.7 411.7 78.148 411.7 75H410.3ZM410.3 23V75H411.7V23H410.3ZM406 18.7C408.375 18.7 410.3 20.6252 410.3 23H411.7C411.7 19.852 409.148 17.3 406 17.3V18.7ZM185.928 18.7H406V17.3H185.928V18.7ZM180.125 9.35L185.322 18.35L186.534 17.65L181.338 8.65L180.125 9.35Z"
            fill="#D6DBDF"
            mask="url(#path-1-inside-1_509_1043)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_509_1043"
            x="0"
            y="0"
            width="421"
            height="92"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_509_1043"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_509_1043"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  width: 421px;
  height: 92px;
  flex-shrink: 0;

  .svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .tooltip-content {
    position: absolute;
    z-index: 1;
    left: 20px;
    bottom: 14px;
  }
`;
