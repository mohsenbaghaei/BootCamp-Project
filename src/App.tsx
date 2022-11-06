import React from 'react';
import { Route , Routes } from 'react-router-dom'
import Main from './components/pages/Main'
import Quran from './components/pages/quran/Quran'

const App : React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Main/>} />
        <Route path = '/quran' element={<Quran/>} />
      </Routes>
    </div>
  );
}

export default App;
