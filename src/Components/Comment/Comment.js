import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const Comment = (props) => {
  const classes = useStyles();
  // console.log(props.comment);

    const {name,id, body } = props.comment
  
 
    return (
        <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>

        <List className={classes.list}>
         
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src="" alt="img" />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={body} />
              </ListItem>
            </React.Fragment>
         
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
    );
};

export default Comment;