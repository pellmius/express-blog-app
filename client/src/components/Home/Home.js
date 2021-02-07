import React, {useEffect} from 'react';
import {FaPlusSquare, FaMinusSquare} from 'react-icons/fa';
import './Home.css';
import axios from 'axios';
const Home = () => {

    const togglePostView = e => {
      let contentToToggle = e.target.parentNode.parentNode.querySelector('.post-content') || e.target.parentNode.parentNode.parentNode.querySelector('.post-content');
      let buttonToToggle = e.target;
      console.log(e.target)
      if(contentToToggle != null) {
        if(contentToToggle.style.display == 'none') {
          contentToToggle.style.display = 'block';
        } else {
          contentToToggle.style.display = 'none';
        }  
      } 
      
    }

    return(
      <div className='home'>
        <div className='posts-container'>
          <h2 className='posts-title'>Relevant Posts</h2>
          <div className='post'>

          </div>
          <div className='post'>
            <div className='post-title-container'>
              <h3 className='post-title'>My first Test</h3>
              <FaPlusSquare className='btn-toggle' onClick={togglePostView}/>
              
            </div>
            
            <p className='post-content'>This is my first test post for CSS. </p>
          </div>
          <div className='post'></div>
          <div className='post'></div>

        </div>
        
        <div className='ads-container'>
          <div className='ad'></div>
          <div className='ad'></div>
        </div>

      </div>  
    )
    
}

export default Home