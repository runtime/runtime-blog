import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, onPostSelect }) => {
    //console.log(posts);
    const renderedList = posts.map((post) => {
        return <PostItem key={post.id.postId} onPostSelect={onPostSelect} post={post} />
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default PostList;