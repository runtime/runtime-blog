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
            {/*<div><img alt={post.title} src={post.media.image}/></div>*/}
            <div className="ui segment">
                <h4 className="ui title">{post.title}</h4>
                <p className="ui desc" >{post.description}</p>
                <p className="ui tags">{post.tags}</p>
            </div>
        </div>
    )

}

export default PostDetail;



