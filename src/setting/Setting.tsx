import React from "react";
import Header from "../components/header/Header";
import "./Setting.css";
import ShowAyeh from "./ShowAyeh";
import AyehRepeat from "./AyehRepeat";
import PlayAyeh from "./PlayAyeh";
import QariPlayer from "./QariPlayer";
import ShowText from "./ShowText";
import Translate from "./Translate";
import SettingPreview from "./SettingPreview";
import { useSelector } from "react-redux";
import { Localtranslate } from "../redux/setting/settingSlice";
import Footer from "../components/footer/Footer";

const Setting: React.FC = () => {
  const localtranslate = useSelector(Localtranslate);
  return (
    <div className="quranContainer">
      <div>
        <Header headerName={`تنظیمات قرآن`} isSetting={false} />
      </div>
      <div className="quranMain quranSettingtop">
        <div className="quranSettingBox">
          <ShowAyeh />
        </div>
        <div className="quranSettingBox">
          <Translate />
        </div>
        {localtranslate === "makarem" ? (
          <div className="quranSettingBox">
            <PlayAyeh />
          </div>
        ) : (
          ""
        )}
        <div className="quranSettingBox">
          <AyehRepeat />
        </div>
        <div className="quranSettingBox">
          <QariPlayer showButton={true} />
        </div>
        <div className="quranSettingBox">
          <ShowText />
          <div className="settingMainSample">
            <SettingPreview />
          </div>
        </div>
        <div>
          <Footer isPage={false} />
        </div>
      </div>
    </div>
  );
};

export default Setting;
