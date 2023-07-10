/* eslint-disable */

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {
  let logo = "ReactBlog";
  let [a,제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  
  // function 함수(){
  //   a[0] = '여자코트 추천';
  //   제목변경(a);
  // }
  //위처럼 작성하는 것보다 >>기존값을ㅇ 보존해주는 식으로 코드짜는 게 좋은 관습임!!!
  // 왜냐하면 원본 막 바꿔버렸을 때 갑자기 원본이 필요할 수도 있기 때문!
  // function 함수(){
  //   let copy = a;
  //   copy[0] = '여자코트 추천';
  //   제목변경(copy);
  // }
  // 위의 함수가 실행은 되나 값이 변경이 되지 않는 이유!!!!!!
  // js는 데이터를 가리키는 >>화살표<<가 같으면 같은 값이라고 인식하기 때문!! (=같은 걸 참조하기 때문에 값 변경이 안되었다고 생각함)
  //그렇기 때문에 let copy = [...글제목]; 를 통해 괄호를 지웠다가 다시 생성해주어야 됨!!!
  //아래가 그에 대한 답!
  function 함수(){
    let copy = [...a];
    copy[0] = '여자코트 추천';
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
        <h1> 이번 수업은 '제목 변경' 버튼을 누르면 남자코트 추천이 여자코트 추천으로 바뀌는 실습을 진행함</h1>
        <h1 style={{color:'red'}}>총 정리</h1>
        <h3>
          1. state가 array or object면 독립적 카피본을 만들어서 수정해야 한다.<br></br>

        </h3>
      </div>
    </div>
    
  );
  

}

export default App;
