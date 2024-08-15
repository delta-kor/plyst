import Icon from '@/components/Icon';

export default function MusicController() {
  return (
    <div className="flex flex-col gap-48">
      <div className="flex flex-col gap-8">
        <div className="h-8 overflow-hidden rounded-full bg-white/30">
          <div className="h-8 w-2/3 bg-white/30" />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-14 font-500 text-white/30">1:13</div>
          <div className="text-14 font-500 text-white/30">-2:23</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-52">
        <Icon type="prev" className="size-40 text-white" />
        <Icon type="play" className="size-56 text-white" />
        <Icon type="next" className="size-40 text-white" />
      </div>
    </div>
  );
}
