import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import {Button, Card, CardContent, Typography, CardActions, Container} from '@material-ui/core';

const PostDetails = () => {
    let {postDetails} = useParams();

    const [posts, setPostDetails] = useState({});
    const [comment, setComment] = useState([]);
    const [userImg, setUserImg ] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetails}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetails(data))
    })
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postDetails}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, []);
    

    return (
        <Container maxWidth="md">
        <Card className = "card" variant="outlined">
            <CardContent>
                <Typography variant="h4" component="h1">
                    {posts.title}
                </Typography>

                <Typography variant="body2" component="p">
                    {posts.body}
                <br />
                </Typography>
                <p><strong>Comment</strong></p>
                <hr/>
            </CardContent>
            
            {
               comment.map(cmt => <Comment comment={cmt} ></Comment>) 
            }
            
        </Card>
    </Container>
    );
};

export default PostDetails;