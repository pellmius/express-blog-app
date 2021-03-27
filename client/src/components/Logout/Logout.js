import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';


const Logout = props => {
    useEffect(() => {
        window.localStorage.setItem('token','');
        window.location.reload();
    })
    return (
        <Redirect to='/'/>
        
    )

}

export default Logout;