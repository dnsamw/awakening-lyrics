import { aharawannaEpa } from "./aharawanna_epa";
import { dhole } from "./dhole";
import { kanduluMuthuhara } from "./kandulu_muthuhara";
import { monaraPile } from "./monara_pile";
import { omkaraya } from "./omkaraya";
import { sandaNihandaWela } from "./sanda_nihanda_wela";
import { theAwakening } from "./the_awakening";
import { thelakatahaGatha } from "./thelakataha_gatha";
import { yogeshwari } from "./yogeshwari";

export type Track = {
  trackNumber: number;
  title: string;
  lyrics: string;
};

export const trackList: Track[] = [
  {
    trackNumber: 1,
    title: "The Awakening",
    lyrics: theAwakening,
  },
  { trackNumber: 2, title: "Omkaraya", lyrics: omkaraya },
  { trackNumber: 3, title: "Kandulu Muthuhara", lyrics: kanduluMuthuhara },
  { trackNumber: 4, title: "Dhole", lyrics: dhole },
  { trackNumber: 5, title: "Monara Pile", lyrics: monaraPile },
  { trackNumber: 6, title: "Sanda Nihanda Wela", lyrics: sandaNihandaWela },
  { trackNumber: 7, title: "Aharawanna Epa", lyrics: aharawannaEpa },
  { trackNumber: 8, title: "Thelakataha Gatha", lyrics: thelakatahaGatha },
  { trackNumber: 9, title: "Yogeshwari", lyrics: yogeshwari },
];
