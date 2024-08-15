import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AlbumImageLarge({ children }: Props) {
  return (
    <div className="flex w-full flex-1 grow basis-0 items-start justify-center overflow-hidden">
      <div className="size-full md:max-w-[400px]">
        <div className="mx-auto aspect-square max-h-full max-w-full overflow-hidden rounded-16">
          {children}
        </div>
      </div>
    </div>
  );
}
