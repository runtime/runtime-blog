import React from 'react';

const PostDetail = ({post}) => {
    if(!post) {
       return <div>loading...</div>
    }

    //const postSrc = `https://www.youtube.com/embed/${post.id.postId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe title="post player" src={post.media.video} />
            </div>
            <div className="ui segment">
                <p></p>
                <img alt={post.title} src={post.media.image}/>
                <h4 className="ui header">{post.title}</h4>
                <p className="ui body" >{post.description}</p>
                <p className="ui body">{post.tags}</p>
                <p></p>
            </div>
        </div>
    )

}

export default PostDetail;



