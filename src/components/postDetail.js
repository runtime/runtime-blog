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
const PostDetail = ({post}) => {
    if (!post) {
        return <CircularProgress color="primary"/>
    }
    //const postSrc = `https://www.youtube.com/embed/${post.id.postId}`;


    return (

        <Grid container direction="column">

            <Grid item>
                <Grid container direction="row">
                    <Grid item >
                        <Image
                            width='100%'
                            fit='contain'
                            className='post-detail img'
                            src={post.media.image}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row">
                    <Grid item xs={12} md={10} lg={10}>
                        <Typography variant="h5" color="primary" component="a" className='post-detail title'>
                            {post.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                        <Chip
                            size='medium'
                            position='relative'
                            label={post.tags}
                            variant="filled"
                            color='primary'
                            pointerEvents= 'none'
                            sx={{ transitionDuration: '0.3s', transitionProperty: 'all', transitionTimingFunction: 'linear', opacity: { xs: 0, sm: 0.8, lg: 0.8}}}

                        />
                        <Typography
                            variant="h6"
                            position='absolute'
                            color='textSecondary'
                            noWrap
                            pointerEvents= 'none'
                            alignItems= 'right'
                            justifyContent= 'right'
                             sx={{ paddingLeft: 1, display: { xs: 'none', sm: 'inline', lg: 'inline'}}}
                         >
                            {post.client}
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



