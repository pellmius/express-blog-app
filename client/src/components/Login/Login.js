import React from 'react';
import './Login.css';
import axios from 'axios';
const Login = () => {
    const loginSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', {username: 'test1', password: 'test1234'}).then(
            (response) => {
                console.log(response);
            }
        )
    }
    return (
        <div className='login'>
            <div className='login-container'>
                <div className='child-login'>
                    <h2 className='login-title'>Login to your account</h2>
                    <form onSubmit={loginSubmit}>
                        <input type='username' placeholder='Username' className='user-input'>

                        </input>
                        <input type='password' placeholder='Password' className= 'password-input'>

                        </input>
                        <input type='submit' value='Login' className='login-btn'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;