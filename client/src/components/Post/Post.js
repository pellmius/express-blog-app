import React from 'react';
import './Post.css';

const Post = props => {
    const postID = props.location.pathname.slice('/posts/'.length,props.location.pathname.length)
    return(
        <div>
            Post ID: {postID}
        </div>
    )
}

export default Post;