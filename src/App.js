// 과제 : useState를 이용하여 list 출력해보기

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {
  let logo = "ReactBlog";
  let [a,b] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{a[0]}</h4>
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
    </div>

    
  );
  

}

export default App;
