import React , {useEffect} from 'react';
import { useParams , useNavigate } from 'react-router-dom';

import './QuranPage.css'

import Header from '../header/Header';
import Footer from '../footer/Footer';
import  QuranAyeh from '../quranayeh/QuranAyeh'

import { Page , Sura } from '../../DataBase/QuranDate'
import {Ayeh} from '../../DataBase/QuranAyeh'

import { TranslateMakarem } from '../../DataBase/QuranAyehTranslateMakarem'
import { TranslateAnsarian } from '../../DataBase/QuranTranslateAnsarian'

  
const QuranPage :React.FC = () => {

    useEffect(() =>{
        const initialLocal = localStorage?.getItem("InitialLocal")
        if(!initialLocal){
            localStorage.setItem('InitialLocal' , 'true')

            localStorage.setItem('ShowAyeh' , 'true')
            localStorage.setItem('Translate' , 'makarem')
            localStorage.setItem('PlayAyeh' , 'ayehTranslate')
            localStorage.setItem('AyehRepeat' , 'noRepeat')
            localStorage.setItem('QariPlayer' , 'Parhizgar_48kbps')
            localStorage.setItem('AyehFont' , 'fontVazeh2')
            localStorage.setItem('AyehThickness' , 'fontAyehWeightNormal')
            localStorage.setItem('AyehBigness' , 'fontAyehSizeN')
            localStorage.setItem('TranslateThickness' , 'fontTranslateWeightThick')
            localStorage.setItem('fontTranslateSizeN' , 'fontTranslateSizeN')
        }
    },[])

    const localTranslate = localStorage.getItem('Translate')
    const localPlayAyeh = localStorage.getItem('PlayAyeh')
    const localAyehRepeat = localStorage.getItem('AyehRepeat')

    const mainData : ( string | number)[][] = []
    const navigate = useNavigate()
    const {id} = useParams() as any
    let translate = TranslateMakarem
    let translateSound = 'translations/Makarem_Kabiri_16Kbps'

    if(localTranslate === 'ansarian'){
        translate = TranslateAnsarian
        translateSound = 'translations/Fooladvand_Hedayatfar_40Kbps'
    }
    
    const PageStartSura = Page[+id - 1][0]
    const PageEndSura = Page[+id][0]
    const pageAyehStart = Page[+id - 1][1]
    const pageAyehEnd = Page[+id][1]

    for(let i = PageStartSura ; i <= PageEndSura ; i++){

        let currentSuraInfo =  Sura[i - 1]
        let pageStart  =  currentSuraInfo[0] as number
        let pageLength = currentSuraInfo[1] as number
        let pageEnd = 0

        if(PageEndSura - i === 0){
          pageEnd = pageAyehEnd -1
        }else{
          pageEnd = pageLength 
        }
        let j = 1
        if(PageStartSura === i){
          pageStart += pageAyehStart -1
          j = pageAyehStart
        }
        for(j ; j <= pageEnd ; j++){
          mainData.push([Ayeh[+pageStart],translate[+pageStart],j,i])
          pageStart++
        }
      }
      const SoundPlay = (index : number) => {

        let ayehNumber = `${mainData[index][2]}`
        let suraNumber = `${mainData[index][3]}`
        let padAyeh = ayehNumber.padStart(3 , '0')
        let padSura = suraNumber.padStart(3 , '0')

        let quranSoundAyeh = `http://www.everyayah.com/data/Abdullah_Basfar_192kbps/${padSura}${padAyeh}.mp3`

        let quranSoundTranslate = `http://www.everyayah.com/data/Abdullah_Basfar_192kbps/${padSura}${padAyeh}.mp3`

        let ayehAudio = new Audio(quranSoundAyeh)
        let translateAudio = new Audio(quranSoundTranslate)

      }
    //     if (localPlayAyeh === 'ayehOnly') {
    //         ayehAudio.play()     
    //         if(localAyehRepeat === 'pageRepeat'){
    //             if(index === mainData.length -1){
    //                 index = 0
    //             }                
    //         }   
    //         if(index !== mainData.length -1){
    //             ayehAudio.addEventListener('ended', () => SoundPlay(index + 1));
    //         }
    //         ayehAudio.addEventListener('ended', () => SoundPlay(index));
    //     }else if (localPlayAyeh === 'translateOnly'){
    //         translateAudio.play()            
    //         if(index !== mainData.length -1){
    //             translateAudio.addEventListener('ended', () => SoundPlay(index + 1));
    //         }
    //     }else{
    //         ayehAudio.play()
    //         if(index !== mainData.length -1){
    //             ayehAudio.addEventListener('ended', () => translateAudio.play());
    //             translateAudio.addEventListener('ended', () => {
    //                 SoundPlay(index + 1)
    //                  console.log("next")} );
    //         }
    //     }
    // }
    
    const nextAyeh = () => {
        navigate(`/page/${+id + 1}`)
    }
    const previousAyeh = () => {
        navigate(`/page/${+id - 1}`)
    }

    return (
        <div className='quranContainer'>
            <div>
                <Header headerName={`سوره ${Sura[PageStartSura - 1][4]} - آیه ${pageAyehStart}`} headerSubName={`صفحه ${id}`} isSetting={true}/>
            </div>
            <div className='quranMain'>
                <div className='quranPage_changePage'>
                    {+id === 604 ? '' : (
                            <button type='button' className='changePageButton pageButton'>
                                        <span className='corner'>
                                            <svg viewBox="0 0 23 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="pageSvg">
                                                <path fill="#5C8A69" d="M0 48.9523H0.487976C3.00085 48.9523 5.0567 46.5046 5.0567 43.5137V42.0463H5.07043C8.25745 42.0463 10.972 39.5197 11.8723 36.0659C11.8723 36.0659 13.0952 30.7668 18.8867 25.615L18.8271 25.5604L18.8867 25.5057C13.0997 20.3463 11.8723 15.0549 11.8723 15.0549C10.9736 11.6011 8.25897 9.07446 5.07043 9.07446H5.0567V8.43866C5.0567 5.44772 3.00085 3 0.487976 3H0V48.9523Z">
                                                </path>
                                                <path fill="#E8BC6B" fillRule="evenodd" clipRule="evenodd" d="M3.57672 51.9994L0 51.9994V48.9523H0.487976C3.00085 48.9523 5.0567 46.5046 5.0567 43.5137V42.0463H5.07043C8.25745 42.0463 10.972 39.5197 11.8723 36.0659C11.8723 36.0659 13.0952 30.7668 18.8867 25.615L18.8271 25.5604L18.8867 25.5057C13.0997 20.3463 11.8723 15.0549 11.8723 15.0549C10.9736 11.6011 8.25897 9.07446 5.07043 9.07446H5.0567V8.43866C5.0567 5.44772 3.00085 3 0.487976 3H0V0L3.57364 7.61868e-06C6.22676 7.50271e-06 8.39779 2.7684 8.39779 6.15326V6.87331H8.41168C11.7771 6.87331 14.6451 9.73376 15.5938 13.6414C15.5938 13.6414 16.8902 19.6385 23 25.4679L22.9382 25.5287L23 25.5895C16.8902 31.4189 15.5938 37.416 15.5938 37.416C14.6435 41.3236 11.7771 44.1841 8.41168 44.1841H8.3978V45.8461C8.3978 49.2293 6.23448 51.9994 3.57672 51.9994Z">
                                                </path>
                                            </svg>
                                        </span>
                                        <div className='pageButtonName' onClick={nextAyeh}>
                                            بارگذاری آیات بعدی 
                                        </div>
                                        <span className='corner'>
                                            <svg viewBox="0 0 23 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="pageSvg">
                                                <path fill="#5C8A69" d="M23 3.04706L22.512 3.04706C19.9991 3.04706 17.9433 5.49475 17.9433 8.48572L17.9433 9.95312L17.9296 9.95312C14.7426 9.95312 12.028 12.4797 11.1277 15.9335C11.1277 15.9335 9.90485 21.2325 4.11328 26.3844L4.17291 26.439L4.11328 26.4937C9.90027 31.6531 11.1277 36.9445 11.1277 36.9445C12.0264 40.3983 14.741 42.9249 17.9296 42.9249L17.9433 42.9249L17.9433 43.5607C17.9433 46.5517 19.9991 48.9994 22.512 48.9994L23 48.9994L23 3.04706Z">
                                                </path>
                                                <path fill="#E8BC6B" fillRule="evenodd" clipRule="evenodd" d="M23 7.9421e-06L19.4233 0C16.7655 3.5823e-06 14.6022 2.77003 14.6022 6.15326V7.81528H14.5883C11.2229 7.81528 8.3565 10.6757 7.40619 14.5834C7.40619 14.5834 6.10975 20.5805 0 26.4099L0.0617981 26.4707L0 26.5315C6.10975 32.3609 7.40619 38.358 7.40619 38.358C8.35495 42.2656 11.2229 45.1261 14.5883 45.1261H14.6022V45.8461C14.6022 49.231 16.7732 51.9994 19.4264 51.9994H23L23 49H22.5C22.4916 49 22.4832 48.9998 22.4749 48.9994H22.3987C19.8859 48.9994 17.83 46.5517 17.83 43.5607V42.9249H17.8163C14.6277 42.9249 11.9131 40.3983 11.0144 36.9445C11.0144 36.9445 9.78699 31.6531 4 26.4937L4.05963 26.439L4 26.3844C9.79157 21.2325 11.0144 15.9335 11.0144 15.9335C11.9147 12.4797 14.6293 9.9531 17.8163 9.9531H17.83V8.4857C17.83 5.49473 19.8859 3 22.3987 3H23L23 7.9421e-06Z">
                                                </path>
                                            </svg>
                                        </span>
                            </button>
                    )}
                    {+id === 1 ? '' : (
                        <button type='button' className='changePageButton pageButton'>
                                            <span className='corner'>
                                            <svg viewBox="0 0 23 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="pageSvg">
                                                <path fill="#5C8A69" d="M0 48.9523H0.487976C3.00085 48.9523 5.0567 46.5046 5.0567 43.5137V42.0463H5.07043C8.25745 42.0463 10.972 39.5197 11.8723 36.0659C11.8723 36.0659 13.0952 30.7668 18.8867 25.615L18.8271 25.5604L18.8867 25.5057C13.0997 20.3463 11.8723 15.0549 11.8723 15.0549C10.9736 11.6011 8.25897 9.07446 5.07043 9.07446H5.0567V8.43866C5.0567 5.44772 3.00085 3 0.487976 3H0V48.9523Z">
                                                </path>
                                                <path fill="#E8BC6B" fillRule="evenodd" clipRule="evenodd" d="M3.57672 51.9994L0 51.9994V48.9523H0.487976C3.00085 48.9523 5.0567 46.5046 5.0567 43.5137V42.0463H5.07043C8.25745 42.0463 10.972 39.5197 11.8723 36.0659C11.8723 36.0659 13.0952 30.7668 18.8867 25.615L18.8271 25.5604L18.8867 25.5057C13.0997 20.3463 11.8723 15.0549 11.8723 15.0549C10.9736 11.6011 8.25897 9.07446 5.07043 9.07446H5.0567V8.43866C5.0567 5.44772 3.00085 3 0.487976 3H0V0L3.57364 7.61868e-06C6.22676 7.50271e-06 8.39779 2.7684 8.39779 6.15326V6.87331H8.41168C11.7771 6.87331 14.6451 9.73376 15.5938 13.6414C15.5938 13.6414 16.8902 19.6385 23 25.4679L22.9382 25.5287L23 25.5895C16.8902 31.4189 15.5938 37.416 15.5938 37.416C14.6435 41.3236 11.7771 44.1841 8.41168 44.1841H8.3978V45.8461C8.3978 49.2293 6.23448 51.9994 3.57672 51.9994Z">
                                                </path>
                                            </svg>
                                            </span>
                                            <div className='pageButtonName' onClick={previousAyeh}>
                                            بارگذاری آیات قبلی 
                                            </div>
                                            <span className='corner'>
                                            <svg viewBox="0 0 23 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="pageSvg">
                                                <path fill="#5C8A69" d="M23 3.04706L22.512 3.04706C19.9991 3.04706 17.9433 5.49475 17.9433 8.48572L17.9433 9.95312L17.9296 9.95312C14.7426 9.95312 12.028 12.4797 11.1277 15.9335C11.1277 15.9335 9.90485 21.2325 4.11328 26.3844L4.17291 26.439L4.11328 26.4937C9.90027 31.6531 11.1277 36.9445 11.1277 36.9445C12.0264 40.3983 14.741 42.9249 17.9296 42.9249L17.9433 42.9249L17.9433 43.5607C17.9433 46.5517 19.9991 48.9994 22.512 48.9994L23 48.9994L23 3.04706Z">
                                                </path>
                                                <path fill="#E8BC6B" fillRule="evenodd" clipRule="evenodd" d="M23 7.9421e-06L19.4233 0C16.7655 3.5823e-06 14.6022 2.77003 14.6022 6.15326V7.81528H14.5883C11.2229 7.81528 8.3565 10.6757 7.40619 14.5834C7.40619 14.5834 6.10975 20.5805 0 26.4099L0.0617981 26.4707L0 26.5315C6.10975 32.3609 7.40619 38.358 7.40619 38.358C8.35495 42.2656 11.2229 45.1261 14.5883 45.1261H14.6022V45.8461C14.6022 49.231 16.7732 51.9994 19.4264 51.9994H23L23 49H22.5C22.4916 49 22.4832 48.9998 22.4749 48.9994H22.3987C19.8859 48.9994 17.83 46.5517 17.83 43.5607V42.9249H17.8163C14.6277 42.9249 11.9131 40.3983 11.0144 36.9445C11.0144 36.9445 9.78699 31.6531 4 26.4937L4.05963 26.439L4 26.3844C9.79157 21.2325 11.0144 15.9335 11.0144 15.9335C11.9147 12.4797 14.6293 9.9531 17.8163 9.9531H17.83V8.4857C17.83 5.49473 19.8859 3 22.3987 3H23L23 7.9421e-06Z">
                                                </path>
                                            </svg>
                                            </span>
                        </button>
                    )}
                </div>
                <div className='lodingContainer'>
                    <div className='pageNumberMain quranCenter'>
                        <div className='pageNumber'>
                            {`صفحه ${' '}${id}`}
                        </div>
                    </div>

                    <div>
                        {
                            mainData.map((ayeh,index) =>
                            <div key={index}  onClick={() =>SoundPlay(index)}>
                                <QuranAyeh ayeh={ayeh}/>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default QuranPage;