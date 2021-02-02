import React, {useContext, useEffect} from 'react';
import { FaBars } from "react-icons/fa";
import axios from 'axios';
import {SidebarContext} from '../../contexts/SidebarContext'
import './Navbar.css';
const Navbar = () => {
    
    const [sidebarVisible,toggleSidebar] = useContext(SidebarContext);

    // useEffect(() => {
    //     axios.post('http://localhost:8000/api/users/profile', {
    //         headers: {'Authorization': 'Bearer a'}
    //     })
    //     .then((response) => {
    //       console.log(response.data)
    //     })
    //   })
    return(
    <div id='navbar'>
        <div id='navbar-left'>
            <button onClick={() => toggleSidebar(!sidebarVisible)} className='bar-button'><FaBars size='2em' className='bar' style={{color:'white'}}/></button>
            <a href='##' id='logo'>Blogocum</a>
            <form>
               <input placeholder='Search' type='text'></input> 
            </form>
            
        </div>
        
        <div id='navbar-container'>
            
            <a href='##'>Login</a>
            <a href='##'>Signup</a>
            <a href='##'>Settings</a>
        </div>
    </div>        
    )
}

export default Navbar;