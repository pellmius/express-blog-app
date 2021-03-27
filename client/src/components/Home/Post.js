import React, { useEffect } from 'react';
import {FaPlusSquare} from 'react-icons/fa';

const Post = props => {
    
    

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

    return (
        <div className='post'>
            <div className='post-title-container'>
              <h3 className='post-title'>{props.title} </h3>
              <p className='post-author'> {props.author}</p>
              <p className='post-date'>{props.date_posted}</p>
              <FaPlusSquare className='btn-toggle' onClick={togglePostView}/>
              
            </div>
            <p className='post-content'>{props.content} </p>
            <a style={{textDecoration: 'none', color: 'grey'}} href={`/posts/${props.id}`} className='post-content'><h2>[...] </h2> </a>
        </div>
    )
}

export default Post;