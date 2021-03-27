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