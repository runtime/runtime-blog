import './PostItem.css';
import React from 'react';

const PostItem = ({ post, onPostSelect}) => {
    console.log(post);
    return (
        <div onClick={()=>{onPostSelect(post)}} className="post-item item">
            <img className="ui image" alt={post.snippet.title} src={post.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{post.snippet.title}</div>
            </div>

        </div>

    )
}

export default PostItem;