import { useDispatch, useSelector } from "react-redux";
import {
  LocalQariPlayer,
  qariPlayer,
} from "../../../redux/setting/settingSlice";
import reciterParhizgar from "../../images/reciterParhizgar.png";
import reciterAbdulbasit from "../../images/reciterAbdulbasit.jpg";
import reciterAlghamadi from "../../images/reciterAlghamadi.jpg";
import reciterMinshawy from "../../images/reciterMinshawy.png";
import reciterHusary from "../../images/reciterHusary.png";

const QariPlayer = () => {
  const dispatch = useDispatch();
  const localQariPlayer = useSelector(LocalQariPlayer);
  let quranSoundAyeh = "";
  let ayehAudio = new Audio(quranSoundAyeh);
  const playSound = (qari: string) => {
    ayehAudio.pause();
    quranSoundAyeh = `http://www.everyayah.com/data/${qari}/001007.mp3`;
    ayehAudio = new Audio(quranSoundAyeh);
    ayehAudio.play();
  };
  return (
    <div>
      <h2 className="quranSettingTitle">انتخاب قاری</h2>
      <div className="quranSettingCard">
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="QariPlayer"
            value="Parhizgar_48kbps"
            checked={localQariPlayer === "Parhizgar_48kbps"}
            onChange={() => dispatch(qariPlayer("Parhizgar_48kbps"))}
          />
          <img
            src={reciterParhizgar}
            alt="reciterParhizgar"
            className="settingImage"
          />
          <div className="settingFlex">
            <p className="textInput">استاد پرهیزگار</p>
          </div>
          <button
            className="playPreviewButton"
            onClick={() => playSound("Parhizgar_48kbps")}
          >
            <i className="icon playPreviewButtonIcon">
              <svg viewBox="0 0 25 22" className="svg">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z"
                ></path>
              </svg>
            </i>
          </button>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="QariPlayer"
            value="Ghamadi_40kbps"
            checked={localQariPlayer === "Ghamadi_40kbps"}
            onChange={() => dispatch(qariPlayer("Ghamadi_40kbps"))}
          />
          <img
            src={reciterAlghamadi}
            alt="reciterAlghamadi"
            className="settingImage"
          />
          <div className="settingFlex">
            <p className="textInput">استاد سعد الغامدی</p>
          </div>
          <button
            className="playPreviewButton"
            onClick={() => playSound("Ghamadi_40kbps")}
          >
            <i className="icon playPreviewButtonIcon">
              <svg viewBox="0 0 25 22" className="svg">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z"
                ></path>
              </svg>
            </i>
          </button>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="QariPlayer"
            value="Husary_64kbps"
            checked={localQariPlayer === "Husary_64kbps"}
            onChange={() => dispatch(qariPlayer("Husary_64kbps"))}
          />
          <img
            src={reciterHusary}
            alt="reciterHusary"
            className="settingImage"
          />
          <div className="settingFlex">
            <p className="textInput">استاد خلیل الحصری</p>
          </div>
          <button
            className="playPreviewButton"
            onClick={() => playSound("Husary_64kbps")}
          >
            <i className="icon playPreviewButtonIcon">
              <svg viewBox="0 0 25 22" className="svg">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z"
                ></path>
              </svg>
            </i>
          </button>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="QariPlayer"
            value="Menshawi_16kbps"
            checked={localQariPlayer === "Menshawi_16kbps"}
            onChange={() => dispatch(qariPlayer("Menshawi_16kbps"))}
          />
          <img
            src={reciterMinshawy}
            alt="reciterMinshawy"
            className="settingImage"
          />
          <div className="settingFlex">
            <p className="textInput">استاد منشاوی</p>
          </div>
          <button
            className="playPreviewButton"
            onClick={() => playSound("Menshawi_16kbps")}
          >
            <i className="icon playPreviewButtonIcon">
              <svg viewBox="0 0 25 22" className="svg">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z"
                ></path>
              </svg>
            </i>
          </button>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="QariPlayer"
            value="Abdul_Basit_Murattal_64kbps"
            checked={localQariPlayer === "Abdul_Basit_Murattal_64kbps"}
            onChange={() => dispatch(qariPlayer("Abdul_Basit_Murattal_64kbps"))}
          />
          <img
            src={reciterAbdulbasit}
            alt="reciterAbdulbasit"
            className="settingImage"
          />
          <div className="settingFlex">
            <p className="textInput">استاد عبد الباسط</p>
          </div>
          <button
            className="playPreviewButton"
            onClick={() => playSound("Abdul_Basit_Murattal_64kbps")}
          >
            <i className="icon playPreviewButtonIcon">
              <svg viewBox="0 0 25 22" className="svg">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z"
                ></path>
              </svg>
            </i>
          </button>
        </label>
      </div>
    </div>
  );
};

export default QariPlayer;
