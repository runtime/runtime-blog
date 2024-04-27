import {
    Box,
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
    })
    return (
        <Box>
            <Typography variant="h6" color="primary" component="a" className='post-list title'>
               moar...
            </Typography>
            <ImageList sx={{ width: 'auto', height: {
                xs: 'auto', sm: 'auto', md: '160px', lg: '160px', xl: 'auto'
                }}} gap={20} cols={3} >{renderedList}</ImageList>
        </Box>
    )
    // return <div> PostList </div>
}

export default PostList;