import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './component/Home'
import ForumDetail from './component/ForumDetail'

import './App.css';

const PageStyle = {padding: '2px 20% 40px 20%'};
const App = () => {
  return (
    <div>
      {
        <BrowserRouter>
        <div>
          <div style = {PageStyle}> 
            <Route path="/" exact component ={Home}></Route>
            <Route path="/forumDetail" exact component ={ForumDetail}></Route>
          </div>
        </div>
        </BrowserRouter>
      } 
    </div>
  );
};

export default App;
