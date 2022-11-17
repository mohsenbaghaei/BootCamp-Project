import { useDispatch, useSelector } from "react-redux";
import translatorMakarem from "../../images/translatorMakarem.png";
import HosseinAnsarian from "../../images/HosseinAnsarian.png";
import { translate, Localtranslate } from "../../../redux/setting/settingSlice";

const Translate = () => {
  const dispatch = useDispatch();
  const localTranslate = useSelector(Localtranslate);
  return (
    <div>
      <h2 className="quranSettingTitle">انتخاب ترجمه</h2>
      <div className="quranSettingCard">
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="Translator"
            value="makarem"
            checked={localTranslate === "makarem"}
            onChange={() => dispatch(translate("makarem"))}
          />
          <img
            src={translatorMakarem}
            alt="translator-makarem"
            className="settingImage"
          />
          <div className="settingFlex">
            <p className="textInput">مکارم شیرازی</p>
          </div>
        </label>
        <label className="quranSettingRadioBox">
          <input
            type="radio"
            name="Translator"
            value="ansarian"
            checked={localTranslate === "ansarian"}
            onChange={() => dispatch(translate("ansarian"))}
          />
          <img
            src={HosseinAnsarian}
            alt="HosseinAnsarian"
            className="settingImage"
          />
          <div className="settingFlex">
            <p className="textInput">حسین انصاریان</p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Translate;
