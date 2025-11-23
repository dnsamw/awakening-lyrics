type Props = {
  title: string;
  trackNumber: number;
};

function SongListItem({ title, trackNumber }: Props) {
  return (
    <div className="p-2 text-lime-400 text-3xl border-l-2  bg-lime-400/10 hover:bg-lime-400/30 w-full md:w-[90%] lg:w-[60%]">
      <div className=" h-7 flex items-center  pointer-events-auto pointer transition-colors text-base text-accent-dark default cursor-pointer!">
        <span className="text-2xl pl-4">
          {trackNumber}. {title}
        </span>
      </div>
    </div>
  );
}

export default SongListItem;
