import MusicsData from '@/lib/musics';
import { getThumbnailUrl } from '@/lib/youtube';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  currentMusicIndex: number;
  onMusicClick: (index: number) => void;
}

export default function Playlist({ currentMusicIndex, onMusicClick }: Props) {
  const musics = [
    ...MusicsData.slice(currentMusicIndex + 1),
    ...MusicsData.slice(0, currentMusicIndex),
  ];
  const currentMusic = MusicsData[currentMusicIndex];

  function handleMusicClick(musicId: string) {
    const index = MusicsData.findIndex(music => music.id === musicId);
    if (index === -1) return;
    onMusicClick(index);
  }

  return (
    <motion.div
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'circOut' }, y: 0 }}
      initial={{ opacity: 0, y: 300 }}
      className="scrollbar-hide mx-auto flex size-full flex-col gap-12 self-stretch overflow-y-scroll md:max-w-[400px]"
    >
      <AnimatePresence>
        {musics.map((music, index) => (
          <motion.div
            key={music.id}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            layoutId={`music-${music.id}`}
            onClick={() => handleMusicClick(music.id)}
            layout
            className="flex cursor-pointer items-center gap-16"
          >
            <img
              alt={music.title}
              src={getThumbnailUrl(music.id)}
              className="size-56 shrink-0 rounded-8 object-cover"
            />
            <div className="flex flex-col gap-2">
              <div className="text-18 font-400 text-white">{music.title}</div>
              <div className="text-16 font-400 text-white/30">{music.artist}</div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
