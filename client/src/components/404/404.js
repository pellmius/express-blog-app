import React, { useEffect } from 'react';
import './404.css';
import icon404 from './404.png';
import { useLocation } from 'react-router-dom';
const Http404 = () => {
    const location = useLocation();
    // useEffect(() =>{
    //     document.body.style.overflow = 'hidden';
    // })
    return(
        <>
            <div id='container-404'>
                <img id='icon-404' src={icon404} alt='404 Icon'></img>
                <h2>Oops! Looks like we found no match for your URL</h2>
                <p>The URL {location.pathname} is not available</p>
            </div>

            <div id='footer-404'>
                aaaaa
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 
            </div>
        </>
    )
}

export default Http404;