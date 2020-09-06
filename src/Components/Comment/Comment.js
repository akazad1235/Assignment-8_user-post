import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  
  grow: {
    flexGrow: 1,
  },
  
}));

const Comment = (props) => {
  const classes = useStyles();
  // console.log(props);

    const {name, id, body } = props.comment
    
 console.log('this is', id);
    return (
          <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>

        <List className={classes.list}>
         
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar  src={`https://loremflickr.com/320/240?lock=${id}`} alt="img" />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={body} />
              </ListItem>
            </React.Fragment>
         
        </List>
      </Paper>
   
    </React.Fragment>
 
    );
};

export default Comment;