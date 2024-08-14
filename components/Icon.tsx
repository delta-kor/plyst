import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  type: 'list';
}

export default function Icon({ type, ...props }: Props) {
  if (type === 'list')
    return (
      <svg fill="none" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8 10C8.82843 10 9.5 9.32843 9.5 8.5C9.5 7.67157 8.82843 7 8 7C7.17157 7 6.5 7.67157 6.5 8.5C6.5 9.32843 7.17157 10 8 10Z"
          fill="currentColor"
        />
        <path
          d="M13 10C13.8284 10 14.5 9.32843 14.5 8.5C14.5 7.67157 13.8284 7 13 7C12.1716 7 11.5 7.67157 11.5 8.5C11.5 9.32843 12.1716 10 13 10Z"
          fill="currentColor"
        />
        <path
          d="M3 10C3.82843 10 4.5 9.32843 4.5 8.5C4.5 7.67157 3.82843 7 3 7C2.17157 7 1.5 7.67157 1.5 8.5C1.5 9.32843 2.17157 10 3 10Z"
          fill="currentColor"
        />
      </svg>
    );

  return null;
}
