import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import "./SideAyeh.css";
import {
  changeSideShow,
  changeCopyAyeh,
  changeShareAyeh,
} from "../../redux/sideAyeh/sideAyehSlice";
const SideAyeh = () => {
  const dispatch = useDispatch();
  return (
    <div className="mainAyehSideItem">
      <div className="AyehSideItem">
        <button
          className="AyehSideItemButton"
          onClick={() => dispatch(changeSideShow(false))}
        >
          <i className="AyehSideItemIcon">
            <AiOutlineCloseCircle className="AyehSideIcon" />
          </i>
          <span>
            <p className="AyehSideIconText">بستن</p>
          </span>
        </button>
        <button
          className="AyehSideItemButton"
          onClick={() => {
            dispatch(changeCopyAyeh(true));
            dispatch(changeSideShow(false));
          }}
        >
          <i className="AyehSideItemIcon">
            <FaRegCopy className="AyehSideIcon" />
          </i>
          <span>
            <p className="AyehSideIconText">کپی آیه</p>{" "}
          </span>
        </button>
        <button
          className="AyehSideItemButton"
          onClick={() => {
            dispatch(changeShareAyeh(true));
            dispatch(changeSideShow(false));
          }}
        >
          <i className="AyehSideItemIcon">
            <GrShareOption className="AyehSideIcon" />
          </i>
          <span>
            <p className="AyehSideIconText">اشتراک گذاری</p>{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideAyeh;
