import React, {useEffect} from 'react';
import './Home.css';
import axios from 'axios';
const Home = () => {
    return(
      <div className='home'>
        <div className='posts-container'>
          <h2 className='posts-title'>Posts</h2>
        </div>
        
        <div className='ads-container'>
          <div className='ad'></div>
          <div className='ad'></div>
        </div>

      </div>  
    )
    
}

export default Home