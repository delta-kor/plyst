import Icon from '@/components/Icon';
import { MusicStruct } from '@/lib/musics';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  currentMusic: MusicStruct;
  isListMode: boolean;
  isPlaying: boolean;
  onListClick: () => void;
  children: ReactNode;
}

export default function AlbumContent({
  currentMusic,
  isListMode,
  isPlaying,
  onListClick,
  children,
}: Props) {
  return (
    <motion.div
      className={
        isListMode
          ? 'flex size-72 w-full items-center justify-start gap-16 self-start md:mx-auto md:w-[400px]'
          : 'flex min-h-0 w-full grow basis-0 items-start justify-center'
      }
    >
      <motion.div className={isListMode ? 'aspect-square h-full' : 'size-full md:max-w-[400px]'}>
        <motion.div
          animate={isPlaying || isListMode ? 'active' : 'shrink'}
          data-list={isListMode}
          variants={{
            active: { scale: 1, transition: { damping: 20, stiffness: 260, type: 'spring' } },
            shrink: { scale: 0.8, transition: { damping: 20, stiffness: 260, type: 'spring' } },
          }}
          layout
          className="mx-auto aspect-square max-h-full max-w-full overflow-hidden rounded-8 data-[list=false]:rounded-16"
        >
          {children}
        </motion.div>
      </motion.div>
      {isListMode && (
        <div className="flex grow items-center">
          <div className="flex grow flex-col">
            <motion.div layoutId="title" layout className="grow text-20 font-600 text-white">
              {currentMusic.title}
            </motion.div>
            <motion.div layoutId="artist" layout className="grow text-18 font-500 text-white/30">
              {currentMusic.artist}
            </motion.div>
          </div>
          <motion.div
            layoutId="list"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onListClick}
            layout
            className="flex cursor-pointer items-center justify-center rounded-full bg-white/70 p-8"
          >
            <Icon style={{ color: currentMusic.color }} type="list" className="size-16" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
