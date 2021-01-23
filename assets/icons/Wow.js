import * as React from "react";

function SvgWow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#wow_svg__clip0)">
        <path
          fill="url(#wow_svg__paint0_linear)"
          d="M16 8A8 8 0 11-.001 8 8 8 0 0116 8"
        />
        <path
          fill="url(#wow_svg__paint1_linear)"
          d="M5.643 10.888C5.485 12.733 6.37 14 8 14c1.63 0 2.515-1.267 2.357-3.112C10.2 9.042 9.242 8 8 8c-1.242 0-2.2 1.042-2.357 2.888z"
        />
        <path
          fill="url(#wow_svg__paint2_linear)"
          d="M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5z"
        />
        <path
          fill="#000"
          d="M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5z"
          filter="url(#wow_svg__filter0_i)"
        />
        <path
          fill="#4E506A"
          d="M4.481 4.567c.186.042.29.252.232.47-.057.217-.254.36-.44.317-.186-.042-.29-.252-.232-.47.057-.216.254-.36.44-.317zm6.659.063c.205.047.321.28.258.52-.064.243-.282.4-.49.354-.205-.046-.322-.28-.258-.52.063-.243.282-.4.49-.354z"
        />
        <path
          fill="#000"
          d="M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 01-.087.594.344.344 0 01-.387-.06c-.275-.26-.656-.4-.992-.37a.8.8 0 00-.59.332.346.346 0 01-.49.068.368.368 0 01-.068-.507 1.49 1.49 0 011.085-.612zm-7.665.555c.371-.353.86-.553 1.372-.562a1.49 1.49 0 011.242.619.369.369 0 01-.066.507.347.347 0 01-.492-.068.8.8 0 00-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 01-.496-.024.368.368 0 01.022-.51z"
          filter="url(#wow_svg__filter1_d)"
        />
        <path
          fill="url(#wow_svg__paint3_linear)"
          d="M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 01-.087.594.344.344 0 01-.387-.06c-.275-.26-.656-.4-.992-.37a.8.8 0 00-.59.332.346.346 0 01-.49.068.368.368 0 01-.068-.507 1.49 1.49 0 011.085-.612zm-7.665.555c.371-.353.86-.553 1.372-.562a1.49 1.49 0 011.242.619.369.369 0 01-.066.507.347.347 0 01-.492-.068.8.8 0 00-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 01-.496-.024.368.368 0 01.022-.51z"
        />
      </g>
      <defs>
        <linearGradient
          id="wow_svg__paint0_linear"
          x1={8}
          x2={8}
          y1={1.64}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEEA70" />
          <stop offset={1} stopColor="#F69B30" />
        </linearGradient>
        <linearGradient
          id="wow_svg__paint1_linear"
          x1={8}
          x2={8}
          y1={8}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#472315" />
          <stop offset={1} stopColor="#8B3A0E" />
        </linearGradient>
        <linearGradient
          id="wow_svg__paint2_linear"
          x1={8}
          x2={8}
          y1={4}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#191A33" />
          <stop offset={0.872} stopColor="#3B426A" />
        </linearGradient>
        <linearGradient
          id="wow_svg__paint3_linear"
          x1={8}
          x2={8}
          y1={1.688}
          y2={2.888}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E78E0D" />
          <stop offset={1} stopColor="#CB6000" />
        </linearGradient>
        <filter
          id="wow_svg__filter0_i"
          width={9}
          height={3}
          x={3.5}
          y={4}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.101961 0 0 0 0 0.2 0 0 0 0.819684 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="wow_svg__filter1_d"
          width={15.422}
          height={7.199}
          x={0.289}
          y={-0.312}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feColorMatrix values="0 0 0 0 0.803922 0 0 0 0 0.388235 0 0 0 0 0.00392157 0 0 0 0.145679 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <clipPath id="wow_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgWow;