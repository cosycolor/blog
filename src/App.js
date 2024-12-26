<<<<<<< HEAD
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, titleChange] = useState(['남자코트 추천','강남 우동 맛집','파이썬독학']);
  let [like, plusLike] = useState(0);

  function addLike(){
    plusLike(like + 1);
  }

  function changeTitle(){
    let copy = [...title];
    copy[0] = '여자';
    titleChange(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
      <button onClick={ changeTitle }>edit </button>
      <div className = "list">
        <h4>{title[0]} <span onClick={ addLike }>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <hr></hr>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       
>>>>>>> 19c9084973e9e1e808b65f9ce3d321778a4a3445
    </div>
  );
}

export default App;
