import { useParams, Link } from "react-router-dom";
import { trackList } from "../data/tracks";
import SEO from "../components/SEO";
import DecryptedText from "../components/UI/DecryptedText";
import ArrowRight from "../components/Icons/ArrowRight";
import ArrowLeft from "../components/Icons/ArrowLeft";
import { useTrackNavigation } from "../hooks/useTrackNavigation";
import { APP_HOST_URL_PROD } from "../config";

export default function SongLyrics() {
  const params = useParams();
  const num = parseInt(params.trackNumber || "", 10);
  const { getNextTrackUrl, getPreviousTrackUrl } = useTrackNavigation(num);
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
        image={`${APP_HOST_URL_PROD}/${track.image}`}
        url={`${APP_HOST_URL_PROD}/track/${num}`}
      />

      <div className="w-full h-full overflow-hidden relative md:p-6 max-w-3xl flex flex-col mx-auto text-lime-200">
        <h2 className="pt-10 md:pt-15 text-4xl mb-4 font-rubik-80s">
          <DecryptedText
            text={`${track.trackNumber}. ${track.title}`}
            animateOn="view"
            revealDirection="center"
          />
        </h2>
        <pre
          className="whitespace-pre-wrap text-lg leading-relaxed h-full flex-1 overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-lime-700
        [&::-webkit-scrollbar-thumb]:bg-lime-500"
        >
          {track.lyrics}
        </pre>
        <div className="flex gap-4 justify-center pt-2 pb-10 md:pb-15">
          <Link to="/" className="text-black font-rubik-80s">
            <div className="md:mt-6 bg-lime-400 hover:bg-lime-500 w-15 md:min-w-35 md:p-2 flex justify-center items-center h-full md:h-auto">
              <div className="md:hidden text-xl h-full flex justify-center items-center">
                {" "}
                Album
              </div>
              <span className="hidden md:inline">Back to album</span>
            </div>
          </Link>

          {getPreviousTrackUrl() !== "/" && (
            <Link
              to={getPreviousTrackUrl()}
              className="text-black font-rubik-80s"
            >
              <div className="md:mt-6 bg-lime-400 hover:bg-lime-500 w-15 md:min-w-35 p-2 flex justify-center items-center h-full md:h-auto">
                <span className="md:hidden">
                  <ArrowLeft />
                </span>
                <span className="hidden md:inline">← Previous Track</span>
              </div>
            </Link>
          )}

          {getNextTrackUrl() !== "/" && (
            <Link to={getNextTrackUrl()} className="text-black font-rubik-80s">
              <div className="md:mt-6 bg-lime-400 hover:bg-lime-500 w-15 md:min-w-35 p-2 flex justify-center items-center h-full md:h-auto">
                <span className="md:hidden">
                  <ArrowRight />
                </span>
                <span className="hidden md:inline">Next Track →</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
