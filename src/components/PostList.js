import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, onPostSelect }) => {
    console.log('[PostList] posts : ', posts);
    const renderedList = posts.map((post) => {
        return <PostItem key={post.itemId} onPostSelect={onPostSelect} post={post} />
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
    // return <div> PostList </div>
}

export default PostList;