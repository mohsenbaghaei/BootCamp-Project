import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Footer.css";

import AyehRepeat from "../../setting/AyehRepeat";
import QariPlayer from "../../setting/QariPlayer";
import Translate from "../../setting/Translate";
import ShowText from "../../setting/ShowText";
import SideAyeh from "../../pages/quranayeh/SideAyeh";

import {
  LocalQariPlayer,
  Localtranslate,
} from "../../redux/setting/settingSlice";

import { IsPlaying, Playing } from "../../redux/audio/audioSlice";
import { footeritems } from "../../DataBase/InterFaces";

import { SideShow , changeSideShow } from '../../redux/sideAyeh/sideAyehSlice'

import reciterParhizgar from "../../images/reciterParhizgar.png";
import reciterAbdulbasit from "../../images/reciterAbdulbasit.jpg";
import reciterAlghamadi from "../../images/reciterAlghamadi.jpg";
import reciterMinshawy from "../../images/reciterMinshawy.png";
import reciterHusary from "../../images/reciterHusary.png";
import translatorMakarem from "../../images/translatorMakarem.png";
import HosseinAnsarian from "../../images/HosseinAnsarian.png";

const Footer: React.FC<footeritems> = ({ AyehAudio, TranslateAudio }) => {
  const dispatch = useDispatch();
  const [repeat, setRepeat] = useState(false);
  const [qari, setQari] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [text, setText] = useState(false);
  const localQariPlayer = useSelector(LocalQariPlayer);
  const localTranslate = useSelector(Localtranslate);
  const sideShow = useSelector(SideShow)
  const playing = useSelector(Playing);
  let selectedQari = "";
  let selectTranslate = "";

  const changeRepeat = () => {
    dispatch(changeSideShow(false))
    setRepeat(!repeat);
    setQari(false);
    setTranslate(false);
    setText(false);
  };
  const changeQari = () => {
    dispatch(changeSideShow(false))
    setRepeat(false);
    setQari(!qari);
    setTranslate(false);
    setText(false);
  };
  const changeTranslate = () => {
    dispatch(changeSideShow(false))
    setRepeat(false);
    setQari(false);
    setTranslate(!translate);
    setText(false);
  };
  const changeText = () => {
    dispatch(changeSideShow(false))
    setRepeat(false);
    setQari(false);
    setTranslate(false);
    setText(!text);
  };
  const changePlay = () => {
    if (playing) {
      dispatch(IsPlaying(false));
      AyehAudio?.pause();
      TranslateAudio?.pause();
    } else {
      dispatch(IsPlaying(true));
    }
  };
  if (localQariPlayer === "Parhizgar_48kbps") {
    selectedQari = reciterParhizgar;
  } else if (localQariPlayer === "Ghamadi_40kbps") {
    selectedQari = reciterAlghamadi;
  } else if (localQariPlayer === "Husary_64kbps") {
    selectedQari = reciterHusary;
  } else if (localQariPlayer === "Menshawi_16kbps") {
    selectedQari = reciterMinshawy;
  } else if (localQariPlayer === "Abdul_Basit_Murattal_64kbps") {
    selectedQari = reciterAbdulbasit;
  }
  if (localTranslate === "makarem") {
    selectTranslate = translatorMakarem;
  } else if (localTranslate === "ansarian") {
    selectTranslate = HosseinAnsarian;
  }

  return (
    <div
      className={repeat || qari || translate || text || sideShow ? "backgroundChanger" : ""}
    >
      <div className="quranMainBottomFooter">
        <div
          className={
            repeat || qari || translate || text || sideShow ? "footerWithSetting" : ""
          }
        >
          <div
            className={
              repeat || qari || translate || text || sideShow ? "footerSetting" : ""
            }
          >
            <div className="quranSettingBox">
              {repeat ? <AyehRepeat /> : ""}
              {qari ? <QariPlayer showButton={false} /> : ""}
              {translate ? <Translate /> : ""}
              {text ? <ShowText /> : ""}
              {sideShow ? <SideAyeh /> : ""}
            </div>
          </div>
        </div>
        <div className="quranBottomMainFooter">
          <button className="quranButtonFooter" onClick={changeRepeat}>
            <div className="quranButtonItem">
              <i className="quranButtonIcon">
                <svg viewBox="0 0 23 24" className="fotterSvg">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21.475 6h-14a6 6 0 00-6 6v1m0 5h14a6 6 0 006-6v-1"
                  ></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16.975 10.5l4.5-4.5-4.5-4.5m-11 12l-4.5 4.5 4.5 4.5"
                  ></path>
                </svg>
              </i>
            </div>
          </button>
          <button className="quranButtonFooter" onClick={changeQari}>
            <div className="quranButtonItem">
              <img
                src={selectedQari}
                alt={localQariPlayer}
                className="settingImage"
              />
            </div>
          </button>
          <button className="quranButtonFooter" onClick={changePlay}>
            <div className="quranButtonFooterPlay">
              <i className="quranButtonPlay">
                {playing ? (
                  <svg viewBox="0 0 15 20" className="fotterSvg">
                    <path
                      fill="currentColor"
                      d="M5.237 0H.951a.476.476 0 00-.476.476v19.048c0 .263.213.476.476.476h4.286a.476.476 0 00.476-.476V.476A.476.476 0 005.237 0zm9.048 0H9.999a.476.476 0 00-.476.476v19.048c0 .263.213.476.476.476h4.286a.476.476 0 00.476-.476V.476A.476.476 0 0014.285 0z"
                    ></path>
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 23" className="fotterSvg">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M2.475 21V2l16 9.5-16 9.5z"
                    ></path>
                  </svg>
                )}
              </i>
            </div>
          </button>
          <button className="quranButtonFooter" onClick={changeTranslate}>
            <div className="quranButtonItem">
              <img
                src={selectTranslate}
                alt={localTranslate}
                className="settingImage"
              />
            </div>
          </button>
          <button className="quranButtonFooter" onClick={changeText}>
            <div className="quranButtonItem">
              <i className="quranButtonIcon">
                <svg viewBox="0 0 29 30" className="fotterSvg">
                  <path
                    fill="currentColor"
                    d="M19.79 9.544l.023-.024c.379-.38.775-.777.935-1.301.127-.494-.193-.958-.531-1.284-.339-.32-.75-.552-1.176-.732.137-.2.28-.398.422-.595.193-.267.385-.533.565-.808.208-.316.236-.74.044-1.069-.34-.62-.971-1.04-1.621-1.28.32-.43.627-.868.935-1.306.27-.383.539-.767.816-1.145.674.458 1.382.996 1.632 1.81.255.804-.085 1.655-.587 2.287.605.455 1.171 1.08 1.245 1.868.08.807-.368 1.55-.866 2.147-.515.61-1.136 1.117-1.78 1.582l-.057-.15z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M19.24 15.397l.04-.029-.056-.15-.04.04c-.863-1.806-1.328-3.758-1.79-5.7-.083-.35-.166-.7-.251-1.047-.178-.717-.448-1.402-.719-2.086-.083-.211-.167-.422-.247-.634l-.044-.007a24.78 24.78 0 00-.044-.006c-.041.407-.08.815-.12 1.223-.06.623-.121 1.246-.19 1.867-.031.195.028.38.087.564.027.084.053.168.072.253.254 1.001.445 2.061.23 3.087a2.269 2.269 0 01-.39.87c-.641.944-1.433 1.775-2.242 2.575a4.133 4.133 0 00-1.1 1.778c-.434 1.397-.43 2.877-.427 4.327v.144a17.154 17.154 0 00-2.53 1.688c-.181.143-.361.289-.541.435-.813.66-1.632 1.324-2.594 1.75-.563.26-1.18.381-1.794.427-.714.034-1.472-.146-2.01-.638-.594-.538-.883-1.324-1.039-2.091-.304-1.531-.093-3.108.275-4.607.066-.178.113-.364.112-.555l-.01.046c-.045.187-.09.375-.16.555a22.164 22.164 0 00-.867 4.493c-.084 1.345-.05 2.753.504 4.005.4.91 1.195 1.648 2.162 1.91 1.064.304 2.186-.03 3.131-.537 1.016-.549 1.937-1.24 2.859-1.93.903-.678 1.806-1.355 2.797-1.898.733-.395 1.522-.726 2.36-.8 1.048-.13 2.104.245 2.944.861a62.05 62.05 0 01.94-2.026c.183-.381.365-.762.543-1.144a38.756 38.756 0 01-3.27-.81c-.811-.251-1.627-.507-2.374-.917-.294-.167-.61-.37-.717-.71.245-.278.498-.55.751-.822.508-.546 1.016-1.09 1.46-1.69a11.521 11.521 0 001.976-4.125c.141.458.251.926.361 1.396.124.526.248 1.054.416 1.567l-.012.008.027.08h.002l.027.089.019.057h-.001c.182.588.389 1.17.652 1.727.52 1.113 1.243 2.213 2.349 2.817 1.1.605 2.46.474 3.58-.012 1.332-.584 2.319-1.764 2.903-3.07.77-1.73 1.007-3.658.93-5.537-.102-1.294-.338-2.693-1.245-3.685-.938-1.035-2.762-.792-3.564.29-.747.991-.889 2.275-1.02 3.472a32.34 32.34 0 01-.042.558c-.076.922-.153 1.862.157 2.747.167.503.642.927 1.192.901.67-.022 1.28-.368 1.807-.758.259-.178.552-.379.884-.334.25.076.4.466.184.652-.525.584-1.183 1.04-1.89 1.377-1.017.486-2.264.653-3.298.123-.992-.484-1.616-1.449-2.096-2.404zm3.591-2.536c.174.337.428.677.82.764.523.126 1.044-.154 1.425-.493.504-.383 1.096-.796 1.76-.718-.308-.358-.686-.675-1.139-.833-1.078-.406-2.517.13-2.866 1.28z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
