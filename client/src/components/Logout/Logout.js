import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';


const Logout = props => {
    useEffect(() => {
        window.localStorage.setItem('token','');
    })
    return (
        <Redirect to='/'/>
        
    )

}

export default Logout;