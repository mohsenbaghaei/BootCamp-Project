import { useSelector, useDispatch } from "react-redux";
import {
  ayehFont,
  ayehThickness,
  ayehBigness,
  translateThickness,
  translateBigness,
  LocalayehFont,
  LocalayehThickness,
  LocalayehBigness,
  LocaltranslateThickness,
  LocaltranslateBigness,
} from "../redux/setting/settingSlice";

const ShowText = () => {
  const dispatch = useDispatch();
  const localAyehFont = useSelector(LocalayehFont);
  const localAyehThickness = useSelector(LocalayehThickness);
  const localAyehBigness = useSelector(LocalayehBigness);
  const localTranslateThickness = useSelector(LocaltranslateThickness);
  const localTranslateBigness = useSelector(LocaltranslateBigness);

  return (
    <div>
      <h2 className="quranSettingTitle">تنظیمات مربوط به متن</h2>
      <div className="quranSettingCard">
        <h3 className="quranSettingTitleText">انتخاب فونت</h3>
        <div className="settingSelect">
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehFont"
              value="fontVazeh"
              checked={localAyehFont === "fontVazeh"}
              onChange={() => dispatch(ayehFont("fontVazeh"))}
            />
            <p className="textInput">واضح</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehFont"
              value="fontMuhammad"
              checked={localAyehFont === "fontMuhammad"}
              onChange={() => dispatch(ayehFont("fontMuhammad"))}
            />
            <p className="textInput">محمد(ص)</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehFont"
              value="fontUthmani"
              checked={localAyehFont === "fontUthmani"}
              onChange={() => dispatch(ayehFont("fontUthmani"))}
            />
            <p className="textInput">عثمان‌طه</p>
          </label>
        </div>
        <h3 className="quranSettingTitleText">ضخامت و بزرگی متن آیه</h3>
        <div className="settingCenter">
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehThickness"
              value="fontAyehWeightThin"
              checked={localAyehThickness === "fontAyehWeightThin"}
              onChange={() => dispatch(ayehThickness("fontAyehWeightThin"))}
            />
            <p className="textInput">نازک</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehThickness"
              value="fontAyehWeightThick"
              checked={localAyehThickness === "fontAyehWeightThick"}
              onChange={() => dispatch(ayehThickness("fontAyehWeightThick"))}
            />
            <p className="textInput">ضخیم</p>
          </label>
        </div>
        <div className="settingSelect">
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehBigness"
              value="fontAyehSizeVS"
              checked={localAyehBigness === "fontAyehSizeVS"}
              onChange={() => dispatch(ayehBigness("fontAyehSizeVS"))}
            />
            <p className="textInput">خیلی‌کوچک</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehBigness"
              value="fontAyehSizeS"
              checked={localAyehBigness === "fontAyehSizeS"}
              onChange={() => dispatch(ayehBigness("fontAyehSizeS"))}
            />
            <p className="textInput">کوچک</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehBigness"
              value="fontAyehSizeN"
              checked={localAyehBigness === "fontAyehSizeN"}
              onChange={() => dispatch(ayehBigness("fontAyehSizeN"))}
            />
            <p className="textInput">متوسط</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehBigness"
              value="fontAyehSizeB"
              checked={localAyehBigness === "fontAyehSizeB"}
              onChange={() => dispatch(ayehBigness("fontAyehSizeB"))}
            />
            <p className="textInput">بزرگ</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="AyehBigness"
              value="fontAyehSizeVB"
              checked={localAyehBigness === "fontAyehSizeVB"}
              onChange={() => dispatch(ayehBigness("fontAyehSizeVB"))}
            />
            <p className="textInput">خیلی‌بزرگ</p>
          </label>
        </div>
        <h3 className="quranSettingTitleText">ضخامت و بزرگی متن ترجمه</h3>
        <div className="settingCenter">
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="TranslateThickness"
              value="fontTranslateWeightThin"
              checked={localTranslateThickness === "fontTranslateWeightThin"}
              onChange={() =>
                dispatch(translateThickness("fontTranslateWeightThin"))
              }
            />
            <p className="textInput">نازک</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="TranslateThickness"
              value="fontTranslateWeightThick"
              checked={localTranslateThickness === "fontTranslateWeightThick"}
              onChange={() =>
                dispatch(translateThickness("fontTranslateWeightThick"))
              }
            />
            <p className="textInput">ضخیم</p>
          </label>
        </div>
        <div className="settingSelect">
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="TranslateBigness"
              value="fontTranslateSizeVS"
              checked={localTranslateBigness === "fontTranslateSizeVS"}
              onChange={() => dispatch(translateBigness("fontTranslateSizeVS"))}
            />
            <p className="textInput">خیلی‌کوچک</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="TranslateBigness"
              value="fontTranslateSizeS"
              checked={localTranslateBigness === "fontTranslateSizeS"}
              onChange={() => dispatch(translateBigness("fontTranslateSizeS"))}
            />
            <p className="textInput">کوچک</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="TranslateBigness"
              value="fontTranslateSizeN"
              checked={localTranslateBigness === "fontTranslateSizeN"}
              onChange={() => dispatch(translateBigness("fontTranslateSizeN"))}
            />
            <p className="textInput">متوسط</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="TranslateBigness"
              value="fontTranslateSizeB"
              checked={localTranslateBigness === "fontTranslateSizeB"}
              onChange={() => dispatch(translateBigness("fontTranslateSizeB"))}
            />
            <p className="textInput">بزرگ</p>
          </label>
          <label className="quranSettingRadioBox">
            <input
              type="radio"
              name="TranslateBigness"
              value="fontTranslateSizeVB"
              checked={localTranslateBigness === "fontTranslateSizeVB"}
              onChange={() => dispatch(translateBigness("fontTranslateSizeVB"))}
            />
            <p className="textInput">خیلی‌بزرگ</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShowText;
