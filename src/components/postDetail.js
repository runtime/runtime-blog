import React from 'react';

const PostDetail = ({post}) => {
    if(!post) {
       return <div>loading...</div>
    }

    const postSrc = `https://www.youtube.com/embed/${post.id.postId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe title="post player" src={postSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{post.snippet.title}</h4>
                <p>{post.snippet.description}</p>
            </div>
        </div>
    )

}

export default PostDetail;



