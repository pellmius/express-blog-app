import React, {useContext, useState, useEffect} from 'react';
import { FaBars } from "react-icons/fa";
import NavLoginCheck from './NavLoginCheck';
import axios from 'axios';
import {SidebarContext} from '../../contexts/SidebarContext';
import {NavbarContext} from '../../contexts/NavbarContext';
import './Navbar.css';
const Navbar = () => {
    
    const [sidebarVisible,toggleSidebar] = useContext(SidebarContext);
    const [userObj,setUserObj] = useContext(NavbarContext);
    const token = window.localStorage.token;

    useEffect(() => {
        if(token !== '') {
            console.log(token)
            axios.post('http://localhost:8000/api/users/profile', {}, {headers: {'Authorization': 'Bearer ' + token}})
            .then((response) => {
                console.log(response.data)
                setUserObj(response.data);
            }) 
        } else {
            setUserObj(null)
        }
    }, [])

    return(
    <div id='navbar'>
        <div id='navbar-left'>
            <button onClick={() => toggleSidebar(!sidebarVisible)} className='bar-button'><FaBars size='2em' className='bar' style={{color:'white'}}/></button>
            <a href='/' id='logo'>Blogocum</a>
            <form>
               <input placeholder='Search' type='text'></input> 
            </form>
            
        </div>
        <NavLoginCheck/>
    </div>        
    )
}

export default Navbar;