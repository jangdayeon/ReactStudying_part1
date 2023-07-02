//ERROR는 에러라 중요, WARNING은 무시 가능
/* eslint-disable */ //Lint 끄는 기능임 ( Lint는 warning 메시지 뜨도록 해주는 것 )

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {
  let logo = "ReactBlog";
  let [a,b] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  function 함수(){
    // console.log(1);
    // 따봉 = 따봉 + 1 이렇게 작성하면 안됨 !!!!
    // 그 이유는, 따봉은 변수가 아니라 state이기 때문임
    // state는 state변경함수를 써서 state를 변경해야 함!! -> 안그러면 html 재렌더링 안됨
    따봉변경(따봉+1); //함수라서 이런식으로 사용해야 함
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>
      <div className="list">
        {/* onClick 이벤트 핸들러 사용하는 방법 -> onClick={함수}*/}
        <h4>{a[0]} <span onClick={함수}>❤️</span> {따봉} </h4>
        {/* 함수가 아니라 그냥 console.log(1);을 넣으면 안됨! 무조건 함수를 넣어야 함 */}
        {/* 단, function(){ console.log(1) } 은 됨!*/}
        {/* 혹은, () => {console.log(1)} 도 됨! */}
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
        <h1 style={{color:'red'}}>총 정리</h1>
        <h3>
          1. onClick 쓰는 법 -{'>'} onClick={'{}'} 안에 함수넣어야 함<br></br>
          2. state 변경하는 법 -{'>'} 항상 state 변경함수 쓰세요 -{'>'} state변경함수(새로운state)
        </h3>
      </div>
    </div>
    
  );
  

}

export default App;
