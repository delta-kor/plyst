'use client';

import AlbumContent from '@/components/AlbumContent';
import Icon from '@/components/Icon';
import MusicController from '@/components/MusicController';
import Playlist from '@/components/Playlist';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';
import MusicsData from '../lib/musics';

const initialMusicIndex = 0;

export default function MusicPlayer() {
  const [currentMusicIndex, setCurrentMusicIndex] = useState<number>(initialMusicIndex);
  const [isListMode, setIsListMode] = useState<boolean>(false);

  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const intervalRef = useRef<any>(null);
  const isSeekedRef = useRef<boolean>(false);

  const currentMusic = MusicsData[currentMusicIndex];

  useEffect(() => {
    intervalRef.current = setInterval(updateCurrentTime, 1000 / 30);
    return () => clearInterval(intervalRef.current);
  }, [player]);

  useEffect(() => {
    if (!player) return;

    const videoUrl = player.getVideoUrl();
    if (!videoUrl) return;

    const currentVideoId = player.getVideoUrl().split('v=')[1];
    if (currentMusic.id !== currentVideoId) player.loadVideoById(currentMusic.id, 0);
  }, [currentMusicIndex, player]);

  function updateCurrentTime() {
    if (!player) return;

    const playerState = player.getPlayerState();
    if (typeof playerState === 'undefined') return;

    const isPlaying = playerState === 1 || playerState === 3;
    setIsPlaying(isPlaying);

    const duration = player.getDuration() || 0;
    setDuration(duration);

    if (!isSeekedRef.current) {
      const currentTime = player.getCurrentTime() || 0;
      setCurrentTime(currentTime);
    }

    if (isPlaying) {
      isSeekedRef.current = false;
    }
  }

  function handleReady(e: YouTubeEvent) {
    setPlayer(e.target);
  }

  function handleEnd() {
    handleNext();
  }

  function handleNext() {
    if (!player) return;
    setCurrentMusicIndex(prev => (prev + 1) % MusicsData.length);
  }

  function handlePrev() {
    if (!player) return;
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

    setCurrentTime(time);
    isSeekedRef.current = true;
  }

  function handleListClick() {
    setIsListMode(prev => !prev);
  }

  function handleMusicClick(index: number) {
    setCurrentMusicIndex(index);
  }

  return (
    <div
      style={{ background: currentMusic.color }}
      className="flex h-dvh w-dvw flex-col items-center justify-center gap-32 overflow-hidden px-32 transition-colors"
    >
      <div className="my-48 flex grow flex-col items-center justify-between gap-32 self-stretch md:max-h-[720px]">
        <AlbumContent
          currentMusic={currentMusic}
          isListMode={isListMode}
          isPlaying={isPlaying}
          onListClick={handleListClick}
        >
          <YouTube
            iframeClassName="size-full min-h-0"
            opts={{ playerVars: { autoplay: 0, controls: 0, modestbranding: 1, playsinline: 1 } }}
            videoId={MusicsData[initialMusicIndex].id}
            onEnd={handleEnd}
            onReady={handleReady}
            className="size-full min-h-0"
          />
        </AlbumContent>
        {isListMode && (
          <div className="min-h-0 w-full grow basis-0 self-stretch overflow-y-hidden">
            <Playlist currentMusicIndex={currentMusicIndex} onMusicClick={handleMusicClick} />
          </div>
        )}
        <div className="flex flex-col gap-24 self-stretch md:w-[400px] md:self-center">
          {!isListMode && (
            <div className="flex items-center justify-between">
              <div className="flex grow flex-col">
                <motion.div layoutId="title" layout className="grow text-28 font-700 text-white">
                  {currentMusic.title}
                </motion.div>
                <motion.div
                  layoutId="artist"
                  layout
                  className="grow text-20 font-500 text-white/30"
                >
                  {currentMusic.artist}
                </motion.div>
              </div>
              <motion.div
                layoutId="list"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleListClick}
                layout
                className="flex cursor-pointer items-center justify-center rounded-full bg-white/10 p-8"
              >
                <Icon type="list" className="size-16 text-white" />
              </motion.div>
            </div>
          )}
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
      <title>{`${currentMusic.title} - Plyst`}</title>
    </div>
  );
}
