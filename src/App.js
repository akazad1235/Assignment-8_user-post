import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './Components/Post/Post';
import PostDetails from './Components/Postdetails/PostDetails';

function App() {
  return (
    <div >
      
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post">
            <Post></Post>
          </Route>
          <Route path="/post/:postDetails">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="*">
            
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
