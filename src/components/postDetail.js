import './PostDetail.css';
import React from 'react';
import {
    Box,
    CircularProgress,
    Chip,
    Grid,
    CardHeader,
    Container,
    Card,
    CardContent,
    styled,
    Typography,
    alpha
} from "@mui/material";
import { Image } from 'mui-image'
import PostList from "./PostList";
const PostDetail = ({post}) => {
    if (!post) {
        return <CircularProgress color="primary"/>
    }
    //const postSrc = `https://www.youtube.com/embed/${post.id.postId}`;


    return (

        <Grid container direction="column">
            {/*page header, tags & client*/}
            <Grid item>
                <Box sx={{marginTop: {xs: 4, sm: 8, md: 8, lg:8}}}>
                    <Grid container direction="row">
                        <Grid item xs={8} sm={8} md={9} lg={10}>
                            <Typography variant="h6" color="primary" component="a"
                                sx={{display: { xs: 'none', sm: 'block'}}}
                            >
                                Case Studies
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} lg={2}>
                            <Chip
                                size='small'
                                position='relative'
                                label={post.tags}
                                variant="filled"
                                color='primary'
                                pointerEvents= 'none'
                                sx={{marginTop: '3px', transitionDuration: '0.3s', transitionProperty: 'all', transitionTimingFunction: 'linear', opacity: { xs: 0, sm: 0.8, lg: 0.8}}}

                            />
                            <Typography
                                variant="body1"
                                position='absolute'
                                color='textSecondary'
                                noWrap
                                pointerEvents= 'none'
                                alignItems= 'center'
                                justifyContent= 'center'
                                sx={{ marginTop: '3px', paddingLeft: 1, display: { xs: 'none', sm: 'inline'}}}
                            >
                                {post.client}
                            </Typography>
                        </Grid>
                        </Grid>

                        {/*banner image*/}
                        <Grid container direction="row">
                            <Grid item >
                                <Image
                                    width='100%'
                                    fit='cover'
                                    className='post-detail img'
                                    src={post.media.image}
                                    sx={{ maxHeight: { xs: '95%', sm: '95%', lg: '97%'}, marginTop: { xs: '0px', sm: '4px', md: '0px', lg: '16px'}}}
                                />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/*page content*/}
            <Grid item>
                <Grid container direction="row">
                    <Grid item xs={12} md={10} lg={10}>
                        <Typography
                            variant="h5"
                            color="primary"
                            component="a"
                            className='post-detail title'>
                            {post.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="subtitle1" color="textSecondary" align='left' component="a">
                            {post.subtitle}
                        </Typography>
                        <Typography className='post-detail desc' variant="body1" color="textSecondary" align='left' component="a">
                            {post.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    )
}

export default PostDetail;



