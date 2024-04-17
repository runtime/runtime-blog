import React from 'react';

const PostDetail = ({post}) => {
    if(!post) {
       return <div>loading...</div>
    }

    //const postSrc = `https://www.youtube.com/embed/${post.id.postId}`;

    return(
        <div>
            {/*<div className="ui embed">*/}
            {/*    <iframe title="post player" src={postSrc} />*/}
            {/*</div>*/}
            <div className="ui segment">
                <p></p>
                <img src='https://placekitten.com/g/300/100'/>
                <h4 className="ui header">{post.title}</h4>
                <p className="ui body" >{post.body}</p>
                <p></p>
            </div>
        </div>
    )

}

export default PostDetail;



