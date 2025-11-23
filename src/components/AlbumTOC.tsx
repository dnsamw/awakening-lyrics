import SongListItem from "./UI/SongListItem";
import { trackList } from "../data/tracks";
import { Link } from "react-router-dom";
import SEO from "./SEO";

function AlbumTOC() {
  return (
    <>
      <SEO
        title={`Awakening ¦ Born Between Two Prayers | Lyrics Collection - Charitha Attalage`}
        description={`A Lyrics Collection for Awakening ¦ Born Between Two Prayers by Charitha Attalage`}
        image={`https://awakening-lyrics.vercel.app/default.jpg`}
        url={`https://awakening-lyrics.vercel.app/`}
      />
      <div className="text-lime-400 text-3xl h-[calc(100%-3rem)] font-rubik-80s justify-center items-center flex flex-col md:gap-10 w-full md:p-4">
        <div className="text-lime-400 border-b-2 border-dashed pb-4 md:w-[90%] lg:w-[60%] flex justify-center items-center">
          <h1 className="text-xl md:text-3xl">
            Awakening - Born Between Two Prayers Lyrics
          </h1>
        </div>
        <div className="flex py-5 flex-col gap-1 md:gap-5 justify-center items-center w-full overflow-y-auto">
          {trackList.map((track) => (
            <Link
              key={track.trackNumber}
              to={`/track/${track.trackNumber}`}
              className="w-full flex justify-center"
            >
              <SongListItem
                title={track.title}
                trackNumber={track.trackNumber}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default AlbumTOC;
