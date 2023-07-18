/* eslint-disable */

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {

  let logo = "ReactBlog";
  let [a,제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState('닫힘'); 
  let [title,setTitle] = useState(0);
  

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
          ////////////////////////////////////////////글제목을 누를 때마다 title이 재설정 되도록!
          setTitle(i); 
          ////////////////////////////////////////////
          modal =='열림'? setModal('닫힘'):setModal('열림');
          }}>{글데이터}  <span onClick={()=>{ let copy = [...따봉]; copy[i]+=1; 따봉변경(copy)}}>❤️</span> {따봉[i]} </h4> 
        {/* <h4>{a[i]} </h4> */}
        <p>2월 17일 발행</p>
        </div>
        )
      })}
      {
        /////////////////////////////////////////////
        modal == '열림'? <Modal 글제목={a} color={'skyblue'} title={title}/> : '아님'
        /////////////////////////////////////////////
      }

      <div>
        <h1 style={{color:'red'}}>총 정리</h1>
        modal의 제목이 글제목을 누를 때마다 변경된 값이 출력되도록 하는 방법을 다루었다.<br></br>
        <h3>
          useState를 이용해서 새로운 변수를 만들고, 그 변수의 값이 글제목을 누를 때마다 변경하게 만듦.<br></br>
          그리고 그 변경된 값을 자식함수로 넘겨주면 된다.<br></br>
        </h3>
        <h4>
          (중요) state 만드는 곳은 state 사용하는 컴포넌트들 중 최상위 컴포넌트
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
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{props.글제목변경(['여자코트 추천','강남 우동맛집','파이썬독학'])}}>글수정</button>
      </div>
  )
}
////////////////////////////////////////////////////////////

export default App;
