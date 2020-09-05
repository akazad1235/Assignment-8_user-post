import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    return (
        <div>
            {
                post.map( pst => <Post post={pst}></Post>)
            }
            
        </div>
    );
};

export default Home;