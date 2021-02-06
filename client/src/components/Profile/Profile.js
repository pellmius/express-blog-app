import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const params = useParams();
    const [msg,setMsg] = useState();
    const [username,setUsername] = useState();
    const [followers,setFollowers] = useState();
    const [dateJoined,setDateJoined] = useState();
    useEffect( () => {
        axios.get(`http://localhost:8000/api/users/${params.user}`)
        .then((response) =>{
            console.log(response.data)
            if(response.data.success === true){
                const userObj = response.data.user[0]
                setUsername(userObj.username);
                setFollowers(userObj.followers);
                setDateJoined(userObj.date_joined);  
            } else {
                setMsg(response.data.msg)
            }
            
        })
    }, [])
    
    return (
        <div className='profile-container'>
            <h2 id='profile-username'>{username}</h2>
            <p id='profile-followers'> Followers: {followers}</p>
            <p id='profile-date-joined'>Joined: {dateJoined}</p>
            {msg}
        </div>
    )
}

export default Profile; 