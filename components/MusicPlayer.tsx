'use client';

import AlbumImageLarge from '@/components/AlbumImageLarge';
import Icon from '@/components/Icon';
import { useState } from 'react';
import MusicsData, { MusicStruct } from '../lib/musics';

export default function MusicPlayer() {
  const [currentMusicIndex, setCurrentMusicIndex] = useState<number>(1);
  const [isListMode, setIsListMode] = useState<boolean>(false);
  const currentMusic: MusicStruct = MusicsData[currentMusicIndex];

  return (
    <div
      style={{ background: currentMusic.color }}
      className="flex h-dvh w-dvw flex-col justify-between overflow-hidden px-32 py-84"
    >
      {!isListMode && <AlbumImageLarge music={currentMusic} />}
      <div className="flex flex-col gap-24">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-28 font-700 text-white">{currentMusic.title}</div>
            <div className="text-20 font-500 text-white/30">{currentMusic.artist}</div>
          </div>
          <div className="flex items-center justify-center rounded-full bg-white/10 p-8">
            <Icon type="list" className="size-16 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
