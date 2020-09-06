import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const{postDetails} = useParams();

    const[posts, setPostDetails] = useState({});
    const[comment, setComment] = useState([]);

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
        <div>
            <p>Post details:{postDetails} </p>
             <h1>{posts.title}</h1>
             <p>{posts.body}</p>
            <p>{posts.id}</p>
            <p>{posts.userId}</p>
            <p>Comment name:</p>
            {
                comment.map(cmt => <Comment comment={cmt}></Comment>)
            }
            
        </div>
    );
};

export default PostDetails;