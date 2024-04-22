import './PostDetail.css';
import React from 'react';
import {Box, CircularProgress, Chip, Grid, CardHeader, Container, Card, CardContent, Typography} from "@mui/material";

const PostDetail = ({post}) => {
    if(!post) {
       return <CircularProgress color="success" />

    }

    //const postSrc = `https://www.youtube.com/embed/${post.id.postId}`;

    return(
            <Container maxWidth="md" component="main">

                <Card>
                    <img className="post-detail img" alt={post.title} src={post.media.image}/>
                    <CardHeader
                        title={post.title}
                        subheader={post.subtitle}
                        titleTypographyProps={{ align: 'left' }}
                        subheaderTypographyProps={{
                            align: 'left',
                        }}
                        sx={{
                            backgroundColor: '0xFF8800'
                        }}

                    />



                    <CardContent>
                            <Typography variant="body2" color="textSecondary" component="h4">
                                {post.client}
                            </Typography>
                            <Chip label={post.tags} variant="filled"/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.description}
                            </Typography>

                    </CardContent>

                </Card>

            </Container>


        //     <Box className="ui grid">
    //         <Box>
    //             <div className="ui embed">
    //                 <iframe
    //                     title="post player"
    //                     src={post.media.video}
    //                 />
    //             </div>
    //             <div className="post-detail "><img alt={post.title} src={post.media.image}/></div>
    //         </Box>
    //
    //         <Box>
    //             <h2 className="post-detail title">{post.title}</h2>
    //             <h4 className="post-detail subtitle">{post.subtitle}</h4>
    //             <p className="post-detail desc">{post.description}</p>
    //             <Chip label={post.tags} variant="filled"/>
    //         </Box>
    //     </Box>
     )

}

export default PostDetail;



