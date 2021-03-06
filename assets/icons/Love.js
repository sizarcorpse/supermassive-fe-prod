import * as React from "react";

function SvgLove(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="url(#love_svg__paint0_linear)"
        d="M8 0a8 8 0 100 16A8 8 0 008 0z"
      />
      <path
        fill="#fff"
        d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41z"
      />
      <defs>
        <linearGradient
          id="love_svg__paint0_linear"
          x1={8}
          x2={8}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6680" />
          <stop offset={1} stopColor="#E61739" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgLove;
