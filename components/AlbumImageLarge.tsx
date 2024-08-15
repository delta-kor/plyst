import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AlbumImageLarge({ children }: Props) {
  return (
    <div className="aspect-square w-full max-w-[400px] shrink-0 overflow-hidden rounded-16 object-cover">
      {children}
    </div>
  );
}
