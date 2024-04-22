import {
    TextField,
    Button,
    Typography,
    Box
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
        <Box>
            <div className='ui container'>
                <Typography variant="h4">
                    runtime blog
                </Typography>
            </div>
            <div className='ui container'>
                <SearchBar onSearchSubmit={search}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            {<PostDetail post={currPost}/>}
                        </div>
                        <div className="five wide column">
                            <PostList
                                //onPostSelect={onPostSelect}
                                // shorthand the onPostSelect Function to remove extra function
                                onPostSelect={setCurrPost}
                                posts={posts}/>
                        </div>
                    </div>
                </div>
            </div>

        </Box>

    );
}


export default App;

