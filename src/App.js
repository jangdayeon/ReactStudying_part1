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

    {/* ////////////////////////////////////////////// */}
      <Modal></Modal>
      {/* 위 코드를 <Modal/> 으로 만 작성해도 된다. */}
    {/* ////////////////////////////////////////////// */}

      <div>
        <h1 style={{color:'red'}}>총 정리</h1>
        <h3>
          1. 글 제목을 누르면 아래 상세페이지가 나오는 것을 구현하였다.(모달창(ui)가 뜨도록 하는 것)<br></br>
          2. componant을 쓰는 이유는 html이 div들로 더러워진 코드에서 어떤 코드인지 직관적인 표현을 위해 쓰인다.<br></br>
          3. 이 컴포넌트를 만드는 법은 1.function 만들고 2.return()안에 html담기 3. {'<함수명></함수명>'} 쓰기<br></br>
          4. 어떤걸 컴포넌트로 만들면 좋은가 1.반복적인 html축약할 때 2. 큰 페이지들 3. 자주변경되는 것들 <br></br>
          5. 컴포넌트의 단점 : state 가져다쓸 때 문제생긴다. ( 다른 함수에 있는 변수를 가져올 때 문제 발생 )
        </h3>
      </div>
    </div>
    
  );
  

}
///////////////////////////////////////////////////////////////////////////////////////////
//컴포턴트 만드는 문법1
function Modal(){
  return ( //유의할 점!! 하나의 태그로 시작하여 하나의 태그로 끝나야함! 태그 병렬 XX
      //의미 없는 <div>을 쓰고 싶지 않을 때, <></>을 사용하여 하나의 태그로 묶을 수 있다.
      //이것을 fragment 문법이라고 한다.
      <>  
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      </>
  )
}
//컴포넌트 만드는 문법2
const Modal2 = () => { //const 자료형을 사용하면 console에 값이 변경될 때 에러문이 발생하여 사용하는 경우가 많음
  return (
    <div></div>
  )
}
///////////////////////////////////////////////////////////////////////////////////////////

export default App;
