export interface MusicStruct {
  artist: string;
  color: string;
  duration: number;
  id: string;
  title: string;
}

const MusicsData: MusicStruct[] = [
  {
    artist: 'aespa',
    color: '#3D1139',
    duration: 179,
    id: 'SkP_MvTKTJM',
    title: 'Supernova',
  },
  {
    artist: 'IVE',
    color: '#443353',
    duration: 190,
    id: 'DhQyzPJf0X4',
    title: 'HEYA',
  },
];

export default MusicsData;
