import {
    Typography,
    Box, Container, AppBar, Grid
} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, {useState, useEffect} from 'react';
import SearchBar from "./SearchBar";
import PostList from "./PostList";
import PostDetail from "./postDetail";
import usePosts from "../hooks/usePosts";


const App = () => {
    const [currPost, setCurrPost] = useState(null);
    const [posts, search] = usePosts('');

    useEffect(() => {
        setCurrPost(posts[0]);
    }, [posts])

    return (
        <Container>
            <AppBar
                color="secondary" >
                <SearchBar onSearchSubmit={search}/>
            </AppBar>
            <PostDetail post={currPost}/>
            <PostList
                //onPostSelect={onPostSelect}
                // shorthand the onPostSelect Function to remove extra function
                onPostSelect={setCurrPost}
                posts={posts}
            />
        </Container>
    );
}


export default App;

