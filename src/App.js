/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, titleChange] = useState(['남자코트 추천','강남 우동 맛집','파이썬독학']);
  let [like, plusLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [number, setNumber] = useState(0);
  

  function addLike(e){
    let copy = [...like];
    copy[e] = copy[e] + 1;
    plusLike(copy);
  }

  function changeTitle(){
    let copy = [...title];
    copy[0] = '여자코트 추천';
    titleChange(copy);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
      {/* <button onClick={ () => {} }>edit </button> */}
      {
        title.map(function(t, i){
          return (
            <div className = "list" key={i}>
              <h4  onClick={() => {setModal(!modal); setNumber(i)}}>
                {title[i]} <span onClick={ (e) => {e.stopPropagation(), addLike(i)} }>👍</span> {like[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>)
        })
      /* onClick 이벤트 파라미터 전달 시 () => 함수이름, 파라미터 없을 시 그냥 함수이름 이렇게 해야하는건지? 
      ()=>{} 이렇게 호출하는거와 단순 function 이름으로 호출하는 경우의 차이는 뭔지*/}
      <hr></hr>
      {
                  //props으로 부모 -> 자식 파라미터 전달, 함수, state, 변수 다양하게 전달 가능
                  modal == true ? <Modal titleChange = {titleChange} title = {title} number = {number}/> : null
      } 
    </div>
  );
}

function Modal(props){
  return (
    <div className = "modal" style={{background : props.color}}>
        <h4>{props.title[props.number]}</h4>
        <p>date</p>
        <p>body</p>
        <button onClick={() => {props.titleChange(['여자코트변경', '서초 우동맛집', '자바독학'])}}>제목 변경</button>
    </div>
  );
}
export default App;
