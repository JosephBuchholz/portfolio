import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HarmonicallyProjectPage from "./pages/HarmonicallyProjectPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}
