import React from 'react';
import {Button, Card, CardContent, Typography, CardActions, Container} from '@material-ui/core'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { makeStyles } from '@material-ui/core/styles';
import './Post.css'



const Post = (props) => {

    const{title, body, id} = props.post
     return (
    //     <div>
    //         <h3>title: {title}</h3>
    //         <p>{body.slice(0,10)}</p>
    //         <p>id: {id}</p>
            
    //      {/* <Button variant="contained" color="primary"> more-info </Button> */}
    //  <p><Link to={`/postDetails/${id}`}>More-info{id}</Link></p>
    //     </div>
    <Container maxWidth="md">
        <Card className = "card" variant="outlined">
            <CardContent>
                <Typography variant="h4" component="h1">
                {title}
                </Typography>

                <Typography variant="body2" component="p">
                {body.slice(0, 150)}
                <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                  <Link to={`/postDetails/${id}`}>Read More</Link>
                </Button>
            </CardActions>
        </Card>
    </Container>
    );
};

export default Post;