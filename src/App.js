import logo from './logo.svg';
import './App.css'; //import 하는 방법
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; //let , var , const

  //리액트에서는 자료를 잠깐 저장하고 싶을 때 위와 같은 자료형을 쓸 수도 있지만, react에서는 state라는 자료형이 따로 있다.
  let [a,b]=useState('남자 코트 추천'); //[a,b]는 js의 Destructuring 문법->코드 맨 아래 참고
  //a는 state에 보관했던 자료가 나오고, b는 state 변경도와주는 함수
  //state 사용법
  //1. import {useState}
  //2. useState(보관할 자료)
  //3. let[작명,작명]

  let [logo, setLogo] = useState('ReactBlog');
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div> 
        <h1 style={{color:'red'}}> 총 정리 </h1>
        <h2>
          자주 변경될 것 같은 html 부분은 state로 만들어 놓기
        </h2>
      </div>
    </div>

    
  );
  //return()안에는 병렬로 태그 2개 이상 기입 금지

}

/////////////////////////////////////////////////////////

//[참고] Destructuring 문법

//let num = [1,2];
// let a = num[0];
// let b = num[1];
//위와 같이 인덱스를 이용하여 변수에 값을 저장할 수도 있지만,
//let [a,b] =[1,2];
//위와 같이도 저장할 수 있다. 결과는 같다. 

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

// let이 아니라 state 변수를 사용하는 이유?

// 코드가 돌아가고 있는 중에 변수값이 변경되면 let같은 경우는 바뀐 값으로 바로 반영되지 않는다는 문제가 생긴다.
//이러한 문제를 state가 해결해줌. 따로 처리를 해주지 않아도 >>자동 재렌더링<<을 통해 html을 처리해주기 때문이다.
//즉, state는 변동시 자동으로 html에 반영되게 만들고 싶을 때 사용해라.

/////////////////////////////////////////////////////////
export default App;
