import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TopRated from "../pages/TopRated";
import NowPlaying from "../pages/NowPlaying";
import Upcoming from "../pages/Upcoming";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/toprated" exact element={<TopRated />} />
          <Route path="/nowplaying" exact element={<NowPlaying />} />
          <Route path="/upcoming" exact element={<Upcoming />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
