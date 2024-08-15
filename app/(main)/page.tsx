import MusicPlayer from '@/components/MusicPlayer';
import { Metadata } from 'next';

export default function MainPage() {
  return <MusicPlayer />;
}

export const metadata: Metadata = {
  description: '그냥내가좋아하는노래',
  openGraph: {
    description: '그냥내가좋아하는노래',
    title: 'Plyst',
  },
  title: 'Plyst',
  twitter: {
    description: '그냥내가좋아하는노래',
    title: 'Plyst',
  },
};
