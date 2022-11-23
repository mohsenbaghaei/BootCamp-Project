import React , { Suspense , lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const QuranPage  =lazy(() => import("./pages/quranPage/QuranPage"))
const Setting =lazy(() => import("./setting/Setting"))
const AyehSearch =lazy(() => import("./pages/ayehSearch/AyehSearch"))
const Quran =lazy(() => import("./pages/quran/Quran"))

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="routerRoot">
        <Suspense fallback={<h2>Loading</h2>}>
        <Routes>
          <Route path="/" element={<Quran />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/page/:id" element={<QuranPage />} />
          <Route path="/search" element={<AyehSearch />} />
        </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
