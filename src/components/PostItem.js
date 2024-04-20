import './PostItem.css';
import React from 'react';

const PostItem = ({post, onPostSelect}) => {
    console.log('[PostItem] post: ', post);
    return (
        <div onClick={()=>{onPostSelect(post)}} className="post-item item">
            <img className="ui image" alt={post.title} src={post.media.thumb} />
            <div className="content">
                <div className="post-item title">{post.title}</div>
                {/*<div className="post-item tags">{post.tags}</div>*/}
                {/*<div>PostItem</div>*/}
            </div>

        </div>

    )
}

export default PostItem;