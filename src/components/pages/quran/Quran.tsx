import React from 'react';
import './Quran.css'
import Header from '../header/Header'

const Quran :React.FC = () => {
    return (
        <div className='quranContainer'>
            <Header/>
            <div className='quranMain'>
                <i className='icon topIcon'>
                    {/* svgs */}
                </i>
                <div className='quranCenter'>
                    
                </div>
            </div>
        </div>
    );
};

export default Quran;