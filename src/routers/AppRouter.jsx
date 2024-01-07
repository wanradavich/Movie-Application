import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Navbar from "../components/Navbar";
import TopRated from "../pages/TopRated";
import NowPlaying from "../pages/NowPlaying";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/toprated" exact element={<TopRated />} />
          <Route path="/nowplaying" exact element={<NowPlaying />} />
          <Route path="/about" exact element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
