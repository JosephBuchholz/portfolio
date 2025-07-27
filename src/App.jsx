import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HarmonicallyProjectPage from "./pages/HarmonicallyProjectPage";
import ScriptureRefProjectPage from "./pages/ScriptureRefProjectPage";
import VideoGameProjectsPage from "./pages/VideoGameProjectsPage";
import ResumePage from "./pages/ResumePage";
import WSUHackathon2025Page from "./pages/WSUHackathon2025";
import GuineaPigGamePage from "./pages/GuineaPigGame";

/**
 * Main application component. Handles url routing.
 */
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/home/:section" element={<HomePage></HomePage>}></Route>
          <Route
            path="/harmonically"
            element={<HarmonicallyProjectPage></HarmonicallyProjectPage>}
          ></Route>
          <Route
            path="/scripture-referencer"
            element={<ScriptureRefProjectPage></ScriptureRefProjectPage>}
          ></Route>
          <Route
            path="/video-game-projects"
            element={<VideoGameProjectsPage></VideoGameProjectsPage>}
          ></Route>
          <Route
            path="/crimson-code-2025"
            element={<WSUHackathon2025Page></WSUHackathon2025Page>}
          ></Route>
          <Route
            path="/guinea-pig-game"
            element={<GuineaPigGamePage></GuineaPigGamePage>}
          ></Route>
          <Route path="/resume" element={<ResumePage></ResumePage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
