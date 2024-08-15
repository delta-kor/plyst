import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  isPlaying: boolean;
  children: ReactNode;
}

export default function AlbumImageLarge({ isPlaying, children }: Props) {
  return (
    <div className="flex min-h-0 w-full flex-1 grow basis-0 items-start justify-center">
      <div className="size-full md:max-w-[400px]">
        <motion.div
          animate={isPlaying ? 'active' : 'shrink'}
          transition={{ damping: 20, stiffness: 260, type: 'spring' }}
          variants={{ active: { scale: 1 }, shrink: { scale: 0.8 } }}
          className="mx-auto aspect-square max-h-full max-w-full overflow-hidden rounded-16"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
