import './PostDetail.css';
import React from 'react';
import {Box, CircularProgress, Tab} from "@mui/material";

const PostDetail = ({post}) => {
    if(!post) {
       return <CircularProgress color="success" />

    }

    //const postSrc = `https://www.youtube.com/embed/${post.id.postId}`;

    return(
        <Box>
            <div className="ui embed">
                <iframe title="post player" src={post.media.video} />
            </div>
            {/*<div><img alt={post.title} src={post.media.image}/></div>*/}
            <div className="ui segment">
                <h4 className="post-detail title">{post.title}</h4>
                <p className="post-detail desc" >{post.description}</p>
                <Tab>{post.tags}</Tab>
            </div>
        </Box>
    )

}

export default PostDetail;



