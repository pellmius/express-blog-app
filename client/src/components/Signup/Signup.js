import React, {useContext, useState} from 'react';
import './Signup.css';
import axios from 'axios';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';





const Signup = () => {
    const [username,setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmedPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');

    const onVerifyCaptcha = e => {
        setCaptchaValue(e);
    }

    const submitSignup = e => {
        e.preventDefault();
        setErrMsg('');
        const passwordsAreEqual = password === confirmPassword ? true : false;
        if(!passwordsAreEqual) {
            setErrMsg("Passwords do not match.");
        }
        if(!username) {
            setErrMsg("Username field empty");
        }
        if(!password) {
            setErrMsg("Password field empty");
        }
        if(!email) {
            setErrMsg("Email field empty");
        }
        if(passwordsAreEqual && username && password && email) {
            console.log("REEE")
            axios.post('http://localhost:8000/api/users/create/verify', {'g-recaptcha-response':captchaValue})
            .then(response => {
                if(response.data.success) {
                    axios.post('http://localhost:8000/api/users/create', {username, password}).then(response => {
                        setErrMsg(response.data.msg);
                    })
                }
            }).catch(err => alert(err))
        }
    }   
    return (
        
        <div className='login'>
            
            <GoogleReCaptchaProvider
                            reCaptchaKey='6LcqwXkaAAAAAB9fTPcU8dn8O5topNN4O8KpJU-A'
                            scriptProps = {
                                {appendTo: 'body'}
                            }
            >
                <div className='login-container'>
                    <div className='child-login'>
                        <h2 className='login-title'>Create a new account</h2>
                        <form onSubmit = {submitSignup}>
                            <input type='username' onChange={ e => setUsername(e.target.value)}  placeholder='Username' className='user-input'>

                            </input>
                            <input type='email'onChange={ e =>  setEmail(e.target.value)} placeholder='Email' className='user-input'>
                                
                            </input>
                            <input type='password' onChange={ e => setPassword(e.target.value)}  placeholder='Password' className= 'password-input'>

                            </input>
                            <input type='password' onChange={ e => setConfirmedPassword(e.target.value)}  placeholder='Confirm Password' className= 'password-input'>

                            </input>
                            
                                <GoogleReCaptcha onVerify={onVerifyCaptcha} />
                            
                            
                            <input type='submit' value='Sign Up' className='login-btn'></input>
                            <p className='err-message'>{errMsg}</p>
                        </form>
                    </div>
                </div>
            </GoogleReCaptchaProvider>
        </div>
    )
}

export default Signup;