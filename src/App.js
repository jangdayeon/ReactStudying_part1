/* eslint-disable */

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {

  let logo = "ReactBlog";
  let [a,제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState('닫힘'); 
  

  function 함수(){
    let copy = [...a];
    copy.sort();
    제목변경(copy);
  }
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>

      <br></br>
      <button style={{backgroundColor:'grey'}} onClick={함수}>제목 변경</button>
      {a.map(function(글데이터,i){
        return(
          <div className="list" key={i}>
        <h4 onClick={()=>{ 
          modal =='열림'? setModal('닫힘'):setModal('열림');
          }}>{글데이터}  <span onClick={()=>{ let copy = [...따봉]; copy[i]+=1; 따봉변경(copy)}}>❤️</span> {따봉[i]} </h4> 
        {/* <h4>{a[i]} </h4> */}
        <p>2월 17일 발행</p>
        </div>
        )
      })}
      {
        /////////////////////////////////////////////
        modal == '열림'? <Modal 글제목={a} color={'skyblue'} 글제목변경={제목변경}/> : '아님'
        /////////////////////////////////////////////
      }

      <div>
        <h1 style={{color:'red'}}>총 정리</h1>
        부모 컨퍼넌트(app)는 자식 컨퍼넌트(modal)에게 데이터(state)를 보낼 수 있음. 그 방법이 prop임! <br></br>
        반대와 동일레벨 안됨 (패륜전송 불륜전송 안됨 ㅋㅋㅋㅋ) <br></br>
        <h3>
          부모에서 자식에게 state 전송하는 방법<br></br>
          1. {'<자식컴포넌트 작명={state이름}>'}<br></br>
          2. props 파라미터 등록 후 props.작명 사용
        </h3>
        <h4>
          
        </h4>
        <hr style={{width:'100px', height:'5px',backgroundColor:'black'}}></hr>
        
      </div>
    </div>
    
  );
  

}
////////////////////////////////////////////////////////////
function Modal(props){
  return ( 
    <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{props.글제목변경(['여자코트 추천','강남 우동맛집','파이썬독학'])}}>글수정</button>
      </div>
  )
}
////////////////////////////////////////////////////////////

export default App;
