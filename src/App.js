import React, { Component } from 'react';
import './App.css';
import GridTesting from './components/GridTesting';
import GridTesting2 from './components/GridTesting2';
import Home from './components/Home';
import {
   Route,
   Switch,
   Link,
   BrowserRouter as Router
} from 'react-router-dom';

function App() {


  
  return (
    <div className="App">
      <Router>
          <ul>          
            <Link to = '/'><li>Home</li></Link>
            <Link to = '/GridTesting'><li>공고 등록하기</li></Link>
            <Link to = '/GridTesting2'><li>프로필 작성하기</li></Link>
          </ul>

          <Switch>
            <Route path = '/GridTesting' component = {GridTesting}/>
            <Route path = '/GridTesting2' component = {GridTesting2}/>
            <Route exact path = '/' component = {Home}/>
          </Switch>
            

      </Router>

    </div>
  );
}

export default App;
