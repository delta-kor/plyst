'use client';

import AlbumImageLarge from '@/components/AlbumImageLarge';
import Icon from '@/components/Icon';
import MusicController from '@/components/MusicController';
import { useEffect, useRef, useState } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';
import MusicsData from '../lib/musics';

export default function MusicPlayer() {
  const [currentMusicIndex, setCurrentMusicIndex] = useState<number>(1);
  const [isListMode, setIsListMode] = useState<boolean>(false);

  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const intervalRef = useRef<any>(null);

  const currentMusic = MusicsData[currentMusicIndex];

  useEffect(() => {
    intervalRef.current = setInterval(updateCurrentTime, 1000 / 30);
    return () => clearInterval(intervalRef.current);
  }, [player]);

  function updateCurrentTime() {
    if (!player) return;

    const currentTime = player.getCurrentTime();
    setCurrentTime(currentTime);

    const duration = player.getDuration();
    setDuration(duration);

    const playerState = player.getPlayerState();
    const isPlaying = playerState === 1 || playerState === 3;
    setIsPlaying(isPlaying);
  }

  function handleReady(e: YouTubeEvent) {
    setPlayer(e.target);
  }

  function handleNext() {
    setCurrentMusicIndex(prev => (prev + 1) % MusicsData.length);
  }

  function handlePrev() {
    setCurrentMusicIndex(prev => (prev - 1 + MusicsData.length) % MusicsData.length);
  }

  function handleControl() {
    if (!player) return;
    if (isPlaying) player.pauseVideo();
    else player.playVideo();
  }

  function handleSeek(time: number) {
    if (!player) return;
    player.seekTo(time, true);
  }

  const video = (
    <YouTube
      iframeClassName="size-full"
      opts={{ playerVars: { autoplay: 0 } }}
      videoId={currentMusic.id}
      onReady={handleReady}
      className="size-full"
    />
  );

  return (
    <div
      style={{ background: currentMusic.color }}
      className="flex h-dvh w-dvw flex-col items-center justify-between gap-32 overflow-hidden px-32 py-84 md:justify-center"
    >
      {!isListMode && <AlbumImageLarge music={currentMusic}>{video}</AlbumImageLarge>}
      <div className="flex flex-col gap-24 self-stretch md:w-[400px] md:self-center">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-28 font-700 text-white">{currentMusic.title}</div>
            <div className="text-20 font-500 text-white/30">{currentMusic.artist}</div>
          </div>
          <div className="flex items-center justify-center rounded-full bg-white/10 p-8">
            <Icon type="list" className="size-16 text-white" />
          </div>
        </div>
        <MusicController
          currentTime={currentTime}
          duration={duration}
          isPlaying={isPlaying}
          onControl={handleControl}
          onNext={handleNext}
          onPrev={handlePrev}
          onSeek={handleSeek}
        />
      </div>
    </div>
  );
}
