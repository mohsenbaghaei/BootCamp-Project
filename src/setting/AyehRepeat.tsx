import { useDispatch, useSelector } from "react-redux";
import { LocalAyehRepeat, ayehRepeat } from "../redux/setting/settingSlice";

const AyehRepeat = () => {
  const dispatch = useDispatch();
  const localAyehRepeat = useSelector(LocalAyehRepeat);
  return (
    <div>
      <h2 className="quranSettingTitle">تکرار آیات</h2>
      <div className="quranSettingCard">
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="AyehRepeat"
            value="noRepeat"
            checked={localAyehRepeat === "noRepeat"}
            onChange={() => dispatch(ayehRepeat("noRepeat"))}
          />
          <p className="textInput">غیر فعال</p>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="AyehRepeat"
            value="ayehRepeat"
            checked={localAyehRepeat === "ayehRepeat"}
            onChange={() => dispatch(ayehRepeat("ayehRepeat"))}
          />
          <p className="textInput">تکرار آیه</p>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="AyehRepeat"
            value="pageRepeat"
            checked={localAyehRepeat === "pageRepeat"}
            onChange={() => dispatch(ayehRepeat("pageRepeat"))}
          />
          <p className="textInput">تکرار صفحه</p>
        </label>
      </div>
    </div>
  );
};

export default AyehRepeat;
