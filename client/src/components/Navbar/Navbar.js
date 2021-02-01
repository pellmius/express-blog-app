import React, {useState} from 'react';
import { FaBars } from "react-icons/fa";
import './Navbar.css';
const Navbar = () => {
    const [sidebarState,toggleSidebar] = useState(false);
    

    return(
    <div id='navbar'>
        <div id='navbar-left'>
            <button onClick={() => toggleSidebar(!sidebarState)} className='bar-button'><FaBars size='2em' className='bar' style={{color:'white'}}/></button>
            <a href='##' id='logo'>Blogocum</a>
            <form>
               <input placeholder='Search' type='text'></input> 
            </form>
            
        </div>
        
        <div id='navbar-container'>
            <a href='##'>Info</a>
            <a href='##'>FAQ</a>
            <a href='##'>Settings</a>
        </div>
    </div>        
    )
}

export default Navbar;