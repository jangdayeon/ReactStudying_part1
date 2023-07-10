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

        <h4 onClick={()=>{ 
          modal =='열림'? setModal('닫힘'):setModal('열림');
          }}>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {
        modal == '열림'? <Modal/> : '아님'
      }

      <div>
        <h1 style={{color:'red'}}>총 정리</h1>
        <h3>
          
        </h3>
        <hr style={{width:'100px', height:'5px',backgroundColor:'black'}}></hr>
        
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
