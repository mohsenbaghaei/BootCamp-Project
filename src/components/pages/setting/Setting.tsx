import React from 'react';
import Header from '../header/Header';
import './Setting.css'
import translatorMakarem from '../../images/translatorMakarem.png'
import HosseinAnsarian from '../../images/HosseinAnsarian.png'
import reciterParhizgar from '../../images/reciterParhizgar.png'
import reciterAbdulbasit from '../../images/reciterAbdulbasit.jpg'
import reciterAlghamadi from '../../images/reciterAlghamadi.jpg'
import reciterMotaz from '../../images/reciterMotaz.png'
import reciterMinshawy from '../../images/reciterMinshawy.png'
import reciterHusary from '../../images/reciterHusary.png'

const Setting : React.FC= () => {
    return (
        <div className='quranContainer'>
            <div>
                <Header headerName={`تنظیمات قرآن`} isSetting={false}/>
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
                            name='translator'
                            value={''} />
                            <img src={translatorMakarem} alt='translator-makarem' className='settingImage' />
                            <p className='textInput'>
                            مکارم شیرازی
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='translator'
                            value={''} />
                            <img src={HosseinAnsarian} alt='HosseinAnsarian' className='settingImage' />
                            <p className='textInput'>حسین انصاریان</p>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    تکرار آیات 
                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='soundRepeat'
                            value={''} />
                            <p className='textInput'>
                            غیر فعال 
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='soundRepeat'
                            value={''} />
                            <p className='textInput'>
                            تکرار آیه 
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='soundRepeat'
                            value={''} />
                            <p className='textInput'>
                            تکرار صفحه 
                            </p>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    انتخاب قاری 
                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterParhizgar} alt='reciterParhizgar' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد پرهیزگار
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterAlghamadi} alt='reciterAlghamadi' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد سعد الغامدی
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterHusary} alt='reciterHusary' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد خلیل الحصری
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterMinshawy} alt='reciterMinshawy' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد منشاوی
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterMotaz} alt='reciterMotaz' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد معتز آقایی
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterAbdulbasit} alt='reciterAbdulbasit' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد عبد الباسط
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    تنظیمات مربوط به متن 
                    </h2>
                    <div className='quranSettingCard'>
                        <h3 className='quranSettingTitleText'>
                        انتخاب فونت  
                        </h3>
                        <div className='settingSelect'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='font'
                                value={''} />
                                <p className='textInput'>
                                واضح 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='font'
                                value={''} />
                                <p className='textInput'>
                                واضح 2 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='font'
                                value={''} />
                                <p className='textInput'>
                                محمد(ص) 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='font'
                                value={''} />
                                <p className='textInput'>
                                عثمان‌طه 
                                </p>
                            </label>
                        </div>
                        <h3 className='quranSettingTitleText'>
                        ضخامت و بزرگی متن آیه 
                        </h3>
                        <div className='settingCenter'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehThickness'
                                value={''} />
                                <p className='textInput'>
                                    نازک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehThickness'
                                value={''} />
                                <p className='textInput'>
                                    معمولی 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehThickness'
                                value={''} />
                                <p className='textInput'>
                                    ضخیم 
                                </p>
                            </label>
                        </div>
                        <div className='settingSelect'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    خیلی‌کوچک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    کوچک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    متوسط 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    بزرگ 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    خیلی‌بزرگ 
                                </p>
                            </label>
                        </div>
                        <h3 className='quranSettingTitleText'>
                            ضخامت و بزرگی متن ترجمه 
                        </h3>
                        <div className='settingCenter'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateThickness'
                                value={''} />
                                <p className='textInput'>
                                    نازک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateThickness'
                                value={''} />
                                <p className='textInput'>
                                    ضخیم 
                                </p>
                            </label>
                        </div>
                        <div className='settingSelect'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    خیلی‌کوچک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    کوچک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    متوسط 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    بزرگ 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    خیلی‌بزرگ 
                                </p>
                            </label>
                        </div>
                        <div className='settingMainSample'>
                            <div className='settingSample'>
                                <div className='settingMainPreview'>
                                    <div className='settingPreview '></div>
                                    <div className='settingPreview '></div>
                                </div>
                                <div className=''></div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Setting;