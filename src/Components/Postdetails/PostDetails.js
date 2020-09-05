import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const{postDetails} = useParams();

    const[posts, setPostDetails] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetails}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetails(data))
    })
    
    return (
        <div>
            <p>Post details:{postDetails} </p>
             <h1>{posts.title}</h1>
             <p>{posts.body}</p>
            <p>{posts.id}</p>
            <p>{posts.userId}</p>
        </div>
    );
};

export default PostDetails;