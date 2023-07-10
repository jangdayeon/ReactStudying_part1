/* eslint-disable */

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {
  let logo = "ReactBlog";
  let [a,제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  
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
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div>
        <h1> 버튼 누르면 a(글제목)가 가나다순 정렬 기능 만들기</h1>
        <h1 style={{color:'red'}}>총 정리</h1>
        <h3>
          1. state가 array or object면 독립적 카피본을 만들어서 수정해야 한다.<br></br>
          2. 제목변경이 아니라 앞의 인자.sort()를 이용하여 수정해야 한다. 뒤에 꺼는 함수이기 때문!
        </h3>
      </div>
    </div>
    
  );
  

}

export default App;
