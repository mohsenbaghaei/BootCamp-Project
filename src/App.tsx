import React from 'react';
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Main from './components/pages/main/Main'
import Quran from './components/pages/quran/Quran'
import QuranPage from './components/pages/quranPage/QuranPage';

const App : React.FC = () => {
  return (
    <div className='container'>
      <div className='routerRoot'>
      <Routes>
        {/* <Route path = '/' element={<Main/>} /> */}
        <Route path = '/' element={<Quran/>} />
        <Route path = '/page/:id' element={<QuranPage/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
