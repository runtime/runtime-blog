import './PostItem.css';
import React from 'react';
import {ImageListItem} from "@mui/material";

const PostItem = ({post, onPostSelect}) => {
    console.log('[PostItem] post: ', post);
    return (
            <ImageListItem key={post.itemId} onClick={()=>{onPostSelect(post)}}>
                <img
                    srcSet={`${post.media.thumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${post.media.thumb}?w=164&h=164&fit=crop&auto=format`}
                    alt={post.title}
                    loading="lazy"
                />
            </ImageListItem>

    )
}

export default PostItem;


//////

// return(
//     <Card>
//         <img className="post-detail img" alt={post.title} src={post.media.image}/>
//         <CardHeader
//             title={post.title}
//             subheader={post.subtitle}
//
//             titleTypographyProps={{ align: 'left' }}
//             subheaderTypographyProps={{
//                 align: 'left',
//             }}
//             descriptionTypographyProps={{
//                 align: 'right',
//                 variant: 'body2',
//             }}
//             // sx={{
//             //     backgroundColor: '0xFF8800',
//             // }}
//
//         />
//         <CardContent>
//             <Container maxWidth="lg">
//                 <Grid container spacing={5} alignItems="flex-end">
//                     <Grid item xs={12} md={12} lg={12}>
//                         <Typography variant="body2" color="textSecondary" component="h4">
//                             <Chip label={post.tags} variant="filled"/>
//                             {post.client}
//                         </Typography>
//                     </Grid>
//                     {/*<Grid item xs={12} md={4} lg={4}>*/}
//                     {/*  */}
//                     {/*</Grid>*/}
//                     <Grid item xs={12} md={12} lg={12}>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                             {post.description}
//                         </Typography>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </CardContent>
//     </Card>
//  )



//////
