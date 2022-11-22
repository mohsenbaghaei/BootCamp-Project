import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { HeaderName } from "../../DataBase/InterFaces";
import { useDispatch } from "react-redux";
import { IsPlaying, playCurrentAyeh } from "../../redux/audio/audioSlice";

const Header: React.FC<HeaderName> = ({
  headerName,
  headerSubName,
  isSetting,
  AyehAudio,
  TranslateAudio,
}) => {
  const navigate = useNavigate();
  const Back = () => {
    AyehAudio?.pause();
    TranslateAudio?.pause();
    dispatch(IsPlaying(false));
    dispatch(playCurrentAyeh(-1));
    navigate(-1);
  };
  const toSetting = () => {
    AyehAudio?.pause();
    TranslateAudio?.pause();
    dispatch(IsPlaying(false));
    dispatch(playCurrentAyeh(-1));
  };
  const dispatch = useDispatch();
  return (
    <div className="mainHeader ">
      <div className="fixedHeader ">
        <div className="mainHeaderInn ">
          <div className="mainHeaderPattern"></div>
          <div className="mainHeaderContent">
            <MdOutlineArrowForwardIos
              onClick={Back}
              className="mainHeaderback"
            />
            <div className="headerFlex">
              <span>{headerName}</span>
              <span className="mainHeaderSub">{headerSubName}</span>
            </div>
            {isSetting ? (
              <div className="mainHeaderActions" onClick={toSetting}>
                <BiSearchAlt
                  className="icons ml2"
                  onClick={() => navigate("/search")}
                />
                <IoSettingsOutline
                  className="icons"
                  onClick={() => navigate("/setting")}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
