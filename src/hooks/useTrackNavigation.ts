import { trackList } from "../data/tracks";
export function useTrackNavigation(trackNumber: number) {
  const getNextTrackUrl = () => {
    const currentIndex = trackList.findIndex(
      (t) => t.trackNumber === trackNumber
    );
    if (currentIndex === -1 || currentIndex === trackList.length - 1) {
      return "/";
    }
    return `/track/${trackList[currentIndex + 1].trackNumber}`;
  };

  const getPreviousTrackUrl = () => {
    const currentIndex = trackList.findIndex(
      (t) => t.trackNumber === trackNumber
    );
    if (currentIndex === -1 || currentIndex === 0) {
      return "/";
    }
    return `/track/${trackList[currentIndex - 1].trackNumber}`;
  };

  return { getNextTrackUrl, getPreviousTrackUrl };
}
