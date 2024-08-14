'use client';

import { ReactNode, createContext } from 'react';

interface Context {}

const PlayerContext = createContext<Context>({} as Context);

interface Props {
  children: ReactNode;
}

export default function PlayerProvider({ children }: Props) {
  const context: Context = {};

  return <PlayerContext.Provider value={context}>{children}</PlayerContext.Provider>;
}
