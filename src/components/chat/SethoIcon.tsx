import * as React from 'react';
import botUrl from './stethoscopeBot.svg';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  title?: string;
};

export default function SethoIcon({ title = 'Setho', ...props }: Props) {
  return (
    <img
      src={botUrl}
      alt={title}
      role="img"
      {...props}
    />
  );
}
