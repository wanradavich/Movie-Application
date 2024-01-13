import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TopRated from "../pages/TopRated";
import NowPlaying from "../pages/NowPlaying";
import Upcoming from "../pages/Upcoming";
import MyFavoritesPage from "../pages/MyFavoritesPage";
import Navbar from "../components/Navbar";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/upcoming" element={<Upcoming />} />
          {/* <Route path="/favorites" element={<MyFavoritesPage />} />  */}
          <Route path="/favorites" element={<MyFavoritesPage faveList={faveList} />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
