/* eslint-disable */

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {
  let logo = "ReactBlog";
  let [a,제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  ///////////////////////////////////////////////////////////////
  let [modal, setModal] = useState('닫힘'); //modal, set --이 관습 , 모달창상태 표현 형식은 자유!
  ///////////////////////////////////////////////////////////////

  function 함수(){
    let copy = [...a];
    copy.sort(); //이 코드가 답! 배열 정렬하는 코드이다.
    제목변경(copy);
  } 

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{a[0]} <span onClick={()=>{따봉변경(따봉+1)}}>❤️</span> {따봉} </h4>
        <button style={{backgroundColor:'grey'}} onClick={함수}>제목 변경</button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">

        {/* <h4 onClick={()=>{ modal = '열림';}}>{a[2]}</h4> 이 코드는 틀린 코드! setModal을 이용해서 값 변경해야지 눌러서 값이 변경되는 게 실행됨*/}
        <h4 onClick={()=>{ setModal('열림');}}>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {/* ////////////////////////////////////////////// */}
      {
        // JSX 안에서는 if else 문법을 사용할 수 없다. 대신 삼항연산자라는 건 JSX 중괄호 안에서 사용가능하다.
        //조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
        modal == '열림'? <Modal/> : '아님'
      }
      {/* ////////////////////////////////////////////// */}

      <div>
        <h1 style={{color:'red'}}>총 정리</h1>
        <h3>
          1. 제목누르면 {'<Modal>'}창이 보이도록 하려면? <br></br>
          [동적인 UI 만드는 step]<br></br>
          1. html css로 미리 디자인 완성<br></br>
          2.UI의 현재 상태를 state로 저장<br></br>
          3.state에 따라 UI가 어떻게 보일지 작성<br></br>
        </h3>
        <hr style={{width:'100px', height:'5px',backgroundColor:'black'}}></hr>
        <h3>
          2. 정신 개조가 필요함 ㅎㅎ<br></br>
          ~~ 리액트에선 버튼누르면 모달창 스위치만 건드림<br></br>
          ~~ 그냥 자바스크립트였으면 버튼누르면 모달창 html을 직접 건드림<br></br>
        </h3>
      </div>
    </div>
    
  );
  

}

function Modal(){
  return ( 
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
