import {
    ImageList,
    ImageListItem, Typography
} from '@mui/material';
import { theme } from "@mui/material/styles";
import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, onPostSelect, theme }) => {
    console.log('[PostList] posts : ', posts);
     const renderedList = posts.map((post) => {
          return <PostItem key={post.itemId} onPostSelect={onPostSelect} post={post} />
    //     return (
    //         <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
    //             {posts.map((post) => (
    //                 <ImageListItem key={post.itemId} onClick={onPostSelect} post={post}>
    //                     <img
    //                         srcSet={`${post.media.thumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
    //                         src={`${post.media.thumb}?w=164&h=164&fit=crop&auto=format`}
    //                         alt={post.title}
    //                         loading="lazy"
    //                     />
    //                 </ImageListItem>
    //             ))}
    //         </ImageList>
    //     );
    })




    return (
        // <Typography>
        //     <h1>Case Studies</h1>
        // </Typography>
        <ImageList className="ui relaxed divided list">{renderedList}</ImageList>

    )
    // return <div> PostList </div>
}

export default PostList;