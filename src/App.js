import React, { useState, Component } from 'react';
import './App.css';
import GridTesting from './components/GridTesting';
import GridTesting2 from './components/GridTesting2';
import Home from './components/Home';
import Cares from './components/Cares';
import SignIn from './components/SignIn';
import CareProfile from './components/CareProfile';
import Manual from './components/Manual';
import axios from 'axios';
import {
   Route,
   Switch,
   Link,
   BrowserRouter as Router
} from 'react-router-dom';

function App() {

  // let [photos, setPhotos] = useState([]);
  // function searchApi(){
  //   const url = "https://jsonplaceholder.typicode.com/photos";
  //   axios.get(url)
  //   .then(function(response){
  //     setPhotos(response.data);
  //     console.log("성공");
  //   })
  //   .catch(function(error){
  //     console.log("실패");
  //   })
  // }

  // if(photos.length > 0){
  //   return(
  //     photos.map(photo => (
  //       (photo.id < 10) ? (
  //         <div key = {photo.id}>
  //           <img src = {photo.thumbnailUrl} alt = "img"/>
  //           <p>title : {photo.title}</p>
  //         </div>)
  //         :null
  //     ))
  //   );
  // }else{
  //   return(
  //     <div>
  //       <button onClick = {searchApi}>불러오기</button>
  //       </div>
  //   )
  // }
  
  return (
    <div className="App">
      <Router>
          <ul>          
            <Link to = '/'><li>Home</li></Link>
            <Link to = '/GridTesting'><li>공고 등록하기</li></Link>
            <Link to = '/GridTesting2'><li>프로필 작성하기</li></Link>
            <Link to = '/Cares'><li>케어 구하기</li></Link>
            <Link to = '/SignIn'><li>회원가입</li></Link>
            <Link to = '/CareProfile'><li>케어프로필</li></Link>
            <Link to = '/Manual'><li>이용안내</li></Link>
          </ul>

          <Switch>
            <Route path = '/GridTesting' component = {GridTesting}/>
            <Route path = '/GridTesting2' component = {GridTesting2}/>
            <Route path = '/Cares' component = {Cares}/>
            <Route path = '/SignIn' component = {SignIn}/>
            <Route path = '/CareProfile' component = {CareProfile}/>
            <Route path = '/Manual' component = {Manual}/>
            <Route exact path = '/' component = {Home}/>
            
          </Switch>
            

      </Router>

    </div>
  );
}

export default App;
