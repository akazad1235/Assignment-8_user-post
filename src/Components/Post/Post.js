import React from 'react';
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Post = (props) => {
    const{title, body, id} = props.post
     return (
        <div>
            <h3>title: {title}</h3>
            <p>{body.slice(0,10)}</p>
            <p>id: {id}</p>
            
         {/* <Button variant="contained" color="primary"> more-info </Button> */}
     <Link to={`/postDetails/${id}`}>More-info{id}</Link>
        </div>
    );
};

export default Post;