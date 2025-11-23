import "./App.css";
import SciFiBorderBox from "./components/SciFiBorderBox";
import AlbumTOC from "./components/AlbumTOC";
import SongLyrics from "./routes/SongLyrics";
import { Routes, Route } from "react-router-dom";
// import NoiseBackground from "./components/UI/NoiseBackground";

function App() {
  return (
    <div className="w-full h-screen">
      {/* <NoiseBackground /> */}
      <div className="absolute -z-10 inset-0 h-full w-full 
bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
bg-size-[5px_5px]
mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      <SciFiBorderBox>
        <Routes>
          <Route path="/" element={<AlbumTOC />} />
          <Route path="/track/:trackNumber" element={<SongLyrics />} />
        </Routes>
      </SciFiBorderBox>
    </div>
  );
}

export default App;
