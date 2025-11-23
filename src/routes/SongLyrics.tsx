import { useParams, Link } from "react-router-dom";
import { trackList } from "../data/tracks";
import SEO from "../components/SEO";

export default function SongLyrics() {
  const params = useParams();
  const num = parseInt(params.trackNumber || "", 10);
  const track = trackList.find((t) => t.trackNumber === num);

  if (!track) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl text-lime-300">Track not found.</p>
        <Link to="/" className="underline text-lime-400">
          Back to list
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${track.title} - ${track.artist}`}
        description={`Lyrics for ${track.title} by ${track.artist}`}
        image={`https://awakening-lyrics.vercel.app/${track.image}`}
        url={`https://awakening-lyrics.vercel.app/track/${num}`}
      />

      <div className="md:p-6 max-w-3xl mx-auto text-lime-200">
        <h2 className="text-4xl mb-4 font-rubik-80s">
          {track.trackNumber}. {track.title}
        </h2>
        <pre
          className="whitespace-pre-wrap text-lg leading-relaxed h-[68vh] min-[376px]:h-[75vh] min-[768px]:h-[70vh] min-[782px]:h-[73vh] overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-lime-100
        [&::-webkit-scrollbar-thumb]:bg-lime-300
        dark:[&::-webkit-scrollbar-track]:bg-lime-700
        dark:[&::-webkit-scrollbar-thumb]:bg-lime-500"
        >
          {track.lyrics}
        </pre>
        <div className="mt-2 md:mt-6 bg-lime-400 hover:bg-lime-500 w-40 p-2 flex justify-center items-center">
          <Link to="/" className="text-black font-rubik-80s">
            ← Back to album
          </Link>
        </div>
      </div>
    </>
  );
}
