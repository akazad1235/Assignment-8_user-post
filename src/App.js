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
import NotMatch from './Components/NotMatch/NotMatch';

function App() {
  return (
    <div >
      
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/postDetails/:postDetails">
            <PostDetails/>
          </Route>
          <Route exact path="/">
          <Home/>
        </Route>
          <Route path="*">
         <NotMatch></NotMatch>
        </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
