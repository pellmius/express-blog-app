import React from 'react';
import './Sidebar.css';
import {AiOutlineMessage} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi'

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div onClick={()=> alert("niggers")} className='sidebar-item'><AiOutlineMessage size='1.5em' className='sidebar-icon'/><span>Messages</span></div>
            <div className='sidebar-item'><BiUserCircle size='1.5em' className='sidebar-icon'/><span>Profile</span></div>

        </div>
    )
}

export default Sidebar;