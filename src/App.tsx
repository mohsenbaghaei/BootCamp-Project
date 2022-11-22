import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Quran from "./pages/quran/Quran";
import QuranPage from "./pages/quranPage/QuranPage";
import Setting from "./setting/Setting";
import AyehSearch from "./pages/ayehSearch/AyehSearch";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="routerRoot">
        <Routes>
          <Route path="/" element={<Quran />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/page/:id" element={<QuranPage />} />
          <Route path="/search" element={<AyehSearch />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
