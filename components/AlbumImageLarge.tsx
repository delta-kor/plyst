import { MusicStruct } from '@/lib/musics';
import { getThumbnailUrl } from '@/lib/youtube';

interface Props {
  music: MusicStruct;
}

export default function AlbumImageLarge({ music }: Props) {
  return (
    <img
      alt={music.title}
      src={getThumbnailUrl(music.id)}
      className="aspect-square w-full max-w-[400px] rounded-16 object-cover"
    />
  );
}
