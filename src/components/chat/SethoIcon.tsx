import * as React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

export default function SethoIcon({ title = 'Setho', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      role="img"
      aria-label={title}
      {...props}
    >
      {/* Face */}
      <circle cx="64" cy="52" r="30" fill="currentColor" opacity="0.12" />
      <circle cx="64" cy="52" r="28" fill="white" />
      <circle cx="64" cy="52" r="28" fill="currentColor" opacity="0.06" />

      {/* Eyes */}
      <circle cx="54" cy="50" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="74" cy="50" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="52.5" cy="48.5" r="1.2" fill="white" />
      <circle cx="72.5" cy="48.5" r="1.2" fill="white" />

      {/* Smile */}
      <path
        d="M54 60c3 4 7 6 10 6s7-2 10-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Stethoscope tubing */}
      <path
        d="M40 68c0 14 10 22 24 22s24-8 24-22"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Eartips */}
      <path
        d="M44 68v-10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M84 68v-10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.65"
      />
      <circle cx="44" cy="56" r="4" fill="currentColor" opacity="0.65" />
      <circle cx="84" cy="56" r="4" fill="currentColor" opacity="0.65" />

      {/* Chestpiece */}
      <circle
        cx="64"
        cy="96"
        r="10"
        fill="white"
        stroke="currentColor"
        strokeWidth="6"
        opacity="0.9"
      />
      <circle cx="64" cy="96" r="3" fill="currentColor" opacity="0.65" />
    </svg>
  );
}
