import Icon from '@/components/Icon';
import { MouseEvent } from 'react';

interface Props {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  onControl: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSeek: (time: number) => void;
}

function secondsToTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export default function MusicController({
  currentTime,
  duration,
  isPlaying,
  onControl,
  onNext,
  onPrev,
  onSeek,
}: Props) {
  const percent = (currentTime / duration) * 100;

  function handleSeek(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    console.log(percent);
    const time = duration * percent;
    onSeek(time);
  }

  return (
    <div className="flex flex-col gap-48">
      <div className="flex flex-col gap-8">
        <div onClick={handleSeek} className="h-8 overflow-hidden rounded-full bg-white/30">
          <div style={{ width: `${percent}%` }} className="h-8 bg-white/30" />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-14 font-500 text-white/30">{secondsToTime(currentTime)}</div>
          <div className="text-14 font-500 text-white/30">{secondsToTime(duration)}</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-52">
        <Icon type="prev" onClick={onPrev} className="size-40 text-white" />
        <Icon
          type={isPlaying ? 'pause' : 'play'}
          onClick={onControl}
          className="size-56 text-white"
        />
        <Icon type="next" onClick={onNext} className="size-40 text-white" />
      </div>
    </div>
  );
}
