import React, {useContext, useState} from 'react';
import './Login.css';
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext.js';

const Login = () => {
    const [token,setToken] = useContext(LoginContext);
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');

    const loginSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', {username: user , password: password}).then(
            (response) => {
                if(response.data.token){
                   setToken(response.data.token); 
                   window.localStorage.setItem('token', response.data.token);
                   window.location.reload();
                }
                else {
                    alert(response.data.msg)
                }
            }
        )
        
    }
    return (
        
        <div className='login'>
            <div className='svg-container'>
                <svg id='svg-1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#52489C" d="M44.8,-69.5C59.4,-60.3,73.6,-50.2,80.5,-36.4C87.5,-22.5,87.2,-5,82.6,10.3C78,25.7,69,38.8,58.8,51.4C48.6,63.9,37.2,75.8,22.9,81.9C8.6,87.9,-8.7,88,-23.1,82.2C-37.6,76.4,-49.3,64.6,-59.5,52C-69.7,39.4,-78.4,26,-80.1,11.8C-81.7,-2.5,-76.4,-17.4,-70.2,-32.5C-64,-47.5,-57,-62.7,-45.2,-73.1C-33.3,-83.6,-16.7,-89.4,-0.8,-88.2C15.1,-87,30.2,-78.7,44.8,-69.5Z" transform="translate(100 100)" />
                </svg>   
                <svg id='svg-2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4062BB" d="M37.7,-54C49,-43.7,58.3,-32.8,66.1,-19.1C73.8,-5.3,80,11.3,77,26.4C74,41.4,61.8,54.9,47.5,64.5C33.1,74,16.6,79.7,2.5,76.1C-11.5,72.6,-22.9,60,-37.5,50.5C-52,41,-69.6,34.7,-74.4,23.4C-79.2,12.1,-71.1,-4.2,-66.1,-22C-61.1,-39.9,-59.1,-59.2,-48.6,-69.8C-38.1,-80.5,-19,-82.4,-2.9,-78.3C13.2,-74.3,26.4,-64.4,37.7,-54Z" transform="translate(100 100)" />
                </svg>
                <svg id='svg-3' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#D8315B" d="M45.1,-63.3C59.5,-51.6,73,-39.8,79.6,-24.7C86.1,-9.5,85.7,9.1,78.2,23.3C70.7,37.5,56.1,47.3,41.9,56.2C27.6,65.2,13.8,73.3,-2.5,76.8C-18.9,80.2,-37.8,79.1,-49.4,69.3C-61,59.5,-65.4,41.1,-66,24.8C-66.7,8.6,-63.6,-5.5,-61.4,-22.3C-59.2,-39.1,-57.9,-58.5,-47.8,-71.7C-37.7,-84.9,-18.9,-91.9,-1.8,-89.4C15.3,-87,30.7,-75.1,45.1,-63.3Z" transform="translate(100 100)" />
                </svg>
                <svg id='svg-4' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#11B5E4" d="M60.6,-60.8C76.3,-45,85,-22.5,80.8,-4.2C76.6,14.1,59.4,28.2,43.8,39.2C28.2,50.2,14.1,58.2,-4.6,62.8C-23.3,67.5,-46.7,68.8,-59.5,57.7C-72.3,46.7,-74.6,23.3,-72.4,2.2C-70.3,-19,-63.6,-38,-50.8,-53.7C-38,-69.5,-19,-82,1.8,-83.8C22.5,-85.5,45,-76.5,60.6,-60.8Z" transform="translate(100 100)" />
                </svg>
                <svg id='svg-5' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFD82" d="M39,-41.1C50.9,-36.4,61.4,-24.5,63.1,-11.6C64.9,1.4,58,15.4,50.2,29C42.4,42.6,33.7,55.7,22,59.7C10.3,63.6,-4.5,58.3,-22.9,55C-41.2,51.7,-63.2,50.4,-75.8,38.8C-88.3,27.2,-91.5,5.3,-84.5,-11.4C-77.4,-28.2,-60.1,-39.6,-44.4,-43.6C-28.6,-47.6,-14.3,-44.1,-0.4,-43.6C13.5,-43.1,27,-45.7,39,-41.1Z" transform="translate(100 100)" />
                </svg>
            </div>
            
            <div className='login-container'>
                <div className='child-login'>
                    <h2 className='login-title'>Login to your account</h2>
                    <form onSubmit={loginSubmit}>
                        <input type='username' onChange={ e => setUser(e.target.value)} placeholder='Username' className='user-input'>

                        </input>
                        <input type='password' onChange={ e => setPassword(e.target.value) } placeholder='Password' className= 'password-input'>

                        </input>
                        <input type='submit' value='Login' className='login-btn'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;