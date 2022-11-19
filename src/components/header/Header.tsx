import React from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'
import { BiSearchAlt } from 'react-icons/bi'
import { HeaderName } from '../../DataBase/InterFaces';

const Header : React.FC <HeaderName>= ({headerName , headerSubName , isSetting}) => {

    const navigate = useNavigate()
    const Back = () => {
        navigate(-1)
    }
    return (
        <div className='mainHeader '>
            <div className='fixedHeader '>
                <div className='mainHeaderInn '>
                    <div className='mainHeaderPattern'></div>
                    <div className='mainHeaderContent'>
                        <MdOutlineArrowForwardIos onClick={Back} className='mainHeaderback'/>
                        <div className='headerFlex'>
                            <span>{headerName}</span>
                            <span className='mainHeaderSub'>{headerSubName}</span>
                        </div>
                        {
                            isSetting ? 
                            (
                            <div className='mainHeaderActions'>
                                <BiSearchAlt className='icons ml2'/>
                                <IoSettingsOutline className='icons' onClick={()=>navigate('/setting')}/>
                            </div>
                            ) : ''
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;