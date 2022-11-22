import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "./AyehSearch.css";
import quranSearchimage from "../../images/quranSearchimage.png";
import { SearchAyeh } from "../../DataBase/SearchAyeh";
import { Sura } from "../../DataBase/QuranDate";
import SingleAyeh from "./SingleAyeh";
import Footer from "../../components/footer/Footer";

const AyehSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [ayehLength, setAyehLength] = useState([]);

  const search = () => {
    let searchData: any = [];
    SearchAyeh.map((ayeh, index) => {
      if (ayeh.match(searchValue)) {
        let suraIndex = Sura.findIndex((item) => index < item[0]);
        searchData.push([Sura[suraIndex][4], index]);
      }
    });
    setAyehLength(searchData);
  };
  useEffect(() => {
    if (searchValue) {
      let timer = setTimeout(() => search(), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchValue]);
  return (
    <div className="quranContainer">
      <div>
        <Header headerName={"جستجو"} isSetting={false} />
      </div>
      <div className="quranMain">
        <div className="searchMainContainer">
          <div className="quranMainSearch">
            <input
              type="text"
              placeholder="واژۀ موردنظر خود را وارد کنید."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className="quranMainSearchInput"
            />
            <span className="cornerSearch cornerFirst">
              <svg
                viewBox="0 0 21 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.761 38.307c-.471.426-1.102.702-1.752.693-1.336-.003-2.672-.001-4.009-.002V2.001c1.39.003 2.78-.006 4.169.004 1.12.065 2.042.913 2.47 1.883.564 1.222.307 2.594.365 3.89.617.082 1.254.082 1.845.297 1.516.507 2.663 1.767 3.26 3.19.262.58.364 1.213.598 1.803 1.057 2.82 2.865 5.33 5.018 7.459.101.116.267.204.275.373-2.29 2.2-4.215 4.82-5.316 7.782-.257.708-.393 1.459-.751 2.13-.627 1.26-1.704 2.355-3.084 2.815-.596.206-1.234.219-1.856.286 0 .543.004 1.085 0 1.628-.026 1.027-.439 2.07-1.232 2.766Z"
                  fill="#fff"
                ></path>
                <path
                  d="M7.29 39.652c-.814.806-1.94 1.325-3.108 1.346-1.394.004-2.788 0-4.181.002-.002-.663 0-1.325 0-1.987 1.336 0 2.673-.001 4.01.001.65.01 1.28-.266 1.752-.693.792-.695 1.206-1.74 1.232-2.768.003-.543 0-1.086 0-1.629.622-.067 1.26-.08 1.856-.286 1.38-.46 2.457-1.556 3.084-2.818.359-.671.494-1.423.752-2.131 1.101-2.965 3.027-5.587 5.317-7.788-.008-.169-.174-.257-.275-.373-2.153-2.13-3.962-4.642-5.02-7.464-.233-.591-.335-1.225-.597-1.806-.597-1.423-1.745-2.685-3.261-3.192-.59-.215-1.228-.215-1.845-.296-.059-1.298.199-2.67-.366-3.894-.428-.97-1.35-1.82-2.47-1.884-1.39-.01-2.78-.001-4.17-.005L.001.001c1.42.002 2.84-.005 4.258.003 1.599.053 3.05 1.04 3.853 2.36.697 1.093.978 2.402.931 3.68 1.516.382 2.855 1.315 3.801 2.521.805 1.001 1.335 2.189 1.64 3.42.72 2.15 1.973 4.098 3.453 5.825.92 1.071 1.963 2.034 3.055 2.934l.008.197c-1.81 1.487-3.458 3.186-4.724 5.145-.873 1.338-1.594 2.784-1.996 4.326-.743 2.423-2.67 4.614-5.244 5.244-.075 1.475-.661 2.949-1.745 3.996Z"
                  fill="#BDBDBD"
                ></path>
              </svg>
            </span>
            <span className="cornerSearch cornerLast">
              <svg
                viewBox="0 0 21 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.239 2.693c.471-.426 1.102-.702 1.752-.693 1.336.003 2.672.001 4.009.002v36.997c-1.39-.003-2.78.006-4.169-.004-1.12-.065-2.042-.913-2.47-1.883-.564-1.222-.307-2.594-.365-3.89-.617-.082-1.254-.082-1.845-.297-1.516-.507-2.663-1.767-3.26-3.19-.262-.58-.364-1.213-.598-1.803-1.057-2.82-2.865-5.33-5.018-7.459-.101-.116-.267-.204-.275-.373 2.29-2.2 4.215-4.82 5.315-7.782.259-.708.394-1.459.752-2.13.627-1.26 1.704-2.355 3.084-2.816.596-.205 1.234-.218 1.856-.285 0-.543-.004-1.085 0-1.628.026-1.027.439-2.07 1.232-2.766Z"
                  fill="#fff"
                ></path>
                <path
                  d="M13.71 1.348C14.524.542 15.65.023 16.817.002 18.212-.002 19.606.002 21 0c.002.663 0 1.325 0 1.987-1.336 0-2.673.001-4.01-.001-.65-.01-1.28.266-1.752.693-.793.695-1.206 1.74-1.232 2.768-.003.543 0 1.086 0 1.629-.622.067-1.26.08-1.856.286-1.38.46-2.457 1.556-3.085 2.818-.358.671-.493 1.423-.751 2.131-1.101 2.964-3.027 5.587-5.317 7.788.008.169.174.257.275.373 2.153 2.13 3.962 4.642 5.02 7.464.233.591.335 1.225.597 1.806.597 1.423 1.745 2.685 3.261 3.192.59.215 1.228.215 1.845.296.059 1.298-.198 2.67.366 3.894.428.97 1.35 1.82 2.47 1.884 1.39.01 2.78.001 4.17.005l-.001 1.986c-1.42-.002-2.84.005-4.258-.003-1.599-.053-3.05-1.04-3.854-2.36-.696-1.093-.977-2.402-.93-3.68-1.516-.382-2.855-1.315-3.801-2.521-.805-1.001-1.335-2.189-1.64-3.42-.72-2.15-1.973-4.098-3.453-5.825-.92-1.071-1.963-2.034-3.055-2.934L0 20.059c1.81-1.487 3.458-3.186 4.724-5.145.873-1.338 1.594-2.784 1.996-4.326.743-2.423 2.67-4.614 5.244-5.243.075-1.476.661-2.95 1.745-3.997Z"
                  fill="#BDBDBD"
                ></path>
              </svg>
            </span>
          </div>
          {!searchValue ? (
            <div className="quranMainSearchItem">
              <div className="quranSearchItem">
                <img
                  src={quranSearchimage}
                  alt={"quranSearchimage"}
                  className="quranSearchImg"
                />
              </div>
              <p className="quranSearchTitle">واژه‌ای را در قرآن جستجو کنید.</p>
            </div>
          ) : (
            <div className="singleAyehShow">
              {ayehLength.length !== 0 ? (
                <>
                  <p className="singleAyehShowText">
                    عبارت (({searchValue})) در {ayehLength.length} آیه پیدا شد
                  </p>
                  {ayehLength.map((ayeh: any) => {
                    <>
                      {console.log(ayeh[0])}
                      <p>{SearchAyeh[+ayeh[1]]}</p>
                      <SingleAyeh ayeh={ayeh} />
                    </>;
                  })}
                </>
              ) : (
                <p className="notFound">موردی یافت نشد</p>
              )}
            </div>
          )}
        </div>
        <Footer isPage={false} />
      </div>
    </div>
  );
};

export default AyehSearch;
