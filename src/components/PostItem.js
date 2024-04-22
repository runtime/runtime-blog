import './PostItem.css';
import React from 'react';
import {ImageListItem} from "@mui/material";

const PostItem = ({post, onPostSelect}) => {
    console.log('[PostItem] post: ', post);
    return (
            <ImageListItem key={post.itemId} onClick={()=>{onPostSelect(post)}}>
                <img
                    srcSet={`${post.media.thumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${post.media.thumb}?w=164&h=164&fit=crop&auto=format`}
                    alt={post.title}
                    loading="lazy"
                />
            </ImageListItem>
        // <div onClick={()=>{onPostSelect(post)}} className="post-item item">
        //     <img className="ui image" alt={post.title} src={post.media.thumb} />
        //     <div className="content">
        //         <div className="post-item title">{post.title}</div>
        //         {/*<div className="post-item tags">{post.tags}</div>*/}
        //         {/*<div>PostItem</div>*/}
        //     </div>
        // </div>


    )
}

export default PostItem;


//////





//////
