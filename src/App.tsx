import React from 'react';
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Main from './components/pages/main/Main'
import Quran from './components/pages/quran/Quran'

const App : React.FC = () => {
  return (
    <div className='container'>
      <Routes>
        {/* <Route path = '/' element={<Main/>} /> */}
        <Route path = '/' element={<Quran/>} />
      </Routes>
    </div>
  );
}

export default App;
