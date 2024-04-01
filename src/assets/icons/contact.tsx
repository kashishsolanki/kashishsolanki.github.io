import * as React from 'react';

function IconContact(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M17 18a2 2 0 00-2-2H9a2 2 0 00-2 2" />
      <path d="M5 4 H19 A2 2 0 0 1 21 6 V20 A2 2 0 0 1 19 22 H5 A2 2 0 0 1 3 20 V6 A2 2 0 0 1 5 4 z" />
      <path d="M14 10 A2 2 0 0 1 12 12 A2 2 0 0 1 10 10 A2 2 0 0 1 14 10 z" />
      <path d="M8 2v2M16 2v2" />
    </svg>
  );
}

export default IconContact;
