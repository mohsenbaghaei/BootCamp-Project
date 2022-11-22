import React from 'react';
import { useSelector } from "react-redux";
import './SingleAyeh.css'
import { singleAyeh } from '../../DataBase/InterFaces'
import { SearchAyeh } from "../../DataBase/SearchAyeh";
import { TranslateMakarem } from "../../DataBase/QuranAyehTranslateMakarem";
import { TranslateAnsarian } from "../../DataBase/QuranTranslateAnsarian";

import {
    LocalayehFont,
    LocalayehThickness,
    LocalayehBigness,
    LocaltranslateThickness,
    LocaltranslateBigness,
    LocalShowAyeh,
    Localtranslate
  } from "../../redux/setting/settingSlice";

const SingleAyeh : React.FC <singleAyeh> = ({ayeh}) => {
    const localShowAyeh = useSelector(LocalShowAyeh);
    const localAyehFont = useSelector(LocalayehFont);
    const localAyehThickness = useSelector(LocalayehThickness);
    const localAyehBigness = useSelector(LocalayehBigness);
    const localTranslateThickness = useSelector(LocaltranslateThickness);
    const localTranslateBigness = useSelector(LocaltranslateBigness);
    const localTranslate = useSelector(Localtranslate);
    let translate = TranslateMakarem
    if (localTranslate === "ansarian") {
        translate = TranslateAnsarian;
      }
      console.log(ayeh[1])
    return (
        <div>
            <div className='singleMainAyehSearch'>
                <span className='singleMainAyehTitle'>
                    {ayeh[0]}
                </span>
            </div>
            <div className='singleMainAyehItem'>
            <div className="quranAyeh">
          {localShowAyeh === "true" ? (
            <>
              <div className="ayehView">
                <p
                  className={`${localAyehFont} ${localAyehThickness} ${localAyehBigness}`}
                >
                  {SearchAyeh[+ayeh[1]]}
                </p>
              </div>
              <div className="ayehView">
                <p
                  className={`${localTranslateThickness} ${localTranslateBigness}`}
                >
                  {translate[+ayeh[1]]}
                </p>
              </div>
            </>
          ) : (
            <div className="quranAyeh">
              <p
                className={`${localAyehFont} ${localAyehThickness} ${localAyehBigness}`}
              >
                {SearchAyeh[+ayeh[1]]}
              </p>
            </div>
          )}
        </div>
            </div>
        </div>
    );
};

export default SingleAyeh;