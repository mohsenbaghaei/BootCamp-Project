import React from "react";
import Header from "../header/Header";
import "./Setting.css";
import ShowAyeh from "./ShowAyeh";
import AyehRepeat from "./AyehRepeat";
import PlayAyeh from "./PlayAyeh";
import QariPlayer from "./QariPlayer";
import ShowText from "./ShowText";
import Translate from "./Translate";
import SettingPreview from "./SettingPreview";
import { useSelector } from "react-redux";
import { Localtranslate } from "../../../redux/setting/settingSlice";

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
          <QariPlayer />
        </div>
        <div className="quranSettingBox">
          <ShowText />
          <div className="settingMainSample">
            <SettingPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
