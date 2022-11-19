import { useDispatch, useSelector } from "react-redux";
import { LocalPlayAyeh, playAyeh } from "../redux/setting/settingSlice";

const PlayAyeh = () => {
  const dispatch = useDispatch();
  const localPlayAyeh = useSelector(LocalPlayAyeh);
  return (
    <div>
      <h2 className="quranSettingTitle">نحوۀ پخش آیات</h2>
      <div className="quranSettingCard">
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="PlayAyeh"
            value="ayehTranslate"
            checked={localPlayAyeh === "ayehTranslate"}
            onChange={() => dispatch(playAyeh("ayehTranslate"))}
          />
          <p className="textInput">پخش آیه و ترجمه باهم</p>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="PlayAyeh"
            value="ayehOnly"
            checked={localPlayAyeh === "ayehOnly"}
            onChange={() => dispatch(playAyeh("ayehOnly"))}
          />
          <p className="textInput">فقط پخش آیه</p>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="PlayAyeh"
            value="translateOnly"
            checked={localPlayAyeh === "translateOnly"}
            onChange={() => dispatch(playAyeh("translateOnly"))}
          />
          <p className="textInput">فقط پخش ترجمه</p>
        </label>
      </div>
    </div>
  );
};

export default PlayAyeh;
