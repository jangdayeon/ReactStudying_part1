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
  let [입력값,입력값변경]= useState('');
  

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
          setTitle(i); 
          
          modal =='열림'? setModal('닫힘'):setModal('열림');
          }}>{글데이터}  
          {/* ///////////////////////////////////////////// */}
          <span onClick={(e)=>{ e.stopPropagation(); let copy = [...따봉]; copy[i]+=1; 따봉변경(copy)}}>❤️</span> {따봉[i]} 
          <span> <button onClick={(e)=>{e.stopPropagation(); let copy = [...a]; copy.splice(i,1); 제목변경(copy);}}>삭제버튼</button></span>
          {/* ///////////////////////////////////////////// */}
          </h4> 
        {/* <h4>{a[i]} </h4> */}
        <p>2월 17일 발행</p>
        </div>
        )
      })}
      {/* //////////////////////////////////////////////// */}
      <input onChange={(e)=>{입력값변경(e.target.value); console.log(입력값);}}/>
      <button onClick={()=>{let copy = [...a]; copy.unshift(입력값); 제목변경(copy);}}>버튼</button>
      {/* //////////////////////////////////////////////// */}

      {
        modal == '열림'? <Modal 글제목={a} color={'skyblue'} title={title}/> : '아님'

      }

      <div>
        <h1 style={{color:'red'}}>총 정리</h1>
        다양한 이벤트 핸들러에 대해서 알고 있어라!<br></br>
        이벤트 버블링 : 클릭이벤트는 상위 html로 퍼짐<br></br>
        상위html로 퍼지는 이벤트버블링을 막고싶으면 e.stopPropagation(); (파라미터는 보통 e를 사용!)
        <h3>
          <br></br>
        </h3>
        <h4>
        </h4>
        <hr style={{width:'100px', height:'5px',backgroundColor:'black'}}></hr>
        
      </div>
    </div>
    
  );
  

}

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

export default App;
