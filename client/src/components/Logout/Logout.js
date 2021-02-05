import React, {useEffect, useContext} from 'react';
import { LoginContext } from '../../contexts/LoginContext'
import {Redirect} from 'react-router-dom';


const Logout = props => {
    const [token,setToken] = useContext(LoginContext)
    useEffect(() => {
        window.localStorage.setItem('token','');
    })
    return (
        <Redirect to='/'/>
        
    )

}

export default Logout;