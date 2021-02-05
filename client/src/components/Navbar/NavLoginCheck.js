import React, {useContext} from 'react';
import {NavbarContext} from '../../contexts/NavbarContext';

const NavLoginCheck = (props) => {
    const [userObj,setUserObj] = useContext(NavbarContext);
    if(!userObj) {
        return(
            <div id='navbar-container'>
                <a href='login'>Login</a>
                <a href='##'>Signup</a>
                <a href='##'>Settings</a>
            </div>
        )
        
    } else {
        return(
            <div id='navbar-container'>
                <a href={'/profile/' + userObj.username}>{userObj.username}</a>
                <a href='/logout'>Logout</a>
            
                <a href='##'>Settings</a>
        </div>    
        )
        
    }
    
}

export default NavLoginCheck