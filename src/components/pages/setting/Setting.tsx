import React from 'react';
import Header from '../header/Header';
import './Setting.css'
import translatorMakarem from '../../images/translatorMakarem.png'
import HosseinAnsarian from '../../images/HosseinAnsarian.png'

const Setting : React.FC= () => {
    return (
        <div className='quranContainer'>
            <div>
                <Header headerName={`تنظیمات قرآن`} />
            </div>
            <div className='quranMain quranSettingtop'>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    نحوه نمایش 
                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='fullAyeh'
                            value={''} />
                            <p className='textInput'>
                            نمایش آیه و ترجمه با هم 
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='fullAyeh'
                            value={''} />
                            <p className='textInput'>
                            فقط نمایش آیه 
                            </p>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    انتخاب ترجمه  
                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                            <img src={translatorMakarem} alt='translator-makarem' className='settingImage' />
                            <p className='textInput'>
                            مکارم شیرازی
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                            <img src={HosseinAnsarian} alt='HosseinAnsarian' className='settingImage' />
                            <p className='textInput'>حسین انصاریان</p>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>

                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>

                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>

                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>

                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            value={''} />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;