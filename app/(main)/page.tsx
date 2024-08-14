import MusicPlayer from '@/components/MusicPlayer';
import PlayerProvider from '@/providers/PlayerProvider';

export default function MainPage() {
  return (
    <PlayerProvider>
      <MusicPlayer />
    </PlayerProvider>
  );
}
