import { useDispatch, useSelector } from "react-redux";
import { LocalShowAyeh, showAyeh } from "../../../redux/setting/settingSlice";

const ShowAyeh = () => {
  const dispatch = useDispatch();
  const localShowAyeh = useSelector(LocalShowAyeh);
  return (
    <div>
      <h2 className="quranSettingTitle">نحوه نمایش</h2>
      <div className="quranSettingCard">
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="ShowAyeh"
            value="true"
            checked={localShowAyeh === "true"}
            onChange={() => dispatch(showAyeh("true"))}
          />
          <p className="textInput">نمایش آیه و ترجمه با هم</p>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="ShowAyeh"
            value="false"
            checked={localShowAyeh === "false"}
            onChange={() => dispatch(showAyeh("false"))}
          />
          <p className="textInput">فقط نمایش آیه</p>
        </label>
      </div>
    </div>
  );
};

export default ShowAyeh;
