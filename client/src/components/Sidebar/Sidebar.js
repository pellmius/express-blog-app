import React, {useContext} from 'react';
import './Sidebar.css';
import {AiOutlineMessage} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {SidebarContext} from '../../contexts/SidebarContext';



const Sidebar = () => {
    const [sidebarVisible,toggleSidebar] = useContext(SidebarContext);
    const dictForVisibility = {'true': 'flex', 'false': 'none'};

    return(

        <div id='sidebar' style={{display:dictForVisibility[sidebarVisible.toString()]}}>

            <div className='sidebar-item'><BiUserCircle size='1.5em' className='sidebar-icon'/><span>Profile</span></div>
            <div className='sidebar-item'><AiOutlineMessage size='1.5em' className='sidebar-icon'/><span>Messages</span></div>
            
        </div>
    )
}

export default Sidebar;