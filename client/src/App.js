import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/api/posts">Posts</Link>
        <Switch>
          <Route path="/api/posts"><Posts /></Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
