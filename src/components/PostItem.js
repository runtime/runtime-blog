import './PostItem.css';
import React from 'react';

const PostItem = ({post, onPostSelect}) => {
    console.log(post);
    return (
        <div onClick={()=>{onPostSelect(post)}} className="post-item item">
            {/*<img className="ui image" alt={post.title} src={post.snippet.thumbnails.medium.url} />*/}
            <div className="content">
                <div className="post-item">{post.title}</div>
                {/*<div className="post-item desc">{post.body}</div>*/}
                {/*<div>PostItem</div>*/}
            </div>

        </div>

    )
}

export default PostItem;