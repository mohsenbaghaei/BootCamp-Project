import React from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'
import { BiSearchAlt } from 'react-icons/bi'

const Header : React.FC= () => {

    const navigate = useNavigate()
    const Back = () => {
        navigate(-1)
    }
    return (
        <div className='mainHeader'>
            <div className='fixedHeader'>
                <div className='mainHeaderInn'>
                    <div className='mainHeaderPattern'>
                    <div className='mainHeaderContent'>
                        <MdOutlineArrowForwardIos onClick={Back} className='mainHeaderback'/>
                        قران
                        <div className='mainHeaderActions'>
                            <BiSearchAlt className='icons ml2'/>
                            <IoSettingsOutline className='icons'/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;