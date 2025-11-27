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
  artist: string;
  image: string;
  isRap?: boolean;
};

export const trackList: Track[] = [
  {
    trackNumber: 1,
    title: "The Awakening",
    artist: "Charitha Attalage",
    lyrics: theAwakening,
    image: "the_awakening.jpg",
    isRap: true,
  },
  {
    trackNumber: 2,
    title: "Omkaraya",
    artist: "Charitha Attalage",
    lyrics: omkaraya,
    image: "omkaraya.jpg",
  },
  {
    trackNumber: 3,
    title: "Kandulu Muthuhara",
    artist: "Charitha Attalage",
    lyrics: kanduluMuthuhara,
    image: "kandulu_muthuhara.jpg",
    isRap: true,
  },
  {
    trackNumber: 4,
    title: "Dhole",
    artist: "Charitha Attalage",
    lyrics: dhole,
    image: "dhole.jpg",
  },
  {
    trackNumber: 5,
    title: "Monara Pile",
    artist: "Charitha Attalage",
    lyrics: monaraPile,
    image: "monara_pile.jpg",
  },
  {
    trackNumber: 6,
    title: "Sanda Nihanda Wela",
    artist: "Charitha Attalage",
    lyrics: sandaNihandaWela,
    image: "sanda_nihanda_wela.jpg",
  },
  {
    trackNumber: 7,
    title: "Aharawanna Epa",
    artist: "Charitha Attalage",
    lyrics: aharawannaEpa,
    image: "aharawanna_epa.jpg",
    isRap: true,
  },
  {
    trackNumber: 8,
    title: "Thelakataha Gatha",
    artist: "Charitha Attalage",
    lyrics: thelakatahaGatha,
    image: "thelakataha_gatha.jpg",
  },
  {
    trackNumber: 9,
    title: "Yogeshwari",
    artist: "Charitha Attalage",
    lyrics: yogeshwari,
    image: "yogeshwari.jpg",
    isRap: true,
  },
];
