import React, {useEffect, useState} from 'react';
import Post from './Post';
import axios from 'axios';
import './Home.css';



const Home = () => {
  let [recentPosts,setRecentPosts] = useState([]);
  let [pinnedPosts,setPinnedPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/recent')
    .then(response => {
      let postsList = response.data;
      setRecentPosts(postsList);

    });

    axios.get('http://localhost:8000/api/posts/pinned')
    .then(response => {
      let postsList = response.data;
      setPinnedPosts(postsList);
    })

  }, [])

  return(
    <div className='home'>
      <div className='posts-container' id='recent-posts-container'>
        <h2 className='posts-title'>Frontpage Posts</h2>
        {pinnedPosts.map(post => {
          return <Post key = {post._id} id = {post._id} title={post.title} content={post.content.slice(' ', 120)} author = {post.author} date_posted={post.date_posted}/>;
        })}
      </div>

      <div className='posts-container' id='recent-posts-container'>
        <h2 className='posts-title'>Recent Posts</h2>
        {recentPosts.map(post => {
          return <Post key = {post._id} id = {post._id} title={post.title} content={post.content.split(' ', 3)} author = {post.author} date_posted={post.date_posted}/>;
        })}
      </div>
        
      <div className='ads-container'>
        <div className='ad'></div>
        <div className='ad'></div>
      </div>

    </div>  
  )
    
}

export default Home